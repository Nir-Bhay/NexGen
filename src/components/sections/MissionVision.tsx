"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Settings } from "lucide-react";

const STEPS = [
    {
        title: "Target",
        label: "— Mission —",
        desc: "To make quality tech education accessible and affordable across India while delivering enterprise-grade IT solutions that transform institutions.",
        icon: Target,
        accentColor: "#EF4444",
        bgGradient: "linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)",
        iconBg: "bg-red-500",
        labelColor: "text-red-500",
        borderColor: "#EF4444",
        statLeft: { value: "1M+", label: "Students Goal" },
        statRight: { value: "2030", label: "Target Year" },
    },
    {
        title: "Eyen",
        label: "— Vision —",
        desc: "To become India's most trusted hybrid EdTech and IT company, empowering one million students and ten thousand businesses by 2030.",
        icon: Eye,
        accentColor: "#059669",
        bgGradient: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
        iconBg: "bg-emerald-500",
        labelColor: "text-emerald-600",
        borderColor: "#059669",
        statLeft: { value: "10k+", label: "Businesses" },
        statRight: { value: "Pan India", label: "Reach" },
    },
    {
        title: "Approach",
        label: "— Mywoob —",
        desc: "We believe in learning by doing. Small-batch interaction, real-world project mentorship, and interactive AI-powered tools.",
        icon: Settings,
        accentColor: "#3B82F6",
        bgGradient: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
        iconBg: "bg-blue-500",
        labelColor: "text-blue-600",
        borderColor: "#3B82F6",
        statLeft: { value: "AI", label: "Powered" },
        statRight: { value: "1:8", label: "Mentor Ratio" },
    },
];

export default function MissionVision() {
    return (
        <section id="mission" className="py-[100px] bg-white relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-5 lg:px-8">

                {/* ── Section Header ── */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[34px] md:text-[42px] font-bold font-inter text-[#0F172A] leading-[1.15]">
                        Mission / Vision / Approach
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* ── LEFT — Cards ── */}
                    <div className="flex flex-col gap-4">
                        {STEPS.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.12, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="group relative rounded-[16px] p-5 overflow-hidden cursor-pointer
                             hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300"
                                    style={{ background: step.bgGradient }}
                                >
                                    {/* Subtle border */}
                                    <div
                                        className="absolute inset-0 rounded-[16px] border-[1.5px] pointer-events-none"
                                        style={{ borderColor: `${step.accentColor}30` }}
                                    />

                                    {/* Top row: icon + label + stats */}
                                    <div className="flex items-start justify-between mb-3">
                                        {/* Icon + label */}
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                                                style={{ backgroundColor: step.accentColor }}
                                            >
                                                <Icon className="w-[18px] h-[18px]" />
                                            </div>
                                            <div className="flex flex-col gap-[1px]">
                                                <span
                                                    className="text-[10.5px] font-semibold font-inter tracking-[0.08em] italic"
                                                    style={{ color: step.accentColor }}
                                                >
                                                    {step.label}
                                                </span>
                                                <h3 className="text-[20px] font-bold font-inter text-[#0F172A] leading-none">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Mini stats top-right */}
                                        <div className="flex gap-4 items-center">
                                            {[step.statLeft, step.statRight].map((s, i) => (
                                                <div key={i} className="flex flex-col items-end gap-[1px]">
                                                    <span
                                                        className="text-[15px] font-bold font-inter leading-none"
                                                        style={{ color: step.accentColor }}
                                                    >
                                                        {s.value}
                                                    </span>
                                                    <span className="text-[9.5px] text-[#64748B] font-dm-sans whitespace-nowrap">
                                                        {s.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#475569] text-[13px] leading-[1.6] font-dm-sans pl-[52px]">
                                        {step.desc}
                                    </p>

                                    
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── RIGHT — Image Collage ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative h-[420px] lg:h-[460px]"
                    >
                        {/* Dot pattern — top right */}
                        <div className="absolute top-0 right-0 w-28 h-28 opacity-25 pointer-events-none z-0">
                            <svg width="100%" height="100%" viewBox="0 0 100 100">
                                {Array.from({ length: 6 }).map((_, row) =>
                                    Array.from({ length: 6 }).map((_, col) => (
                                        <circle
                                            key={`${row}-${col}`}
                                            cx={8 + col * 16}
                                            cy={8 + row * 16}
                                            r="2"
                                            fill="#94A3B8"
                                        />
                                    ))
                                )}
                            </svg>
                        </div>

                        {/* Dot pattern — bottom left */}
                        <div className="absolute bottom-8 left-0 w-20 h-20 opacity-20 pointer-events-none z-0">
                            <svg width="100%" height="100%" viewBox="0 0 80 80">
                                {Array.from({ length: 5 }).map((_, row) =>
                                    Array.from({ length: 5 }).map((_, col) => (
                                        <circle
                                            key={`${row}-${col}`}
                                            cx={8 + col * 16}
                                            cy={8 + row * 16}
                                            r="2"
                                            fill="#94A3B8"
                                        />
                                    ))
                                )}
                            </svg>
                        </div>

                        {/* ── Image 1 — Top-right (classroom photo) ── */}
                        <motion.div
                            className="absolute top-0 right-0 w-[58%] h-[46%] rounded-[18px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.14)] z-10"
                            animate={{ y: [0, -7, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
                                alt="Classroom session"
                                className="w-full h-full object-cover"
                            />
                            {/* overlay tint */}
                            <div className="absolute inset-0 bg-[#6C3AED]/10" />
                            {/* label badge */}
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-[8px] px-[8px] py-[4px] flex items-center gap-[5px]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#6C3AED]" />
                                <span className="text-[10px] font-semibold font-inter text-[#1E293B]">
                                    Live Sessions
                                </span>
                            </div>
                        </motion.div>

                        {/* ── Image 2 — Middle-left (coding) ── */}
                        <motion.div
                            className="absolute top-[22%] left-0 w-[52%] h-[42%] rounded-[18px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.14)] z-20"
                            animate={{ y: [0, 7, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                                alt="Coding session"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#059669]/10" />
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-[8px] px-[8px] py-[4px] flex items-center gap-[5px]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#059669]" />
                                <span className="text-[10px] font-semibold font-inter text-[#1E293B]">
                                    Hands-on Labs
                                </span>
                            </div>
                        </motion.div>

                        {/* ── Image 3 — Bottom-right (meeting) ── */}
                        <motion.div
                            className="absolute bottom-0 right-[8%] w-[56%] h-[44%] rounded-[18px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.14)] z-10"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                                alt="Team meeting"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#FF6B2C]/08" />
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-[8px] px-[8px] py-[4px] flex items-center gap-[5px]">
                                <div className="w-[6px] h-[6px] rounded-full bg-[#FF6B2C]" />
                                <span className="text-[10px] font-semibold font-inter text-[#1E293B]">
                                    Mentor Connect
                                </span>
                            </div>
                        </motion.div>

                        {/* ── Floating stat badge ── */}
                        <motion.div
                            className="absolute top-[44%] right-[4%] z-30 bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#E8EDF3] px-4 py-3 flex flex-col gap-[2px]"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        >
                            <span className="text-[18px] font-bold font-inter text-[#059669] leading-none">
                                2,500+
                            </span>
                            <span className="text-[10px] text-[#64748B] font-dm-sans">Students Placed</span>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}