"use client";

import React from "react";
import { motion } from "framer-motion";

const AWARDS = [
    {
        name: "ISO / NASSCOM",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/ISO_Logo_%28Red_square%29.svg/200px-ISO_Logo_%28Red_square%29.svg.png",
    },
    {
        name: "Top Clutch",
        logo: "https://static.clutch.co/static/img/badges/2023/top_clutch.co_developer_india_2023.png",
    },
    {
        name: "Clutch",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Clutch_logo.svg/320px-Clutch_logo.svg.png",
    },
    {
        name: "GoodFirms",
        logo: "https://www.goodfirms.co/goodfirms-badge.svg",
    },
    {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png",
    },
    {
        name: "Google Cloud",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/320px-Google_Cloud_logo.svg.png",
    },
    {
        name: "NASSCOM",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/NASSCOM_logo.svg/320px-NASSCOM_logo.svg.png",
    },
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    },
];

// ── Single badge card ──
function BadgeCard({ award }: { award: (typeof AWARDS)[0] }) {
    return (
        <div
            className="group flex flex-col items-center justify-center gap-3
                 bg-white rounded-[16px] border border-[#E8EDF3]
                 shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                 hover:shadow-[0_6px_20px_rgba(0,0,0,0.09)]
                 hover:border-[#D1D5DB]
                 transition-all duration-300 cursor-default
                 w-[130px] min-w-[130px] h-[100px] px-4 py-4"
        >
            {/* Logo — grayscale, hover color */}
            <img
                src={award.logo}
                alt={award.name}
                className="w-auto max-w-[80px] max-h-[44px] object-contain
                   grayscale group-hover:grayscale-0
                   opacity-60 group-hover:opacity-100
                   transition-all duration-300"
                onError={(e) => {
                    // fallback text if image fails
                    (e.target as HTMLImageElement).style.display = "none";
                }}
            />
            {/* Name below */}
            <span className="text-[10.5px] font-medium font-inter text-[#94A3B8] group-hover:text-[#64748B] transition-colors duration-300 text-center leading-snug">
                {award.name}
            </span>
        </div>
    );
}

// ── Marquee row ──
function MarqueeRow({ items }: { items: typeof AWARDS }) {
    const tripled = [...items, ...items, ...items];
    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-4"
                style={{ width: "max-content" }}
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {tripled.map((award, idx) => (
                    <BadgeCard key={idx} award={award} />
                ))}
            </motion.div>
        </div>
    );
}

export default function Awards() {
    return (
        <section className="py-[72px] bg-[#F8FAFC] overflow-hidden border-y border-[#E8EDF3]">

            {/* ── Header ── */}
            <div className="max-w-[1100px] mx-auto px-5 lg:px-8 mb-10">
                <motion.h2
                    className="text-[28px] md:text-[34px] font-bold font-inter text-[#0F172A] text-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Awards & Recognition
                </motion.h2>
            </div>

            {/* ── Scrolling badges ── */}
            <MarqueeRow items={AWARDS} />

        </section>
    );
}