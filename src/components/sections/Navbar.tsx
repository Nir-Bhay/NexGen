"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "EdTech", href: "#edtech" },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState("Home");

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md border-b border-[#E8EDF3] shadow-[0_2px_16px_rgba(0,0,0,0.06)] py-[14px]"
                        : "bg-white border-b border-[#F1F5F9] py-[18px]"
                )}
            >
                <div className="max-w-[1100px] mx-auto px-5 lg:px-8 flex items-center justify-between">

                    {/* ── Logo ── */}
                    <Link
                        href="/"
                        className="flex items-center gap-[2px] shrink-0"
                    >
                        <span className="text-[20px] font-black font-inter tracking-tight text-[#0F172A]">
                            Nex
                        </span>
                        <span className="text-[20px] font-black font-inter tracking-tight text-[#FF6B2C]">
                            Gen
                        </span>
                    </Link>

                    {/* ── Desktop Nav — centered ── */}
                    <nav className="hidden md:flex items-center gap-[6px] absolute left-1/2 -translate-x-1/2">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeLink === link.name;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.name)}
                                    className={cn(
                                        "relative px-[12px] py-[6px] text-[13.5px] font-inter font-medium rounded-[8px] transition-all duration-200",
                                        isActive
                                            ? "text-[#0F172A]"
                                            : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                                    )}
                                >
                                    {link.name}

                                    {/* Active dot indicator */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active-dot"
                                            className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-[#6C3AED]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ── Desktop Right Actions ── */}
                    <div className="hidden md:flex items-center gap-3 shrink-0">
                        <Link
                            href="/login"
                            className="text-[13.5px] font-medium font-inter text-[#64748B] hover:text-[#0F172A] transition-colors duration-200 px-3 py-[6px]"
                        >
                            Login
                        </Link>
                        <Link
                            href="/get-started"
                            className="flex items-center gap-[6px] px-[18px] py-[8px] bg-[#6C3AED] hover:bg-[#5B2FD6]
                         text-white text-[13px] font-semibold font-inter rounded-[8px]
                         transition-all duration-200 shadow-[0_4px_14px_rgba(108,58,237,0.3)]
                         hover:shadow-[0_6px_20px_rgba(108,58,237,0.40)] hover:-translate-y-[1px]"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* ── Mobile Menu Button ── */}
                    <button
                        className="md:hidden w-[36px] h-[36px] flex items-center justify-center rounded-[8px]
                       border border-[#E8EDF3] text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]
                       transition-all duration-200"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={isMobileOpen ? "close" : "open"}
                                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                transition={{ duration: 0.15 }}
                            >
                                {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </header>

            {/* ── Mobile Drawer ── */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                        />

                        {/* Drawer panel */}
                        <motion.div
                            className="fixed top-[64px] left-3 right-3 z-50 md:hidden
                         bg-white rounded-[18px] border border-[#E8EDF3]
                         shadow-[0_16px_48px_rgba(0,0,0,0.12)]
                         overflow-hidden"
                            initial={{ opacity: 0, y: -12, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.97 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                            {/* Nav links */}
                            <nav className="flex flex-col p-3 gap-[2px]">
                                {NAV_LINKS.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.04 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => {
                                                setActiveLink(link.name);
                                                setIsMobileOpen(false);
                                            }}
                                            className={cn(
                                                "flex items-center px-4 py-3 rounded-[10px] text-[14px] font-medium font-inter transition-all duration-200",
                                                activeLink === link.name
                                                    ? "bg-[#F5F3FF] text-[#6C3AED]"
                                                    : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                                            )}
                                        >
                                            {link.name}
                                            {activeLink === link.name && (
                                                <span className="ml-auto w-[6px] h-[6px] rounded-full bg-[#6C3AED]" />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom actions */}
                            <div className="border-t border-[#F1F5F9] p-4 flex flex-col gap-3">
                                <Link
                                    href="/login"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-center py-[10px] text-[14px] font-medium font-inter
                             text-[#64748B] hover:text-[#0F172A] transition-colors duration-200
                             border border-[#E8EDF3] rounded-[10px] hover:bg-[#F8FAFC]"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/get-started"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="text-center py-[10px] text-[14px] font-semibold font-inter
                             bg-[#6C3AED] text-white rounded-[10px]
                             hover:bg-[#5B2FD6] transition-all duration-200
                             shadow-[0_4px_14px_rgba(108,58,237,0.25)]"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}