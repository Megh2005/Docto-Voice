"use client";

import { motion } from "motion/react";
import Banner from "@/components/banner";
import Features from "@/components/features";
import Link from "next/link";


export default function HeroSectionOne() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Banner/>
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
     
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-6xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Transforming the Present Image of Health Tech"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-4xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Talk to AI doctors, get instant medical support, and generate prescriptions within minutes. Experience advanced AI tools designed to deliver real-time healthcare assistance at your fingertips.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <Link href="/contact">
            <button
              className="inline-block w-60 transform rounded-lg border border-[#3b82f6] bg-[#111827] px-6 py-2 font-medium text-[#e0e7ff] transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Support
            </button>
          </Link>
        </motion.div>
      </div>
      <Features/>
    </div>
  );
}

