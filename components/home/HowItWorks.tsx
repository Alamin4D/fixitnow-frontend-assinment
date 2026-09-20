"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Search,
  UserRoundCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    step: "01",
    action: "SEARCH",
    title: "Find Your Service",
    description:
      "Type what you need in the search bar. Browse trusted home services instantly.",
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    step: "02",
    action: "SELECT",
    title: "Choose an Expert",
    description:
      "Compare vetted local technicians based on live ratings, reviews, and expertise.",
    icon: UserRoundCheck,
    color: "from-purple-500 to-indigo-400",
    glow: "rgba(168,85,247,0.15)",
  },
  {
    step: "03",
    action: "SCHEDULE",
    title: "Book a Time Slot",
    description:
      "Pick a convenient date and hour that perfectly aligns with your busy schedule.",
    icon: CalendarCheck,
    color: "from-amber-500 to-orange-400",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    step: "04",
    action: "RELAX",
    title: "Get Job Done",
    description:
      "Sit back and relax while our certified professional takes complete care of the rest.",
    icon: CheckCircle2,
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16,185,129,0.15)",
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden  py-20 sm:py-24 transition-colors duration-300">
      
      
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-emerald-500/5 dark:bg-emerald-500/5 blur-[100px]" />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-800 px-4 py-1.5 text-[11px] font-bold uppercase text-primary shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
            Simple 4-Step Process
          </motion.span>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:text-base font-medium"
          >
            Getting professional help for your home maintenance is incredibly easy. Just follow these simple steps to complete your task effortlessly.
          </motion.p>
        </div>

        {/* ================= STEPS GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto mt-20"
        >
          
          
          <div className="absolute left-[12%] right-[12%] top-[40px] hidden lg:block" aria-hidden="true">
            <div className="h-[2px] w-full border-t-2 border-dashed border-gray-200 dark:border-gray-800" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div 
                  key={item.step} 
                  variants={cardVariants}
                  className="group relative flex flex-col items-center text-center"
                >
                  
                  
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center">
                    
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 scale-110" 
                      style={{ backgroundColor: item.glow }}
                    />

                    
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:text-white group-hover:shadow-lg">
                      <Icon className="h-6 w-6 transition-transform duration-300" strokeWidth={1.75} />
                      
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                    </div>

                    
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white dark:border-gray-950 bg-gray-100 dark:bg-gray-800 text-[10px] font-black text-gray-600 dark:text-gray-400 transition-all duration-300 group-hover:bg-gray-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-950">
                      {item.step}
                    </span>
                  </div>

                  
                  <div className="mt-5 w-full rounded-[20px] border border-gray-100 dark:border-gray-900/60 bg-gray-50/50 dark:bg-gray-900/20 p-6 pt-7 shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-300 group-hover:border-gray-200 dark:group-hover:border-gray-800 group-hover:bg-white dark:group-hover:bg-gray-900 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex-1 flex flex-col relative overflow-hidden">
                    
                    
                    <span className={`inline-block mx-auto text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded bg-gradient-to-r ${item.color} text-white mb-3 shadow-sm`}>
                      {item.action}
                    </span>

                    <h3 className="text-base font-extrabold tracking-tight text-gray-950 dark:text-gray-50 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="mt-2.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400 font-medium flex-1">
                      {item.description}
                    </p>

                    
                    {index < steps.length - 1 && (
                      <div className="mt-5 flex justify-center lg:hidden" aria-hidden="true">
                        <ArrowRight className="h-4 w-4 text-gray-300 dark:text-gray-700 animate-pulse" />
                      </div>
                    )}
                  </div>

                  
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-[26px] z-20 hidden h-7 w-7 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-400 dark:text-gray-600 shadow-sm transition-all duration-300 group-hover:border-gray-400 dark:group-hover:border-gray-600 lg:flex" aria-hidden="true">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
