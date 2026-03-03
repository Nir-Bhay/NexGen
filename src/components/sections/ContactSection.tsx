"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

// Dribbble icon component
const DribbbleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
    </svg>
);

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold font-inter text-[#0F172A] mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-5">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#64748B]" />
                                </div>
                                <div>
                                    <p className="text-[#0F172A] font-dm-sans text-sm">
                                        1100 Random Agarwal,
                                    </p>
                                    <p className="text-[#64748B] font-dm-sans text-sm">
                                        All Rights Reserved, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-[#64748B]" />
                                </div>
                                <p className="text-[#0F172A] font-dm-sans text-sm">
                                    +91 98765 43210
                                </p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-[#64748B]" />
                                </div>
                                <p className="text-[#0F172A] font-dm-sans text-sm">
                                    work@nexgeninc.com
                                </p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-8">
                            <div className="flex items-center gap-3">
                                {[
                                    { Icon: Facebook, href: "#" },
                                    { Icon: Twitter, href: "#" },
                                    { Icon: Linkedin, href: "#" },
                                    { Icon: Instagram, href: "#" },
                                    { Icon: Youtube, href: "#" },
                                    { Icon: DribbbleIcon, href: "#" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-10 h-10 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#0F172A] hover:text-white transition-all"
                                    >
                                        <social.Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] focus:bg-white focus:border-[#6C3AED] focus:outline-none transition-all font-dm-sans text-sm"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] focus:bg-white focus:border-[#6C3AED] focus:outline-none transition-all font-dm-sans text-sm"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows={5}
                                    placeholder="Message"
                                    className="w-full px-4 py-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] focus:bg-white focus:border-[#6C3AED] focus:outline-none transition-all font-dm-sans text-sm resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-10 py-4 bg-[#0F172A] text-white font-medium font-inter rounded-lg hover:bg-[#1E293B] transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
