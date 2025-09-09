"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({ text, children, className, position = "top" }) {
  const [visible, setVisible] = useState(false);

  // Map de posições
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  // Map da seta
  const arrows = {
    top: "top-full left-1/2 -translate-x-1/2 border-t border-l",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b border-r",
    left: "left-full top-1/2 -translate-y-1/2 border-l border-t",
    right: "right-full top-1/2 -translate-y-1/2 border-r border-b",
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.96,
              y: position === "top" ? 6 : position === "bottom" ? -6 : 0,
              x: position === "left" ? 6 : position === "right" ? -6 : 0,
            }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: position === "top" ? 6 : position === "bottom" ? -6 : 0,
              x: position === "left" ? 6 : position === "right" ? -6 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              absolute ${positions[position]}
              px-4 py-2 rounded-xl
              bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
              text-sm text-gray-800 dark:text-gray-100 
              shadow-lg border border-gray-200/40 dark:border-gray-700/40
              leading-relaxed tracking-wide
              z-50 ${className || ""}
            `}
          >
            {text}
            {/* Seta */}
            <span
              className={`absolute w-3 h-3 rotate-45 
              bg-white/90 dark:bg-gray-800/90 
              border-gray-200/40 dark:border-gray-700/40 ${arrows[position]}`}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
