"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
