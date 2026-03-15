"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { 
  NotepadTextDashed,
} from "lucide-react";

export const ModemAnimatedFooter = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t border-white/5 bg-bg mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-3xl font-bold tracking-tighter">
                    {brandName}
                  </span>
                </div>
                <p className="text-zinc-400 font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-6 gap-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-zinc-500 hover:text-white transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 transform transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-zinc-500 max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      className="hover:text-white transition-all duration-300 hover:tracking-wider"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-4 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 z-20">
            <p className="text-sm text-zinc-500 text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl || "#"}
                  target="_blank"
                  className="text-sm text-zinc-500 hover:text-white transition-all duration-300"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>
        <div 
          className="bg-gradient-to-b from-white/10 via-white/5 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            maxWidth: '95vw'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        <div className="absolute hover:border-accent duration-500 drop-shadow-[0_0px_20px_rgba(139,92,246,0.3)] bottom-24 md:bottom-20 backdrop-blur-md rounded-3xl bg-white/[0.02] left-1/2 border border-white/10 flex items-center justify-center p-4 -translate-x-1/2 z-10 transition-all">
          <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-white to-white/80 rounded-2xl flex items-center justify-center shadow-2xl">
            {brandIcon || (
              <NotepadTextDashed className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-bg drop-shadow-md" />
            )}
          </div>
        </div>

        <div className="absolute bottom-32 sm:bottom-34 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full left-1/2 -translate-x-1/2"></div>
      </footer>
    </section>
  );
};
