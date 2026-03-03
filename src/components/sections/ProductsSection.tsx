"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
    {
        id: "erp",
        tabLabel: "University SRP",
        title: "Complete University Management System",
        description:
            "Streamline your institution with our comprehensive ERP solution. Managing admissions, academics, examinations, and administration with powerful tools that reduce manual effort and streamline operations and improve student performance.",
        features: [
            "Cloud-based platform features",
            "Flexible platform solutions",
            "Custom on best customers",
        ],
    },
    {
        id: "laic",
        tabLabel: "LAIC Platform",
        title: "AI-Powered Learning & Intelligence Platform",
        description:
            "Leverage cutting-edge artificial intelligence to deliver personalized learning experiences. Our LAIC platform adapts to each student's pace and learning style for maximum outcomes.",
        features: [
            "Adaptive learning algorithms",
            "Real-time performance analytics",
            "Smart content recommendations",
        ],
    },
    {
        id: "ai",
        tabLabel: "AI Tools",
        title: "Intelligent AI Tools for Education",
        description:
            "Empower faculty and students with a suite of AI-driven tools — from automated grading to plagiarism detection, smart scheduling, and predictive analytics.",
        features: [
            "Automated grading & feedback",
            "Plagiarism detection engine",
            "Predictive student analytics",
        ],
    },
    {
        id: "seam",
        tabLabel: "Seam System",
        title: "Seamless Integration & Communication",
        description:
            "Connect every department, faculty member, and student through one unified communication and integration layer. Real-time alerts, announcements, and workflow automation.",
        features: [
            "Unified communication hub",
            "Automated workflow triggers",
            "Multi-channel notifications",
        ],
    },
    {
        id: "receptionist",
        tabLabel: "AI Receptionist",
        title: "24/7 AI-Powered Virtual Receptionist",
        description:
            "Handle student queries, admission inquiries, and administrative requests around the clock with our conversational AI receptionist — no wait times, no missed queries.",
        features: [
            "Natural language query handling",
            "Admission & fee inquiry bot",
            "Escalation to human support",
        ],
    },
];

// ── Mock Dashboard UI ──
function DashboardMockup() {
    return (
        <div className="w-full rounded-[16px] overflow-hidden border border-[#E2E8F0] shadow-[0_8px_40px_rgba(0,0,0,0.10)] bg-white">
            <div className="h-[42px] bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center px-4 gap-3">
                <div className="flex gap-[6px]">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
                    <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 h-[22px] bg-[#EEF2F7] rounded-[6px] mx-8" />
            </div>
            <div className="bg-white p-4 min-h-[280px]">
                <div className="flex gap-3 h-full">
                    <div className="w-[80px] flex flex-col gap-2 pt-1">
                        {[44, 36, 52, 36, 44].map((w, i) => (
                            <div
                                key={i}
                                className={`h-[10px] rounded-[4px] ${i === 0 ? "bg-[#059669]" : "bg-[#E8EDF3]"
                                    }`}
                                style={{ width: `${w}px` }}
                            />
                        ))}
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                        <div className="h-[14px] w-[120px] bg-[#1E293B] rounded-[4px]" />
                        <div className="flex flex-col gap-[6px] mt-1">
                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map((c) => (
                                    <div key={c} className="h-[8px] bg-[#E8EDF3] rounded-[3px]" />
                                ))}
                            </div>
                            {[1, 2, 3, 4].map((row) => (
                                <div key={row} className="grid grid-cols-4 gap-2 items-center">
                                    <div className="h-[8px] bg-[#F1F5F9] rounded-[3px]" />
                                    <div className="h-[8px] bg-[#F1F5F9] rounded-[3px]" />
                                    <div className="h-[8px] bg-[#F1F5F9] rounded-[3px]" />
                                    <div
                                        className={`h-[16px] rounded-[4px] flex items-center justify-center ${row % 2 === 0
                                                ? "bg-[#DCFCE7]"
                                                : row % 3 === 0
                                                    ? "bg-[#FEF9C3]"
                                                    : "bg-[#EDE9FE]"
                                            }`}
                                    >
                                        <div
                                            className={`w-[28px] h-[6px] rounded-[3px] ${row % 2 === 0
                                                    ? "bg-[#059669]"
                                                    : row % 3 === 0
                                                        ? "bg-[#D97706]"
                                                        : "bg-[#7C3AED]"
                                                }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-auto pt-2">
                            {["#EDE9FE", "#DCFCE7", "#FEF3C7"].map((bg, i) => (
                                <div
                                    key={i}
                                    className="rounded-[8px] p-2 flex flex-col gap-1"
                                    style={{ backgroundColor: bg }}
                                >
                                    <div className="h-[8px] w-[40px] bg-white/70 rounded-[3px]" />
                                    <div className="h-[14px] w-[28px] bg-white/60 rounded-[3px]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProductsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const activeTab = PRODUCTS[activeIndex];

    // ── Auto-cycle every 3s, pause on hover ──
    useEffect(() => {
        if (!isHovered) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
            }, 3000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered]);

    // ── Scroll ONLY the tab strip horizontally — never the page ──
    useEffect(() => {
        const container = tabsRef.current;
        const btn = btnRefs.current[activeIndex];

        if (!container || !btn) return;

        // Calculate how much to scroll the container (not the page)
        const containerRect = container.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const scrollLeft =
            container.scrollLeft +
            (btnRect.left - containerRect.left) -
            containerRect.width / 2 +
            btnRect.width / 2;

        container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });
        // ✅ We use container.scrollTo — NOT scrollIntoView (which moves the page)
    }, [activeIndex]);

    return (
        <section id="products" className="py-[80px] bg-white overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-5 lg:px-8">

                {/* ── Section Header ── */}
                <div className="text-center mb-10">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#059669] mb-3 font-inter">
                        OUR PRODUCTS
                    </p>
                    <h2 className="text-[34px] md:text-[40px] font-bold font-inter text-[#0F172A] leading-[1.2] max-w-[520px] mx-auto">
                        Software Products That Transform Institutions
                    </h2>
                </div>

                {/* ── Tab Strip ── */}
                <div className="border-b border-[#E2E8F0] mb-10">
                    <div
                        ref={tabsRef}
                        className="flex items-center overflow-x-auto"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <style>{`
              #products-tabs-strip::-webkit-scrollbar { display: none; }
            `}</style>

                        {PRODUCTS.map((product, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <button
                                    key={product.id}
                                    ref={(el) => { btnRefs.current[idx] = el; }}
                                    data-tab={product.id}
                                    onClick={() => {
                                        setActiveIndex(idx);
                                        if (intervalRef.current) clearInterval(intervalRef.current);
                                        // restart cycle after manual click
                                        setIsHovered(false);
                                    }}
                                    className={`
                    relative px-5 py-3 text-[13.5px] font-inter whitespace-nowrap
                    transition-all duration-300 border-b-[2.5px] -mb-px outline-none
                    ${isActive
                                            ? "border-[#059669] text-[#059669] font-semibold"
                                            : "border-transparent text-[#64748B] font-medium hover:text-[#0F172A] hover:border-[#CBD5E1]"
                                        }
                  `}
                                >
                                    {product.tabLabel}

                                    {/* Progress fill underline */}
                                    {isActive && (
                                        <motion.span
                                            key={activeIndex + "-bar"}
                                            className="absolute bottom-[-1px] left-0 h-[2.5px] bg-[#059669] rounded-full z-10"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 3, ease: "linear" }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ── Content ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* LEFT */}
                        <div className="flex flex-col">
                            <p className="text-[#475569] text-[14px] leading-[1.7] font-dm-sans mb-7 max-w-[420px]">
                                {activeTab.description}
                            </p>

                            <ul className="flex flex-col gap-[14px] mb-8">
                                {activeTab.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-[10px] text-[#1E293B] text-[14px] font-medium font-dm-sans"
                                    >
                                        <span className="w-[20px] h-[20px] min-w-[20px] rounded-full bg-[#059669] flex items-center justify-center shadow-sm">
                                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                                                <path
                                                    d="M2 6.5L4.8 9L10 3"
                                                    stroke="white"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center gap-[6px] text-[#059669] text-[14px] font-semibold font-inter hover:gap-[10px] transition-all duration-200 w-fit group">
                                Request Demo
                                <ArrowRight className="w-[15px] h-[15px] transition-transform group-hover:translate-x-1 duration-200" />
                            </button>
                        </div>

                        {/* RIGHT */}
                        <motion.div
                            key={activeTab.id + "-img"}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.35 }}
                        >
                            <DashboardMockup />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}