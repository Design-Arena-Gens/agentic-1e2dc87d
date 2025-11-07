"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9)_0%,_rgba(247,237,220,0.5)_50%,_rgba(241,224,199,0.8)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(189,152,98,0.1)_0%,_rgba(241,223,197,0.3)_50%,_rgba(250,240,222,0.1)_100%)]" />
      </div>

      <main className="flex flex-col">
        <section className="pv-section pt-28 pb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"
          >
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-white/40 bg-white/60 px-5 py-2 text-xs tracking-[0.3em] text-[#9c7846] uppercase">
                Palmist Vision
              </span>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Discover Your Future Through Your Palms
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                Submit your details and receive a personalized palm reading
                report within 24 hours. Our master palmists blend ancient wisdom
                with modern analysis to deliver insights crafted exclusively for
                you.
              </p>
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <Link href="/form" className="pv-button">
                  Get Started
                </Link>
                <p className="max-w-xs text-sm text-slate-500">
                  Private &amp; secure uploads • Expert palmist review •
                  Personalized PDF delivered to your inbox
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="pv-card relative overflow-hidden p-10">
                <div className="absolute inset-x-16 -top-16 h-40 rounded-full bg-gradient-to-b from-white/40 to-white/0 blur-3xl" />
                <motion.div
                  className="relative space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h2 className="text-xl font-semibold text-[#2c2013]">
                    A Premium Palmistry Experience
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600">
                    “Each palm tells a story of purpose, potential, and hidden
                    possibilities. We study your palm lines, mounts, and
                    patterns to craft a truly bespoke future forecast.”
                  </p>
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-medium text-[#2f2315]">
                        Master Palmist Team
                      </p>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#9e7b47]">
                        15+ Years of Readings
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#82633a]">
                      <span className="text-lg font-semibold text-[#b78d54]">
                        24h
                      </span>
                      Delivery Guarantee
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="pv-section bg-white/70 backdrop-blur-sm">
          <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-3">
            {[
              {
                title: "Curated Ritual",
                description:
                  "We follow a meticulously designed review ritual blending Vedic palmistry and intuitive foresight.",
              },
              {
                title: "Confidential",
                description:
                  "Your details and palm photographs remain encrypted and accessible only to our master palmists.",
              },
              {
                title: "Premium PDF Report",
                description:
                  "Receive a beautifully designed, downloadable PDF with actionable guidance within 24 hours.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="pv-card h-full p-8 text-left"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="pv-text-gradient text-sm font-semibold uppercase tracking-[0.3em]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-[#332417]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pv-section pb-28">
          <div className="w-full max-w-4xl text-center">
            <motion.h2
              className="text-3xl font-semibold text-[#332417] sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              How Palmist Vision Works
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              A seamless, concierge-level journey from submission to revelation.
            </motion.p>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                {
                  title: "1. Share Details",
                  description:
                    "Complete our secure form with your birth details and upload clear palm photographs.",
                },
                {
                  title: "2. Palmist Analysis",
                  description:
                    "Our expert palmists interpret your lines, mounts, and impressions to decode future pathways.",
                },
                {
                  title: "3. Receive Report",
                  description:
                    "A tailored PDF arrives in your inbox within 24 hours, packed with insights and guidance.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className="pv-card relative p-8 text-left"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#ead7b1] bg-white text-lg font-semibold text-[#b5853d] shadow-md">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-[#322417]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/form" className="pv-button">
              Begin Your Reading
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
