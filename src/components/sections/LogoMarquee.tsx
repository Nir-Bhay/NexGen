"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGOS = [
    "IIT Delhi", "BITS Pilani", "Anna University", "VIT Vellore", "SRM University",
    "Google Cloud", "Microsoft", "AWS", "Oracle", "IBM", "Intel", "Adobe"
];

const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export function LogoMarquee() {
    return (
        <section className="py-16 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-5 lg:px-8 mb-10">
                <p className="text-center text-[13px] font-semibold text-[#64748B] uppercase tracking-[3px] font-inter">
                    TRUSTED BY 100+ COLLEGES & COMPANIES
                </p>
            </div>

            <div className="relative flex items-center">
                {/* Faders */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40
                    }}
                >
                    {duplicatedLogos.map((logo, idx) => (
                        <div key={idx} className="flex-shrink-0">
                            <span className="text-[22px] md:text-[26px] font-bold font-inter text-[#0F172A]/20 hover:text-[#0F172A]/40 transition-colors cursor-default select-none">
                                {logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
