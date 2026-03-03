"use client";

import React from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const DribbbleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
);

const SOCIAL_LINKS = [
    { icon: Facebook, href: "#", label: "Facebook", hoverColor: "#1877F2" },
    { icon: Twitter, href: "#", label: "Twitter", hoverColor: "#1DA1F2" },
    { icon: Linkedin, href: "#", label: "LinkedIn", hoverColor: "#0A66C2" },
    { icon: Instagram, href: "#", label: "Instagram", hoverColor: "#E4405F" },
    { icon: Youtube, href: "#", label: "YouTube", hoverColor: "#FF0000" },
    { icon: DribbbleIcon, href: "#", label: "Dribbble", hoverColor: "#EA4C89" },
];

const QUICK_LINKS = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
];

const SERVICES = [
    { label: "University ERP", href: "#" },
    { label: "EdTech Platform", href: "#edtech" },
    { label: "AI Tools", href: "#" },
    { label: "IT Solutions", href: "#" },
    { label: "School ERP", href: "#" },
    { label: "Skill Training", href: "#" },
];

const CONTACT = [
    {
        icon: MapPin,
        color: "#6C3AED",
        bg: "#F5F3FF",
        text: "NexGen Technologies, 110 Tech Park,\nBangalore, Karnataka — 560001, India",
    },
    {
        icon: Phone,
        color: "#FF6B2C",
        bg: "#FFF7ED",
        text: "+91 98765 43210",
    },
    {
        icon: Mail,
        color: "#059669",
        bg: "#ECFDF5",
        text: "work@nexgeninc.com",
    },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A1628] relative overflow-hidden">

            {/* ── Subtle top glow ── */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#6C3AED]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[300px] h-[200px] bg-[#FF6B2C]/4 rounded-full blur-[100px] pointer-events-none" />

            {/* ── Newsletter bar ── */}
            <div className="border-b border-white/[0.06]">
                <div className="max-w-[1100px] mx-auto px-5 lg:px-8 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left text */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-white font-bold font-inter text-[18px]">
                                Stay in the loop 🚀
                            </h3>
                            <p className="text-[#64748B] font-dm-sans text-[13px]">
                                Get updates on new courses, products and tech insights.
                            </p>
                        </div>

                        {/* Input + button */}
                        <div className="flex items-center gap-0 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-[260px] h-[44px] px-4 bg-white/[0.05] border border-white/[0.1] border-r-0
                           rounded-l-[10px] text-[13px] font-dm-sans text-white placeholder:text-[#475569]
                           focus:outline-none focus:border-[#6C3AED]/50 transition-colors"
                            />
                            <button
                                className="h-[44px] px-5 bg-[#6C3AED] hover:bg-[#5B2FD6] text-white text-[13px]
                           font-semibold font-inter rounded-r-[10px] flex items-center gap-2
                           transition-all duration-200 group whitespace-nowrap"
                            >
                                Subscribe
                                <ArrowRight className="w-[13px] h-[13px] transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main footer grid ── */}
            <div className="max-w-[1100px] mx-auto px-5 lg:px-8 pt-14 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr] gap-10 mb-12">

                    {/* ── Col 1 — Brand ── */}
                    <div className="flex flex-col gap-5">
                        {/* Logo */}
                        <div className="text-[24px] font-black font-inter tracking-tight text-white">
                            Nex<span className="text-[#6C3AED]">Gen</span>
                        </div>

                        {/* Tagline */}
                        <p className="text-[#64748B] font-dm-sans text-[13px] leading-[1.7] max-w-[240px]">
                            India's leading hybrid EdTech & IT company — empowering students,
                            institutions, and businesses through technology.
                        </p>

                        {/* Mini stat chips */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                { label: "2,500+ Placed", color: "#059669", bg: "#052E16" },
                                { label: "500+ Partners", color: "#6C3AED", bg: "#1E0050" },
                                { label: "10+ Yrs Exp", color: "#FF6B2C", bg: "#2D1000" },
                            ].map((chip, i) => (
                                <span
                                    key={i}
                                    className="text-[10.5px] font-semibold font-inter px-[8px] py-[3px] rounded-full border"
                                    style={{
                                        color: chip.color,
                                        backgroundColor: chip.bg,
                                        borderColor: `${chip.color}30`,
                                    }}
                                >
                                    {chip.label}
                                </span>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-2 flex-wrap">
                            {SOCIAL_LINKS.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={i}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-[34px] h-[34px] rounded-[8px] bg-white/[0.05] border border-white/[0.08]
                               flex items-center justify-center text-[#64748B]
                               hover:bg-white/[0.10] hover:text-white hover:border-white/[0.15]
                               transition-all duration-200"
                                    >
                                        <Icon className="w-[14px] h-[14px]" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Col 2 — Quick Links ── */}
                    <div>
                        <h4 className="text-white text-[11px] font-bold font-inter uppercase tracking-[0.14em] mb-6">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-[10px]">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-[#64748B] hover:text-white
                               font-dm-sans text-[13px] transition-colors duration-200"
                                    >
                                        <span
                                            className="w-[4px] h-[4px] rounded-full bg-[#6C3AED] opacity-0 group-hover:opacity-100
                                 transition-opacity duration-200"
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3 — Services ── */}
                    <div>
                        <h4 className="text-white text-[11px] font-bold font-inter uppercase tracking-[0.14em] mb-6">
                            Services
                        </h4>
                        <ul className="flex flex-col gap-[10px]">
                            {SERVICES.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-[#64748B] hover:text-white
                               font-dm-sans text-[13px] transition-colors duration-200"
                                    >
                                        <span
                                            className="w-[4px] h-[4px] rounded-full bg-[#FF6B2C] opacity-0 group-hover:opacity-100
                                 transition-opacity duration-200"
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4 — Contact ── */}
                    <div>
                        <h4 className="text-white text-[11px] font-bold font-inter uppercase tracking-[0.14em] mb-6">
                            Contact Us
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {CONTACT.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <li key={i} className="group flex items-start gap-3">
                                        {/* Icon pill */}
                                        <div
                                            className="w-[32px] h-[32px] min-w-[32px] rounded-[8px] flex items-center justify-center mt-[1px]"
                                            style={{ backgroundColor: `${item.color}18`, color: item.color }}
                                        >
                                            <Icon className="w-[13px] h-[13px]" />
                                        </div>
                                        <p className="text-[#64748B] font-dm-sans text-[12.5px] leading-[1.6] group-hover:text-[#94A3B8] transition-colors duration-200 whitespace-pre-line">
                                            {item.text}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* CTA button */}
                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-[6px] text-[#6C3AED] text-[12.5px]
                         font-semibold font-inter hover:gap-[10px] transition-all duration-200 group"
                        >
                            Get in touch
                            <ArrowRight className="w-[13px] h-[13px] transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="w-full h-px bg-white/[0.06] mb-7" />

                {/* ── Bottom bar ── */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left */}
                    <p className="text-[#475569] font-dm-sans text-[12px]">
                        © 2027 NexGen Technologies Pvt. Ltd. All rights reserved.
                    </p>

                    {/* Center — built with */}
                    <p className="text-[#334155] font-dm-sans text-[11px]">
                        Built with ❤️ in India 🇮🇳
                    </p>

                    {/* Right — policy links */}
                    <div className="flex items-center gap-5">
                        {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-[#475569] hover:text-white font-dm-sans text-[12px] transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}