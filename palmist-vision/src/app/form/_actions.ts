"use server";

import { sql } from "@vercel/postgres";
import { put } from "@vercel/blob";
import { redirect } from "next/navigation";
import { z } from "zod";
import { randomUUID } from "crypto";

type ActionState = {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

const submissionSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  dob: z.string().min(1, "Date of birth is required."),
  gender: z.enum(["Female", "Male", "Non-binary", "Prefer not to say"]),
  email: z.string().email("Please provide a valid email address."),
  leftPalm: z.instanceof(File, { message: "Left palm photo is required." }),
  rightPalm: z.instanceof(File, { message: "Right palm photo is required." }),
});

async function ensureSchema() {
  await sql`
    CREATE TABLE IF NOT EXISTS palmist_submissions (
      id UUID PRIMARY KEY,
      full_name TEXT NOT NULL,
      dob DATE NOT NULL,
      gender TEXT NOT NULL,
      email TEXT NOT NULL,
      left_palm_url TEXT,
      right_palm_url TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

async function uploadToBlob(path: string, file: File) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const { url } = await put(
      path,
      file,
      {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      },
    );
    return url;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  return `data:${file.type};base64,${buffer.toString("base64")}`;
}

export async function submitReading(
  _prevState: ActionState | undefined,
  formData: FormData,
): Promise<ActionState> {
  const leftPalm = formData.get("leftPalm");
  const rightPalm = formData.get("rightPalm");

  const parseResult = submissionSchema.safeParse({
    fullName: formData.get("fullName"),
    dob: formData.get("dob"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    leftPalm,
    rightPalm,
  });

  if (!parseResult.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parseResult.error.issues) {
      if (issue.path[0]) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
    }

    return {
      success: false,
      message: "Please review your submission.",
      fieldErrors,
    };
  }

  try {
    await ensureSchema();
    const id = randomUUID();

    if (parseResult.data.leftPalm.size === 0) {
      return {
        success: false,
        message: "Please upload your left palm photo.",
        fieldErrors: { leftPalm: "Left palm photo is required." },
      };
    }

    if (parseResult.data.rightPalm.size === 0) {
      return {
        success: false,
        message: "Please upload your right palm photo.",
        fieldErrors: { rightPalm: "Right palm photo is required." },
      };
    }

    const maxFileSize = 10 * 1024 * 1024;
    if (
      parseResult.data.leftPalm.size > maxFileSize ||
      parseResult.data.rightPalm.size > maxFileSize
    ) {
      return {
        success: false,
        message: "Each image must be 10MB or less.",
        fieldErrors: {
          leftPalm: "Maximum 10MB per file.",
          rightPalm: "Maximum 10MB per file.",
        },
      };
    }

    const leftUrl = await uploadToBlob(
      `palmist-vision/${id}/left_${Date.now()}`,
      parseResult.data.leftPalm,
    );
    const rightUrl = await uploadToBlob(
      `palmist-vision/${id}/right_${Date.now()}`,
      parseResult.data.rightPalm,
    );

    await sql`
      INSERT INTO palmist_submissions (id, full_name, dob, gender, email, left_palm_url, right_palm_url)
      VALUES (${id}, ${parseResult.data.fullName}, ${parseResult.data.dob}, ${parseResult.data.gender}, ${parseResult.data.email}, ${leftUrl}, ${rightUrl})
    `;

    redirect("/thank-you");
  } catch (error) {
    console.error("Palmist submission failed", error);
    return {
      success: false,
      message:
        "We encountered a technical issue while saving your submission. Please try again shortly.",
    };
  }

  return {
    success: true,
    message: "Submission received.",
  };
}
