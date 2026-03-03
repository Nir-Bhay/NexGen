"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

const SERVICES = [
    {
        number: "01",
        title: "Web & Mobile Development",
        description: "We build high-performance websites and mobile applications that drive growth. From responsive corporate sites to complex web apps and native mobile solutions, our team delivers pixel-perfect digital experiences using modern frameworks.",
        tags: ["React", "Next.js", "React Native", "Node.js", "TypeScript"],
        imageLabel: "Development Team Workspace — 540×340px",
        accent: "left",
    },
    {
        number: "02",
        title: "University ERP Systems",
        description: "Custom Enterprise Resource Planning systems designed specifically for universities and educational institutions. Our ERP solutions handle admissions, fees, attendance, examinations, library management, and complete academic workflows under one unified platform.",
        tags: ["Cloud ERP", "Microservices", "PostgreSQL", "REST APIs"],
        imageLabel: "ERP Dashboard Interface — 540×340px",
        accent: "right",
    },
    {
        number: "03",
        title: "Cloud & Networking Solutions",
        description: "Comprehensive cloud infrastructure setup, migration, and management services. We help institutions and businesses move to the cloud with zero downtime, implement hybrid architectures, and optimize costs across AWS, Azure, and Google Cloud.",
        tags: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
        imageLabel: "Cloud Infrastructure Diagram — 540×340px",
        accent: "left",
    },
    {
        number: "04",
        title: "AI & Machine Learning Solutions",
        description: "Leverage the power of artificial intelligence to automate processes, gain insights, and build intelligent applications. We develop custom AI models, chatbots, recommendation engines, and predictive analytics tools tailored to your business needs.",
        tags: ["Python", "TensorFlow", "OpenAI", "LangChain", "Computer Vision"],
        imageLabel: "AI Neural Network Visualization — 540×340px",
        accent: "right",
    },
    {
        number: "05",
        title: "Cybersecurity Services",
        description: "Protect your digital assets with our comprehensive cybersecurity services. We offer vulnerability assessments, penetration testing, security audits, incident response planning, and ongoing monitoring to keep your infrastructure safe from evolving threats.",
        tags: ["Ethical Hacking", "VAPT", "SOC", "Compliance", "Firewall"],
        imageLabel: "Security Operations Center — 540×340px",
        accent: "left",
    },
    {
        number: "06",
        title: "Technical Consulting",
        description: "Strategic technology consulting to help you make the right decisions. Our experts analyze your current infrastructure, identify improvement areas, recommend technology stacks, and create roadmaps for digital transformation aligned with your business goals.",
        tags: ["Strategy", "Architecture", "DevOps", "Agile", "Digital Transformation"],
        imageLabel: "Consulting Team Meeting — 540×340px",
        accent: "right",
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-[120px] bg-[#F8FAFC]">
            <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
                <SectionHeader
                    badge="WHAT WE DO"
                    title="Comprehensive IT Services & Solutions"
                    subtitle="From custom software development to cloud infrastructure — we deliver enterprise-grade solutions tailored to your needs."
                />

                <div className="space-y-[100px] mt-20">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.number}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Image Side */}
                            <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                                <div className={`rounded-[20px] overflow-hidden aspect-[16/10] bg-gradient-to-br from-[#1E293B] to-[#0A1628] border border-slate-200 flex items-center justify-center relative shadow-lg ${service.accent === 'left' ? 'border-l-[4px] border-l-[#FF6B2C]' : 'border-r-[4px] border-r-[#FF6B2C]'
                                    }`}>
                                    <span className="text-[#64748B] text-sm font-dm-sans">{service.imageLabel}</span>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="relative">
                                {/* Decorative Number */}
                                <span className="absolute -top-16 left-0 text-[120px] font-mono font-extrabold text-[#0F172A] opacity-[0.04] pointer-events-none select-none">
                                    {service.number}
                                </span>

                                <h3 className="text-[28px] font-semibold font-inter text-[#0F172A] mb-4 relative z-10">
                                    {service.title}
                                </h3>
                                <p className="text-[#475569] text-[15px] leading-[1.6] font-dm-sans mb-6 relative z-10">
                                    {service.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                    {service.tags.map(tag => (
                                        <Badge key={tag} variant="tech">{tag}</Badge>
                                    ))}
                                </div>

                                <button className="flex items-center text-[#FF6B2C] font-semibold font-dm-sans text-[15px] group transition-all">
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
