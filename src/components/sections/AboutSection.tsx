"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [end, duration, isInView]);

    return <span ref={ref}>{count}</span>;
}

export function AboutSection() {
    return (
        <section id="about" className="py-[120px] bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">

                    {/* Left Column: Image Area */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-[24px] overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#1E293B] to-[#0A1628] border border-slate-200 flex items-center justify-center relative">
                            <span className="text-[#64748B] text-sm font-dm-sans">Team Photo — 600×450px</span>

                            {/* Floating Stat Card */}
                            <motion.div
                                className="absolute bottom-10 -right-10 bg-white rounded-2xl p-5 pr-8 shadow-[0_4px_24px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 transition-all hover:scale-105"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center text-[#6C3AED]">
                                    {/* Simple SVG badge icon */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <div>
                                    <p className="text-[#0F172A] font-inter font-bold text-xl leading-none mb-1">7+ Years</p>
                                    <p className="text-[#64748B] font-dm-sans text-[13px]">Experience</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader
                            badge="WHO WE ARE"
                            title="A Hybrid Tech Company Powering Education & Business"
                            align="left"
                            className="mb-6"
                        />

                        <div className="space-y-6 mb-10">
                            <p className="text-[#475569] text-[16px] leading-[1.6] font-dm-sans">
                                Empowering students, colleges, and businesses with cutting-edge IT services, skill-based learning platforms, and AI-driven software products and solutions.
                            </p>
                            <p className="text-[#475569] text-[16px] leading-[1.6] font-dm-sans">
                                Founded with a vision to bridge the gap between education and industry, NexGen combines practical tech training with enterprise-grade software development. We work closely with engineering colleges across India to deliver solutions that matter.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center gap-10 md:gap-16">
                            <div className="flex flex-col">
                                <p className="text-[#FF6B2C] text-[36px] font-bold font-mono leading-none mb-2">
                                    <CountUp end={2500} />+
                                </p>
                                <p className="text-[#64748B] text-[14px] font-dm-sans">Students</p>
                            </div>
                            <div className="w-[1px] h-10 bg-[#E2E8F0] hidden sm:block" />
                            <div className="flex flex-col">
                                <p className="text-[#FF6B2C] text-[36px] font-bold font-mono leading-none mb-2">
                                    <CountUp end={500} />+
                                </p>
                                <p className="text-[#64748B] text-[14px] font-dm-sans">Clients</p>
                            </div>
                            <div className="w-[1px] h-10 bg-[#E2E8F0] hidden sm:block" />
                            <div className="flex flex-col">
                                <p className="text-[#FF6B2C] text-[36px] font-bold font-mono leading-none mb-2">
                                    <CountUp end={100} />+
                                </p>
                                <p className="text-[#64748B] text-[14px] font-dm-sans">Projects</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
