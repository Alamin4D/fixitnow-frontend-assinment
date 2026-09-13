"use client";

import { motion } from "framer-motion";

import ServiceCard from "./ServiceCard";

interface AnimatedServicesGridProps {
  services: any[];
}

export default function AnimatedServicesGrid({
  services,
}: AnimatedServicesGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
              scale: 0.96,
            },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="h-full"
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}