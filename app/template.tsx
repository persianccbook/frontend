"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  console.log(path)

  return (
    <AnimatePresence mode="sync" initial={false }>
      <motion.div
      key={path}
        initial={{ scale: 0 }}  
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      > 
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
