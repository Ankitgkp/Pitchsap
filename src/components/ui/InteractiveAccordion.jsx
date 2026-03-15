"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function InteractiveAccordion({ items, className }) {
  const [activeId, setActiveId] = useState(items[0]?.id || null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-2">
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div 
                key={item.id}
                className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/20"
            >
              <motion.button
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full group relative text-left"
                initial={false}
              >
                <div className="flex items-center gap-4 py-5 px-6">
                  {/* Title */}
                  <motion.h3
                    className="text-lg font-semibold tracking-tight"
                    animate={{
                      color: isActive
                        ? "rgb(255 255 255)"
                        : isHovered
                          ? "rgb(255 255 255)"
                          : "rgb(161 161 170)",
                    }}
                    transition={{
                      duration: 0.2
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Animated indicator */}
                  <div className="ml-auto flex items-center justify-center">
                    <motion.div
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={cn(
                            "transition-colors",
                            isActive || isHovered ? "text-accent" : "text-zinc-500"
                        )}
                      >
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden bg-white/[0.01]"
                  >
                    <motion.p
                      className="px-6 pb-6 text-zinc-400 leading-relaxed text-sm"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    >
                      {item.content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
