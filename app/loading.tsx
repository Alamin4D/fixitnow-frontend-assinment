"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Wrench, Settings, ShieldCheck, Cpu } from 'lucide-react';

export default function Loading() {
  const [percent, setPercent] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  
  
  const statusMessages = [
    "Initializing System Core...",
    "Running Smart Diagnostics...",
    "Calibrating Technical Tools...",
    "Polishing Hardware Engine...",
    "Optimizing User Experience...",
    "Securing Gateway Access..."
  ];

  
  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [statusMessages.length]);

  
  const rotateClockwise: Variants = {
    animate: {
      rotate: 360,
      transition: { duration: 6, ease: "linear", repeat: Infinity }
    }
  };

  const rotateCounterClockwise: Variants = {
    animate: {
      rotate: -360,
      transition: { duration: 4, ease: "linear", repeat: Infinity }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#03050a] overflow-hidden select-none">
      
     
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      
      
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[120px] -bottom-20 -right-20 animate-[pulse_4s_infinite_1s]" />

      <div className="relative flex flex-col items-center">
        
        
        <motion.div 
          className="relative flex h-52 w-52 items-center justify-center rounded-[48px] bg-slate-900/30 backdrop-blur-3xl border border-slate-800/60 shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
          style={{ perspective: 1000 }} 
          animate={{
            y: [0, -12, 0],
            rotateX: [0, 8, 0],
            rotateY: [0, -8, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
         
          <div className="absolute inset-0 rounded-[48px] bg-gradient-to-tr from-blue-500/30 via-transparent to-cyan-400/20 opacity-70 pointer-events-none" />

          
          <motion.div 
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          
          <motion.div 
            variants={rotateClockwise}
            animate="animate"
            className="absolute text-blue-500"
          >
            <Settings className="h-32 w-32 stroke-[0.8] fill-current drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]" />
          </motion.div>

          
          <motion.div 
            variants={rotateCounterClockwise}
            animate="animate"
            className="absolute top-6 right-6 text-cyan-400"
          >
            <Settings className="h-16 w-16 stroke-[0.8] fill-current drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </motion.div>

          
          <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#03050a] shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] border border-slate-800/80">
            
            <Wrench className="h-6 w-6 text-white fill-slate-950 mb-0.5 animate-[pulse_1.2s_infinite]" />
            
            <span className="text-[10px] font-black text-cyan-400 tabular-nums tracking-wide">
              {percent}%
            </span>
          </div>

          
          <span className="absolute top-8 left-12 h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="absolute bottom-12 right-8 h-1 w-1 rounded-full bg-blue-400 animate-pulse" />
          <span className="absolute bottom-6 left-14 h-2 w-2 rounded-full bg-indigo-500/30 animate-bounce" />
        </motion.div>

        
        <motion.h2 
          className="mt-12 text-3xl font-black tracking-widest uppercase flex items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">
            FixIt
          </span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent ml-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Now
          </span>
        </motion.h2>

        
        <div className="mt-6 flex flex-col items-center min-h-[60px] justify-center">
          <motion.div 
            key={statusIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase"
          >
            {statusIndex % 2 === 0 ? (
              <Cpu className="h-3 w-3 text-cyan-400 animate-pulse" />
            ) : (
              <ShieldCheck className="h-3 w-3 text-blue-400 animate-pulse" />
            )}
            {statusMessages[statusIndex]}
          </motion.div>
          
          
          <div className="h-[2px] w-52 overflow-hidden rounded-full bg-slate-900 border border-slate-800/40 mt-4">
            <motion.div 
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400"
              animate={{ x: [-130, 260] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
