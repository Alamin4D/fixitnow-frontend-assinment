"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  UserRoundCheck,
  CalendarCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Find Your Service",
    description:
      "Search for the home service you need and explore trusted professionals near you.",
    icon: Search,
  },
  {
    step: "02",
    title: "Choose an Expert",
    description:
      "Compare ratings, reviews, and expertise to find the right professional for your job.",
    icon: UserRoundCheck,
  },
  {
    step: "03",
    title: "Book a Time",
    description:
      "Choose a convenient date and time that perfectly fits your schedule.",
    icon: CalendarCheck,
  },
  {
    step: "04",
    title: "Get It Done",
    description:
      "Sit back and relax while your trusted professional takes care of the job.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary"
          >
            SIMPLE & EASY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:text-base"
          >
            Get reliable home services in just a few simple steps.
            Find, book, and relax while we take care of the rest.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-3xl border border-gray-200/80 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl dark:border-gray-800 ">
                  {/* Background decoration */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

                  {/* Top */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <span className="text-4xl font-black tracking-tight text-gray-100 dark:text-gray-800">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                    <span className="text-xs font-semibold text-gray-400">
                      STEP {item.step}
                    </span>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white dark:border-gray-700">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
