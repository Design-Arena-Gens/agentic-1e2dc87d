"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitReading } from "./_actions";
import Link from "next/link";
import clsx from "clsx";

const initialState: {
  success: boolean;
  message: string;
  fieldErrors: Record<string, string>;
} = {
  success: false,
  message: "",
  fieldErrors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="pv-button" disabled={pending}>
      {pending ? "Submitting..." : "Submit & Secure Your Reading"}
    </button>
  );
}

export default function FormPage() {
  const [state, formAction] = useFormState(submitReading, initialState);
  const clientErrors = state?.fieldErrors ?? {};

  return (
    <div className="relative min-h-screen pb-20 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92)_0%,_rgba(250,240,222,0.6)_60%,_rgba(245,226,198,0.9)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,_rgba(206,180,139,0.12)_0%,_rgba(255,255,255,0.4)_45%,_rgba(215,189,143,0.2)_100%)]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 sm:px-10">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a27f4a]">
              Premium Palmistry Intake
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-[#322417] sm:text-5xl">
              Share Your Palm Details
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              Complete the secure form below. Our palmistry team will receive
              your information instantly and craft a bespoke report delivered to
              your email within 24 hours.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-[#ab874f] underline-offset-4 transition hover:text-[#b89358] hover:underline"
          >
            ⬅ Back to Home
          </Link>
        </div>

        <form
          action={formAction}
          encType="multipart/form-data"
          className="pv-card space-y-10 p-10"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6a3e]"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="E.g. Aarya Malhotra"
                className={clsx(
                  "w-full rounded-2xl border border-[#eadfc8] bg-white/80 px-4 py-3 text-base text-[#332517] shadow-sm outline-none transition focus:border-[#c7a05d] focus:ring-2 focus:ring-[#ecd9b4]",
                  clientErrors.fullName && "border-red-300 focus:ring-red-200",
                )}
                required
              />
              {clientErrors.fullName && (
                <p className="text-sm text-red-500">{clientErrors.fullName}</p>
              )}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="dob"
                className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6a3e]"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                className={clsx(
                  "w-full rounded-2xl border border-[#eadfc8] bg-white/80 px-4 py-3 text-base text-[#332517] shadow-sm outline-none transition focus:border-[#c7a05d] focus:ring-2 focus:ring-[#ecd9b4]",
                  clientErrors.dob && "border-red-300 focus:ring-red-200",
                )}
                required
              />
              {clientErrors.dob && (
                <p className="text-sm text-red-500">{clientErrors.dob}</p>
              )}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="gender"
                className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6a3e]"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className={clsx(
                  "w-full rounded-2xl border border-[#eadfc8] bg-white/80 px-4 py-3 text-base text-[#332517] shadow-sm outline-none transition focus:border-[#c7a05d] focus:ring-2 focus:ring-[#ecd9b4]",
                  clientErrors.gender && "border-red-300 focus:ring-red-200",
                )}
                required
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              {clientErrors.gender && (
                <p className="text-sm text-red-500">{clientErrors.gender}</p>
              )}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6a3e]"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className={clsx(
                  "w-full rounded-2xl border border-[#eadfc8] bg-white/80 px-4 py-3 text-base text-[#332517] shadow-sm outline-none transition focus:border-[#c7a05d] focus:ring-2 focus:ring-[#ecd9b4]",
                  clientErrors.email && "border-red-300 focus:ring-red-200",
                )}
                required
              />
              {clientErrors.email && (
                <p className="text-sm text-red-500">{clientErrors.email}</p>
              )}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-3">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6a3e]">
                  Left Palm Photograph
                </p>
                <p className="text-sm text-slate-500">
                  Upload a clear, well-lit image. Supported formats: JPG, PNG up
                  to 10MB.
                </p>
              </div>
              <input
                id="leftPalm"
                name="leftPalm"
                type="file"
                accept="image/*"
                className={clsx(
                  "block w-full cursor-pointer rounded-2xl border border-dashed border-[#d8c5a5] bg-white/40 px-4 py-6 text-sm text-[#6e5635] transition hover:border-[#c7a15a]",
                  clientErrors.leftPalm && "border-red-300",
                )}
                required
              />
              {clientErrors.leftPalm && (
                <p className="text-sm text-red-500">{clientErrors.leftPalm}</p>
              )}
            </div>
            <div className="grid gap-3">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8b6a3e]">
                  Right Palm Photograph
                </p>
                <p className="text-sm text-slate-500">
                  Ensure your entire palm is visible up to the wrist for best
                  analysis.
                </p>
              </div>
              <input
                id="rightPalm"
                name="rightPalm"
                type="file"
                accept="image/*"
                className={clsx(
                  "block w-full cursor-pointer rounded-2xl border border-dashed border-[#d8c5a5] bg-white/40 px-4 py-6 text-sm text-[#6e5635] transition hover:border-[#c7a15a]",
                  clientErrors.rightPalm && "border-red-300",
                )}
                required
              />
              {clientErrors.rightPalm && (
                <p className="text-sm text-red-500">{clientErrors.rightPalm}</p>
              )}
            </div>
          </div>

          {state.message && !state.success && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {state.message}
            </div>
          )}

          <div className="flex flex-col items-center gap-6">
            <SubmitButton />
            <p className="max-w-2xl text-center text-xs uppercase tracking-[0.3em] text-[#9e7b47]">
              We safeguard every detail with bank-grade encryption. Your palm
              images are used strictly for expert analysis and deleted after the
              report is delivered.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
