// "use client" আর framer-motion লাগছে না: সব অ্যানিমেশন এখন পিওর CSS।
// CSS অ্যানিমেশন সার্ভার থেকে আসা HTML দেখানোর সঙ্গে সঙ্গে চলে,
// JavaScript লোড বা hydrate হওয়ার জন্য অপেক্ষা করে না।
import { Wrench, Settings, ShieldCheck, Cpu } from 'lucide-react';

const STATUS_MESSAGES = [
  "Initializing System Core...",
  "Running Smart Diagnostics...",
  "Calibrating Technical Tools...",
  "Polishing Hardware Engine...",
  "Optimizing User Experience...",
  "Securing Gateway Access...",
];

const TOTAL_SECONDS = 6;

function buildCss() {
  const n = STATUS_MESSAGES.length;
  const fade = 2;
  const f = (v: number) => `${v.toFixed(2)}%`;

  
  let messages = '';
  STATUS_MESSAGES.forEach((_, i) => {
    const start = (i / n) * 100;
    const end = ((i + 1) / n) * 100;
    const last = i === n - 1;
    messages +=
      `@keyframes fx-msg-${i}{` +
      (i > 0 ? `0%{opacity:0;transform:translateY(5px)}` : '') +
      `${f(start)}{opacity:0;transform:translateY(5px)}` +
      `${f(start + fade)}{opacity:1;transform:translateY(0)}` +
      (last
        ? `100%{opacity:1;transform:translateY(0)}`
        : `${f(end - fade)}{opacity:1;transform:translateY(0)}` +
          `${f(end)}{opacity:0;transform:translateY(-5px)}` +
          `100%{opacity:0;transform:translateY(-5px)}`) +
      `}` +
      `.fx-msg-${i}{animation:fx-msg-${i} var(--fx-dur) linear forwards}`;
  });

  return `
.fx-root{--fx-dur:${TOTAL_SECONDS}s}


@property --fx-p{syntax:'<integer>';inherits:false;initial-value:0}
@keyframes fx-count{from{--fx-p:0}to{--fx-p:100}}
.fx-pct{counter-reset:fx-n var(--fx-p);animation:fx-count var(--fx-dur) linear forwards}
.fx-pct::after{content:counter(fx-n) "%"}


@keyframes fx-bar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.fx-bar{transform-origin:left center;animation:fx-bar var(--fx-dur) linear forwards}


@keyframes fx-cw{to{transform:rotate(360deg)}}
@keyframes fx-ccw{to{transform:rotate(-360deg)}}
.fx-cw{animation:fx-cw 6s linear infinite;will-change:transform}
.fx-ccw{animation:fx-ccw 3s linear infinite;will-change:transform}


@keyframes fx-float{
  0%,100%{transform:perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)}
  50%{transform:perspective(1000px) translateY(-12px) rotateX(8deg) rotateY(-8deg)}
}
.fx-float{animation:fx-float 5s ease-in-out infinite;will-change:transform}


@keyframes fx-scan{0%,100%{transform:translateY(0)}50%{transform:translateY(204px)}}
.fx-scan{animation:fx-scan 2.5s linear infinite}


@keyframes fx-pulse{50%{opacity:.5}}
.fx-pulse{animation:fx-pulse 2s cubic-bezier(.4,0,.6,1) infinite}
.fx-pulse-fast{animation:fx-pulse 1.2s cubic-bezier(.4,0,.6,1) infinite}
.fx-pulse-slow{animation:fx-pulse 4s cubic-bezier(.4,0,.6,1) 1s infinite}
@keyframes fx-ping{75%,100%{transform:scale(2);opacity:0}}
.fx-ping{animation:fx-ping 1s cubic-bezier(0,0,.2,1) infinite}
@keyframes fx-bounce{
  0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}
  50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}
}
.fx-bounce{animation:fx-bounce 1s infinite}


@keyframes fx-in{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:none}}
.fx-in{animation:fx-in .8s ease-out both}

${messages}
`;
}

const CSS = buildCss();

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fx-root fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none bg-slate-50 dark:bg-[#03050a]"
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <span className="sr-only">Loading...</span>

      
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 dark:opacity-40 [background-size:24px_24px] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#0f172a_1px,transparent_1px)]"
      />

      
      <div aria-hidden="true" className="fx-pulse absolute w-[500px] h-[500px] rounded-full blur-[140px] -top-20 -left-20 bg-blue-400/20 dark:bg-blue-600/10" />
      <div aria-hidden="true" className="fx-pulse-slow absolute w-[450px] h-[450px] rounded-full blur-[120px] -bottom-20 -right-20 bg-indigo-400/15 dark:bg-indigo-500/5" />

      <div aria-hidden="true" className="relative flex flex-col items-center">

        
        <div
          className="fx-float relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-[48px] backdrop-blur-3xl border
            bg-white/70 border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.15)]
            dark:bg-slate-900/30 dark:border-slate-800/60 dark:shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 rounded-[48px] bg-gradient-to-tr from-blue-500/20 via-transparent to-cyan-400/20 dark:from-blue-500/30 opacity-70 pointer-events-none" />

          
          <div className="fx-scan absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 dark:via-cyan-400 to-transparent opacity-60" />

          
          <div className="fx-cw absolute flex text-blue-500">
            <Settings className="h-32 w-32 stroke-[0.8] fill-current drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]" />
          </div>

          
          <div className="fx-ccw absolute top-6 right-6 flex text-cyan-500 dark:text-cyan-400">
            <Settings className="h-16 w-16 stroke-[0.8] fill-current drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </div>

          
          <div
            className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border
              bg-white border-slate-200 shadow-[inset_0_2px_10px_rgba(15,23,42,0.06)]
              dark:bg-[#03050a] dark:border-slate-800/80 dark:shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)]"
          >
            <Wrench className="fx-pulse-fast h-6 w-6 mb-0.5 text-slate-900 fill-white dark:text-white dark:fill-slate-950" />
            <span className="fx-pct text-[10px] font-black tabular-nums tracking-wide text-cyan-600 dark:text-cyan-400" />
          </div>

          
          <span className="fx-ping absolute top-8 left-12 h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
          <span className="fx-pulse absolute bottom-12 right-8 h-1 w-1 rounded-full bg-blue-500 dark:bg-blue-400" />
          <span className="fx-bounce absolute bottom-6 left-14 h-2 w-2 rounded-full bg-indigo-500/40 dark:bg-indigo-500/30" />
        </div>

        
        <h2 className="fx-in mt-12 text-3xl font-black tracking-widest uppercase flex items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400">
            FixIt
          </span>
          <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">
            Now
          </span>
        </h2>

        <div className="mt-6 flex flex-col items-center min-h-[60px] justify-center">

          
          <div className="relative h-4 w-[90vw] max-w-sm">
            {STATUS_MESSAGES.map((message, i) => (
              <div
                key={message}
                className={`fx-msg-${i} absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap opacity-0 text-[10px] font-bold tracking-[0.25em] uppercase text-slate-600 dark:text-slate-400`}
              >
                {i % 2 === 0 ? (
                  <Cpu className="fx-pulse h-3 w-3 text-cyan-600 dark:text-cyan-400" />
                ) : (
                  <ShieldCheck className="fx-pulse h-3 w-3 text-blue-600 dark:text-blue-400" />
                )}
                {message}
              </div>
            ))}
          </div>


          <div className="h-[2px] w-52 overflow-hidden rounded-full border mt-4 bg-slate-200 border-slate-300/50 dark:bg-slate-900 dark:border-slate-800/40">
            <div className="fx-bar h-full w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />
          </div>
        </div>

      </div>
    </div>
  );
}