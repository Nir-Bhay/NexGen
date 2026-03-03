"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

const BLOG_POSTS = [
    {
        title: "Label Technology News & Artboard",
        excerpt: "Emerge new est anim est devent adipiscing elit, sed diam nonumy eirmod tempor.",
        author: "Ronie",
        image: "tech",
        color: "from-[#6C3AED]/30 to-[#FF6B2C]/30",
    },
    {
        title: "Label Technology News & Artboard",
        excerpt: "Emerge new est anim est devent adipiscing elit, sed diam nonumy eirmod tempor.",
        author: "Ronie",
        image: "code",
        color: "from-[#059669]/30 to-[#6C3AED]/30",
    },
    {
        title: "Label Technology News & Artboard",
        excerpt: "Emerge new est anim est devent adipiscing elit, sed diam nonumy eirmod tempor.",
        author: "Ronie",
        image: "meeting",
        color: "from-[#FF6B2C]/30 to-[#059669]/30",
    },
];

export default function BlogSection() {
    return (
        <section id="blog" className="py-16 md:py-20 bg-[#F8FAFC]">
            <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl lg:text-3xl font-bold font-inter text-[#0F172A]"
                    >
                        Latest Technology News & Articles
                    </motion.h2>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 text-[#0F172A] font-medium font-inter hover:gap-3 transition-all"
                    >
                        View All <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {BLOG_POSTS.map((post, idx) => (
                        <motion.article
                            key={idx}
                            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className={`w-full h-full bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                                    {post.image === "tech" && (
                                        <div className="text-center">
                                            <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-white/40 flex items-center justify-center">
                                                <svg className="w-10 h-10 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-xs text-[#0F172A]/70 font-medium">Tech Innovation</span>
                                        </div>
                                    )}
                                    {post.image === "code" && (
                                        <div className="text-center">
                                            <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-white/40 flex items-center justify-center">
                                                <svg className="w-10 h-10 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            <span className="text-xs text-[#0F172A]/70 font-medium">Development</span>
                                        </div>
                                    )}
                                    {post.image === "meeting" && (
                                        <div className="text-center">
                                            <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-white/40 flex items-center justify-center">
                                                <svg className="w-10 h-10 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-xs text-[#0F172A]/70 font-medium">Teamwork</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-base md:text-lg font-bold font-inter text-[#0F172A] mb-2 group-hover:text-[#6C3AED] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-[#64748B] font-dm-sans text-sm leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>

                                {/* Author & Read More */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                                            <User className="w-4 h-4 text-[#64748B]" />
                                        </div>
                                        <span className="text-sm text-[#64748B] font-dm-sans">{post.author}</span>
                                    </div>
                                    <span className="text-sm font-medium text-[#0F172A] font-inter group-hover:text-[#6C3AED] transition-colors">
                                        Read More
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 text-[#0F172A] font-medium font-inter">
                        View All <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
