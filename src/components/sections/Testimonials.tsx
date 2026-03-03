"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Dr. Rajesh Sharma",
        role: "Director, IIMT Engineering College",
        quote: "NexGen completely transformed our university's digital infrastructure. The ERP system handles everything from admissions to examinations seamlessly.",
        initials: "RS",
        accentColor: "#6C3AED",
        tag: "University ERP",
    },
    {
        name: "Priya Patel",
        role: "B.Tech Student, Medi-Caps University",
        quote: "The AI note generator and study tools have been incredibly helpful. The courses are practical, affordable, and the mentors actually care.",
        initials: "PP",
        accentColor: "#059669",
        tag: "EdTech",
    },
    {
        name: "Amit Verma",
        role: "CTO, TechVista Solutions",
        quote: "We hired NexGen for our cloud migration and they delivered ahead of schedule with zero downtime. Their technical expertise is outstanding.",
        initials: "AV",
        accentColor: "#FF6B2C",
        tag: "IT Services",
    },
    {
        name: "Prof. Sunita Deshmukh",
        role: "HOD Computer Science, COEP Pune",
        quote: "The LMS platform NexGen built has been a game-changer. Students love the interactive interface and we have real-time analytics.",
        initials: "SD",
        accentColor: "#6C3AED",
        tag: "LMS Platform",
    },
    {
        name: "Vikram Singh",
        role: "IT Manager, DPS Network",
        quote: "Their cybersecurity audit revealed vulnerabilities we had no idea about. Professional team with a clear remediation roadmap.",
        initials: "VS",
        accentColor: "#059669",
        tag: "Cybersecurity",
    },
    {
        name: "Ananya Gupta",
        role: "Software Engineer, Infosys",
        quote: "The internship program gave me real-world project experience no classroom could. I got placed within two months of completing it.",
        initials: "AG",
        accentColor: "#FF6B2C",
        tag: "Placement",
    },
    {
        name: "Rohit Mehta",
        role: "Principal, Ryan International School",
        quote: "The school management system is intuitive and powerful. Parents, teachers and admin all love the unified portal.",
        initials: "RM",
        accentColor: "#6C3AED",
        tag: "School ERP",
    },
    {
        name: "Sneha Joshi",
        role: "Full Stack Developer, Razorpay",
        quote: "NexGen's bootcamp was intense and industry-relevant. The live projects on my resume helped me crack top product companies.",
        initials: "SJ",
        accentColor: "#059669",
        tag: "Bootcamp",
    },
];

// ── Single card ──
function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
    return (
        <div
            className="group relative flex flex-col bg-white rounded-[18px] border border-[#E8EDF3]
                 shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                 hover:border-[#E2E8F0]
                 transition-all duration-300
                 p-5 w-[280px] min-w-[280px] cursor-default"
        >
            {/* Quote icon top-right */}
            <div
                className="absolute top-4 right-4 w-[28px] h-[28px] rounded-[8px] flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundColor: t.accentColor }}
            >
                <Quote className="w-[13px] h-[13px] text-white" />
            </div>

            {/* Tag chip */}
            <span
                className="self-start text-[10px] font-semibold font-inter px-[8px] py-[3px] rounded-full mb-3"
                style={{
                    backgroundColor: `${t.accentColor}12`,
                    color: t.accentColor,
                    border: `1px solid ${t.accentColor}25`,
                }}
            >
                {t.tag}
            </span>

            {/* Stars */}
            <div className="flex gap-[3px] mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[11px] h-[11px] fill-[#F59E0B] text-[#F59E0B]" />
                ))}
            </div>

            {/* Quote text */}
            <p className="text-[#475569] text-[12.5px] leading-[1.65] font-dm-sans flex-1 mb-4">
                "{t.quote}"
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[#F1F5F9] mb-4" />

            {/* Author */}
            <div className="flex items-center gap-3">
                <div
                    className="w-[34px] h-[34px] min-w-[34px] rounded-full flex items-center justify-center
                     text-white text-[11px] font-bold font-inter shadow-sm"
                    style={{ backgroundColor: t.accentColor }}
                >
                    {t.initials}
                </div>
                <div className="flex flex-col gap-[1px]">
                    <h4 className="text-[#0F172A] font-semibold font-inter text-[12.5px] leading-snug">
                        {t.name}
                    </h4>
                    <p className="text-[#94A3B8] font-dm-sans text-[11px] leading-snug">{t.role}</p>
                </div>
            </div>

            {/* Bottom hover accent */}
            
        </div>
    );
}

// ── Infinite marquee row ──
function MarqueeRow({
    items,
    direction = "left",
    speed = 35,
}: {
    items: typeof TESTIMONIALS;
    direction?: "left" | "right";
    speed?: number;
}) {
    // Duplicate for seamless loop
    const doubled = [...items, ...items];

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-4"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                style={{ width: "max-content" }}
            >
                {doubled.map((t, idx) => (
                    <TestimonialCard key={idx} t={t} />
                ))}
            </motion.div>
        </div>
    );
}

export default function Testimonials() {
    // Split into two rows — offset/staggered
    const rowOne = TESTIMONIALS.slice(0, 4);
    const rowTwo = TESTIMONIALS.slice(4).concat(TESTIMONIALS.slice(0, 4));

    return (
        <section id="testimonials" className="py-[100px] bg-white overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-5 lg:px-8">

                {/* ── Header ── */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#FF6B2C] mb-3 font-inter">
                        TESTIMONIALS
                    </p>
                    <h2 className="text-[34px] md:text-[42px] font-bold font-inter text-[#0F172A] leading-[1.15] mb-4">
                        What Our Clients & Students Say
                    </h2>
                    <p className="text-[14px] text-[#64748B] font-dm-sans max-w-[460px] mx-auto leading-[1.6]">
                        Real stories from institutions and individuals who have transformed
                        their digital journey with NexGen.
                    </p>
                </motion.div>

            </div>

            {/* ── Full-width marquee rows (outside container so it bleeds edge-to-edge) ── */}
            <div className="flex flex-col gap-4 w-full">

                {/* Row 1 — scrolls LEFT */}
                <MarqueeRow items={rowOne} direction="left" speed={40} />

                {/* Row 2 — scrolls RIGHT (offset feel) */}
                <MarqueeRow items={rowTwo} direction="right" speed={50} />

            </div>

            {/* ── Bottom stat strip ── */}
           
        </section>
    );
}