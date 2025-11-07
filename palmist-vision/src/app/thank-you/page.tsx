"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95)_0%,_rgba(247,233,210,0.7)_60%,_rgba(240,221,191,0.85)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,_rgba(193,155,80,0.12)_0%,_rgba(255,255,255,0.5)_45%,_rgba(193,155,80,0.1)_100%)]" />

      <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pv-card space-y-6 px-10 py-14"
        >
          <span className="pv-text-gradient text-xs font-semibold uppercase tracking-[0.4em]">
            Palmist Vision
          </span>
          <h1 className="text-balance text-4xl font-semibold text-[#2f2316] sm:text-5xl">
            Thank you for submitting your details.
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Our palmists are analyzing your palm data with care and devotion.
            You will receive a handcrafted PDF report in your inbox within the
            next 24 hours.
          </p>
          <div className="grid gap-2 text-sm text-slate-500">
            <p>Keep an eye on your email (and spam folder) for the report.</p>
            <p>You may reply directly to the email for clarifications.</p>
          </div>
          <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
            <Link href="/" className="pv-button">
              Return Home
            </Link>
            <a
              href="mailto:concierge@palmistvision.com"
              className="text-sm font-medium text-[#a9854b] underline-offset-4 transition hover:text-[#b89358] hover:underline"
            >
              Need assistance? Write to us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
