"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play, ArrowRight, Trophy, Building2, CheckCircle2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const floatVariants: any = {
        float: (custom: number) => ({
            y: [0, -10, 0],
            transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                delay: custom,
            },
        }),
    };

    return (
        <section id="home" className="relative w-full pt-[100px] pb-[100px] md:pt-[120px] md:pb-[120px] bg-[#F8FAFC] overflow-hidden flex items-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.05),transparent_50%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714421251/grid_cqqh1i.svg')] bg-cover mix-blend-multiply" />

            <div className="max-w-[1280px] mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 lg:gap-14 items-center">

                {/* Left Column: Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-[600px] pt-8"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <div className="inline-flex items-center bg-[#EEF2FF] text-[#4F46E5] px-[14px] py-[6px] rounded-full text-[13px] font-medium leading-none">
                            AI-Powered Solutions for 2023
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h1 className="text-[48px] md:text-[56px] leading-[1.15] font-bold font-inter text-[#111827] mb-5 tracking-tight">
                            We Build the Future of Education & Technology
                        </h1>
                    </motion.div>

                    <motion.p variants={itemVariants} className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.6] max-w-[580px] font-inter mb-8">
                        Empowering students, colleges, and businesses with cutting-edge IT services, skills-based learning platforms, and AI-driven software products.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button
                            className="bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-[0_8px_20px_rgba(79,70,229,0.25)] h-[44px] px-[22px] rounded-[10px] text-[15px] font-semibold"
                        >
                            Explore Services
                        </Button>
                        <Button
                            className="bg-white text-[#111827] border border-[#E5E7EB] hover:bg-gray-50 hover:shadow-sm h-[44px] px-[22px] rounded-[10px] text-[15px] font-medium"
                        >
                            Watch Game
                        </Button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-7">
                        <p className="text-[#6B7280] text-[14px] font-inter mb-3 font-medium">Trusted by 100+ clients</p>
                        <div className="flex flex-wrap items-center gap-5 md:gap-6 text-[#374151] font-inter text-[14px] font-medium">
                            <span className="flex items-center gap-1.5 cursor-default">
                                Clutch <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" /> 4.9
                            </span>
                            <span className="flex items-center gap-1.5 cursor-default">
                                Google <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" /> 4.5
                            </span>
                            <span className="cursor-default">
                                Upwork Top Rated
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    className="relative w-full h-[480px] flex items-center justify-center mt-12 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Main Globe Area */}
                    <div className="relative w-[380px] h-[380px] md:w-[450px] md:h-[450px] flex items-center justify-center">

                        {/* Background Overlay behind globe */}
                        <div className="absolute inset-0 bg-[#E0E7FF] opacity-10 rounded-full blur-3xl mix-blend-multiply" />

                        {/* Generated Globe Image */}
                        <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                            <img src="/ai_wireframe_globe.png" alt="AI Wireframe Globe" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                        </div>

                        {/* Floating Stat Card 1 */}
                        <motion.div
                            custom={0}
                            variants={floatVariants}
                            animate="float"
                            className="absolute top-[8%] -right-[5%] md:top-[12%] md:-right-[8%] z-20"
                        >
                            <div className="bg-white rounded-[16px] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 w-max select-none">
                                <div className="w-10 h-10 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
                                    <Trophy className="w-5 h-5 text-[#F59E0B]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#111827] font-bold text-[18px] leading-tight font-inter">2500+</span>
                                    <span className="text-[#6B7280] text-[12px] font-medium font-inter">Softwares Finished</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stat Card 2 */}
                        <motion.div
                            custom={1.5}
                            variants={floatVariants}
                            animate="float"
                            className="absolute bottom-[20%] -left-[10%] md:bottom-[25%] md:-left-[15%] z-20"
                        >
                            <div className="bg-white rounded-[16px] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 w-max select-none">
                                <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center shrink-0">
                                    <Building2 className="w-5 h-5 text-[#4F46E5]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#111827] font-bold text-[18px] leading-tight font-inter">50+</span>
                                    <span className="text-[#6B7280] text-[12px] font-medium font-inter">College Partners</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stat Card 3 */}
                        <motion.div
                            custom={0.8}
                            variants={floatVariants}
                            animate="float"
                            className="absolute -bottom-[5%] right-[5%] md:-bottom-[2%] md:right-[0%] z-20"
                        >
                            <div className="bg-white rounded-[16px] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 w-max select-none">
                                <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#111827] font-bold text-[18px] leading-tight font-inter">100+</span>
                                    <span className="text-[#6B7280] text-[12px] font-medium font-inter">Projects Delivered</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
