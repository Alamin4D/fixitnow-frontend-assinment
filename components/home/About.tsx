"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, CheckCircle2, Globe2 } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };


  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl w-full rounded-[24px] p-6 md:p-12 flex flex-col lg:flex-row gap-12 lg:gap-5 items-center">
        

        <motion.div 
          className="w-full lg:w-1/2 relative flex flex-col"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
    
          <motion.div 
            className="absolute -top-4 -left-2 md:-left-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full py-1.5 px-4 flex items-center gap-3 shadow-md z-10 transition-colors duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <div className="bg-[#f1a80a] text-white text-xs font-bold w-11 h-11 rounded-full flex items-center justify-center shrink-0">
              13yrs
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900 dark:text-white leading-tight">Trusted Since</span>
              <span className="text-[11px] text-gray-500 dark:text-gray-400">2013 · 40 countries</span>
            </div>
          </motion.div>

          
          <div className="relative w-full aspect-[4/3] lg:h-[450px]">
            <div className="w-[88%] h-full relative rounded-2xl overflow-hidden border border-transparent dark:border-gray-800">
              <Image
                src="https://tru-fix.in/assets/images/about-story.png" 
                alt="Fix-it technical experts team"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            

            <motion.div 
              className="absolute bottom-[-24px] right-0 w-[48%] aspect-[4/3] bg-white dark:bg-gray-900 p-2 rounded-[20px] shadow-lg border border-transparent dark:border-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLe6I7lefMQAuLcOhMsbhy5vbqSHVinPTccZl88kPOf6xFowasXPEhYVc&s=10"
                  alt="Technicians repairing stove kitchen appliance"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 40vw, 20vw"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col pt-6 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase mb-4">
            <span className="text-sm">🏁</span> OUR STORY
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-3xl font-extrabold text-gray-950 dark:text-gray-50 leading-[1.15] mb-5 tracking-tight transition-colors duration-300">
            We believe generosity works best when it's traceable.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8 transition-colors duration-300">
            Hopewell started in a single village kitchen in 2013 and has grown into a donor network spanning 40 countries — without ever losing sight of the person on the receiving end of a gift.
          </motion.p>

          
          <div className="flex flex-col gap-6">
            
            
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="bg-[#e6f7ed] dark:bg-emerald-950/50 text-[#10b981] dark:text-[#34d399] p-2.5 rounded-full shrink-0 transition-colors duration-300">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-950 dark:text-gray-50 mb-0.5 transition-colors duration-300">Full transparency</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-normal transition-colors duration-300">Track your donation from wallet to warehouse to doorstep.</p>
              </div>
            </motion.div>

           
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="bg-[#e6f7ed] dark:bg-emerald-950/50 text-[#10b981] dark:text-[#34d399] p-2.5 rounded-full shrink-0 transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-950 dark:text-gray-50 mb-0.5 transition-colors duration-300">Verified NGO partners</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-normal transition-colors duration-300">Every partner is audited annually by an independent body.</p>
              </div>
            </motion.div>

            
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="bg-[#e6f7ed] dark:bg-emerald-950/50 text-[#10b981] dark:text-[#34d399] p-2.5 rounded-full shrink-0 transition-colors duration-300">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-950 dark:text-gray-50 mb-0.5 transition-colors duration-300">On-the-ground reach</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-normal transition-colors duration-300">Local teams in 40 countries, not a single head office.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
