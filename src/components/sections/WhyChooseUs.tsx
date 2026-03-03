"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    BookOpen,
    Briefcase,
    GraduationCap,
    Globe,
    Clock,
    ArrowRight,
    Award,
    Building2,
} from "lucide-react";

const REASONS = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Expert Faculty",
        desc: "Learn from industry experts and experienced engineers who bring real-world knowledge to the classroom.",
        features: ["Industry Professionals", "10+ Years Experience", "Personal Mentorship"],
        stat: { value: "100+", label: "Expert Mentors" },
        accentColor: "#FF6B2C",
        miniVisual: "avatars",
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: "Industry Curriculum",
        desc: "Our courses are designed in collaboration with top tech companies to ensure you learn exactly what the industry demands.",
        features: ["Company-Designed", "Regular Updates", "Practical Focus"],
        stat: { value: "50+", label: "Courses" },
        accentColor: "#6C3AED",
        miniVisual: "bars",
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Live Projects",
        desc: "Get hands-on experience by working on real-world projects and internship programs provided by our IT services division.",
        features: ["Real-World Experience", "Portfolio Building", "Industry Exposure"],
        stat: { value: "180+", label: "Live Projects" },
        accentColor: "#059669",
        miniVisual: "progress",
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Placement Support",
        desc: "A dedicated placement cell that works tirelessly to connect our students with top-tier tech companies globally.",
        features: ["500+ Hiring Partners", "Mock Interviews", "Resume Building"],
        stat: { value: "94%", label: "Placement Rate" },
        accentColor: "#FF6B2C",
        miniVisual: "donut",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Certification",
        desc: "Earn certifications that are recognized by employers worldwide and validated by our partner institutions.",
        features: ["Industry Recognized", "Globally Valid", "Partner Institutions"],
        stat: { value: "30+", label: "Countries" },
        accentColor: "#6C3AED",
        miniVisual: "badges",
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Learning",
        desc: "Access recorded lectures, interactive notes, and dedicated doubt-clearing sessions anytime, anywhere.",
        features: ["24/7 Access", "Doubt Clearing", "Self-Paced"],
        stat: { value: "24/7", label: "Always Available" },
        accentColor: "#059669",
        miniVisual: "timeline",
    },
];

const STATS = [
    { value: "10+", label: "Years Experience", icon: <Award className="w-4 h-4" />, color: "#FF6B2C" },
    { value: "500+", label: "Hiring Partners", icon: <Building2 className="w-4 h-4" />, color: "#6C3AED" },
    { value: "2500+", label: "Students Placed", icon: <GraduationCap className="w-4 h-4" />, color: "#059669" },
    { value: "100+", label: "Expert Mentors", icon: <Users className="w-4 h-4" />, color: "#FF6B2C" },
];

// ── Mini Visuals ──
function MiniVisual({ type, color }: { type: string; color: string }) {
    if (type === "avatars") {
        return (
            <div className="flex items-center gap-[3px] mt-3">
                {["FF6B2C", "6C3AED", "059669", "F59E0B", "EC4899"].map((c, i) => (
                    <div
                        key={i}
                        className="w-[26px] h-[26px] rounded-full border-[2px] border-white flex items-center justify-center text-[9px] font-bold text-white"
                        style={{
                            backgroundColor: `#${c}`,
                            marginLeft: i > 0 ? "-6px" : "0",
                            zIndex: 5 - i,
                        }}
                    >
                        {["A", "B", "C", "D", "E"][i]}
                    </div>
                ))}
                <span className="ml-2 text-[11px] text-[#94A3B8] font-dm-sans">+95 mentors</span>
            </div>
        );
    }

    if (type === "bars") {
        const bars = [
            { label: "Web Dev", pct: 90 },
            { label: "AI/ML", pct: 75 },
            { label: "Cloud", pct: 82 },
        ];
        return (
            <div className="flex flex-col gap-[6px] mt-3">
                {bars.map((bar, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="text-[10px] text-[#94A3B8] font-dm-sans w-[48px]">{bar.label}</span>
                        <div className="flex-1 h-[5px] bg-[#F1F5F9] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${bar.pct}%` }}
                                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <span className="text-[10px] font-semibold font-inter" style={{ color }}>
                            {bar.pct}%
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "progress") {
        const steps = ["Concept", "Build", "Review", "Deploy"];
        return (
            <div className="flex items-center gap-1 mt-3">
                {steps.map((step, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-[3px]">
                            <div
                                className="w-[20px] h-[20px] rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                                style={{
                                    backgroundColor: i < 3 ? color : "#E2E8F0",
                                    color: i < 3 ? "white" : "#94A3B8",
                                }}
                            >
                                {i < 3 ? "✓" : i + 1}
                            </div>
                            <span className="text-[8px] text-[#94A3B8] font-dm-sans whitespace-nowrap">
                                {step}
                            </span>
                        </div>
                        {i < steps.length - 1 && (
                            <div
                                className="flex-1 h-[2px] rounded-full mb-3"
                                style={{ backgroundColor: i < 2 ? color : "#E2E8F0" }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    }

    if (type === "donut") {
        return (
            <div className="flex items-center gap-3 mt-3">
                <svg width="44" height="44" viewBox="0 0 44 44">
                    <circle
                        cx="22" cy="22" r="16"
                        fill="none"
                        stroke="#F1F5F9"
                        strokeWidth="5"
                    />
                    <circle
                        cx="22" cy="22" r="16"
                        fill="none"
                        stroke={color}
                        strokeWidth="5"
                        strokeDasharray={`${0.94 * 2 * Math.PI * 16} ${2 * Math.PI * 16}`}
                        strokeDashoffset={2 * Math.PI * 16 * 0.25}
                        strokeLinecap="round"
                        transform="rotate(-90 22 22)"
                    />
                    <text x="22" y="26" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold">
                        94%
                    </text>
                </svg>
                <div className="flex flex-col gap-[2px]">
                    <span className="text-[11px] text-[#94A3B8] font-dm-sans">Placement Rate</span>
                    <span className="text-[11px] font-semibold font-inter text-[#1E293B]">
                        2,500+ Placed
                    </span>
                </div>
            </div>
        );
    }

    if (type === "badges") {
        const certs = ["AWS", "GCP", "Azure", "K8s"];
        return (
            <div className="flex flex-wrap gap-[5px] mt-3">
                {certs.map((cert, i) => (
                    <span
                        key={i}
                        className="px-[7px] py-[3px] rounded-[5px] text-[9px] font-bold font-inter border"
                        style={{
                            backgroundColor: `${color}12`,
                            borderColor: `${color}30`,
                            color,
                        }}
                    >
                        {cert}
                    </span>
                ))}
                <span className="px-[7px] py-[3px] rounded-[5px] text-[9px] font-bold font-inter bg-[#F8FAFC] border border-[#E2E8F0] text-[#94A3B8]">
                    +26 more
                </span>
            </div>
        );
    }

    if (type === "timeline") {
        const times = ["6 AM", "12 PM", "6 PM", "12 AM"];
        return (
            <div className="mt-3 flex flex-col gap-[4px]">
                <div className="flex justify-between items-center mb-1">
                    {times.map((t, i) => (
                        <span key={i} className="text-[9px] text-[#94A3B8] font-dm-sans">{t}</span>
                    ))}
                </div>
                <div className="h-[6px] rounded-full bg-[#F1F5F9] overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{ width: "100%", backgroundColor: color, opacity: 0.7 }}
                    />
                </div>
                <div className="flex items-center gap-[5px] mt-1">
                    <div
                        className="w-[6px] h-[6px] rounded-full animate-pulse"
                        style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] text-[#94A3B8] font-dm-sans">Available right now</span>
                </div>
            </div>
        );
    }

    return null;
}

export function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-[100px] bg-white overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-5 lg:px-8">

                {/* ── Header ── */}
                <div className="text-center mb-12">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#FF6B2C] mb-3 font-inter">
                        WHY CHOOSE US
                    </p>
                    <h2 className="text-[36px] md:text-[44px] font-bold font-inter text-[#0F172A] leading-[1.15] mb-4">
                        What Sets NexGen Apart?
                    </h2>
                    <p className="text-[14px] text-[#64748B] font-dm-sans max-w-[480px] mx-auto leading-[1.6]">
                        We combine the best of industry experience, academic excellence, and
                        cutting-edge technology to deliver unparalleled value.
                    </p>
                </div>

                {/* ── Stats Bar ── */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {STATS.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            className="group bg-white rounded-[16px] border border-[#E8EDF3] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-5 text-center hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] hover:border-[#E2E8F0] transition-all duration-300 cursor-default"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon */}
                            <div
                                className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center mx-auto mb-3"
                                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                            >
                                {stat.icon}
                            </div>
                            {/* Value */}
                            <p
                                className="text-[30px] font-bold font-inter mb-1 leading-none"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </p>
                            {/* Label */}
                            <p className="text-[#94A3B8] text-[12px] font-dm-sans">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {REASONS.map((reason, idx) => (
                        <motion.div
                            key={reason.title}
                            className="group bg-white rounded-[18px] border border-[#E8EDF3] shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:border-[#E2E8F0] transition-all duration-300 p-[24px] flex flex-col cursor-pointer"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                        >
                            {/* ── Top row: icon + stat ── */}
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="w-[44px] h-[44px] rounded-[12px] flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${reason.accentColor}15`,
                                        color: reason.accentColor,
                                    }}
                                >
                                    {reason.icon}
                                </div>
                                {/* Stat badge */}
                                <div className="flex flex-col items-end gap-[1px]">
                                    <span
                                        className="text-[18px] font-bold font-inter leading-none"
                                        style={{ color: reason.accentColor }}
                                    >
                                        {reason.stat.value}
                                    </span>
                                    <span className="text-[10px] text-[#94A3B8] font-dm-sans">
                                        {reason.stat.label}
                                    </span>
                                </div>
                            </div>

                            {/* ── Title ── */}
                            <h3 className="text-[17px] font-semibold font-inter text-[#0F172A] mb-2">
                                {reason.title}
                            </h3>

                            {/* ── Description ── */}
                            <p className="text-[#64748B] text-[13px] leading-[1.6] font-dm-sans mb-3">
                                {reason.desc}
                            </p>

                            {/* ── Mini Visual ── */}
                            <MiniVisual type={reason.miniVisual} color={reason.accentColor} />

                            {/* ── Divider ── */}
                            <div className="w-full h-px bg-[#F1F5F9] my-4" />

                            {/* ── Feature tags ── */}
                            <div className="flex flex-wrap gap-[6px] mt-auto">
                                {reason.features.map((feature, fIdx) => (
                                    <span
                                        key={fIdx}
                                        className="flex items-center gap-[5px] px-[9px] py-[4px] rounded-full border text-[11px] font-dm-sans"
                                        style={{
                                            backgroundColor: `${reason.accentColor}10`,
                                            borderColor: `${reason.accentColor}25`,
                                            color: reason.accentColor,
                                        }}
                                    >
                                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                                            <path
                                                d="M1.5 5.5L3.8 8L8.5 2"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* ── Hover accent line ── */}
                            <div
                                className="h-[2px] w-0 group-hover:w-full rounded-full mt-4 transition-all duration-500"
                                style={{ backgroundColor: reason.accentColor }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <motion.div
                    className="mt-14 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <button className="inline-flex items-center gap-2 px-8 py-[14px] bg-[#FF6B2C] text-white font-semibold font-dm-sans text-[15px] rounded-[12px] hover:bg-[#E55A1F] transition-all duration-200 group shadow-[0_8px_32px_rgba(255,107,44,0.22)] hover:shadow-[0_12px_40px_rgba(255,107,44,0.32)] hover:-translate-y-[1px]">
                        Explore Our Courses
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}