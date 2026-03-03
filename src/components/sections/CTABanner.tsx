"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-inter text-[#0F172A] mb-3">
                        Ready to Transform Your Institution?
                    </h2>
                    <p className="text-[#64748B] font-dm-sans text-sm md:text-base mb-8">
                        Row to canal them Sig old on our WhatsApp
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-3 border border-[#0F172A] rounded-full text-[#0F172A] font-medium font-inter hover:bg-[#0F172A] hover:text-white transition-all duration-300 min-w-[180px]">
                            Get Free Consultation
                        </button>
                        <button className="px-8 py-3 border border-[#0F172A] rounded-full text-[#0F172A] font-medium font-inter hover:bg-[#0F172A] hover:text-white transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center">
                            <MessageCircle className="w-4 h-4" />
                            Send via WhatsApp
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
