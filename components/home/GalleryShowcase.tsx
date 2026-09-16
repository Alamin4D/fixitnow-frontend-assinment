"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Images, Maximize2 } from "lucide-react";
import Container from "../shared/Container";

const galleryImages = [
  { 
    src: "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    alt: "Carpenter measuring wood", 
    span: "md:col-span-1 md:row-span-2 aspect-[3/4]" 
  },
  { 
    src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWN8ZW58MHx8MHx8fDA%3D", 
    alt: "Technician using power tool", 
    span: "md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto" 
  },
  { 
    src: "https://fixitheroes.ae/wp-content/uploads/2026/02/2.png", 
    alt: "Welding work close-up", 
    span: "md:col-span-1 md:row-span-1 aspect-square" 
  },
  { 
    src: "https://media.istockphoto.com/id/2253670782/photo/pest-control-exterminator-in-white-protective-suit-mask-and-gas-respirator-with-sprayer.webp?a=1&b=1&s=612x612&w=0&k=20&c=jo39r8PtbPfC_cJjTV62GIXRr1M-Va5Ov1fDCX7VRsk=", 
    alt: "Worker in high-vis vest", 
    span: "md:col-span-1 md:row-span-1 aspect-square" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94RncT4mJlUw3C6im58j0sBnTUVGW7-DTdf89btxdXg&s=10", 
    alt: "Technician wearing safety goggles", 
    span: "md:col-span-1 md:row-span-2 aspect-[3/4]" 
  },
  { 
    src: "https://www.gharpedia.com/cf-img/uploads/2024/10/Professional-Equipment-and-Products-05-0504170065.jpg", 
    alt: "Site supervisor reviewing plans", 
    span: "md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8BHLBquaRCT7AnlfIwwAQf86yXHKAJEallO-z-1lUg&s=10", 
    alt: "Cleaning service team at work", 
    span: "md:col-span-1 md:row-span-1 aspect-square" 
  },
];

export default function GalleryShowcase() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 border-y border-muted-foreground/10">
      {/* Background Lighting Effects */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px]" />

      <Container>
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
            <Images className="h-3.5 w-3.5" />
            <span>Project Gallery</span>
          </div>
          
          
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
            Explore glimpses of our verified professionals delivering premium maintenance, installations, and complex home repair solutions on-site.
          </p>
        </div>

        {/* ================= BENTO MASONRY GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[180px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-sm col-span-1 row-span-1 ${img.span}`}
            >
              {/* Zoom & Overlay Animation on Hover */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 md:p-5" />
              
              {/* Floating Action View Icon */}
              <div className="absolute top-4 right-4 z-20 h-8 w-8 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <Maximize2 className="h-3.5 w-3.5" />
              </div>

              {/* Text metadata appearing on hover */}
              <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Verified Work</p>
                <h4 className="text-sm font-bold text-white tracking-tight mt-0.5 truncate">{img.alt}</h4>
              </div>

              {/* Next.js Optimized Image */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
