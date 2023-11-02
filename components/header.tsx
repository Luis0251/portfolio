"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      initial={{y: -100, x:"-50%", opacity: 0}}
      animate={{y:0, x:"-50%", opacity:1}}
      >
         <nav className="flex justify-center items-center h-full">
          <ul className="flex gap-5 text-[0.9rem] font-medium text-gray-500">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="flex items-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link href={link.hash}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
