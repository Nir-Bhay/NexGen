"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Code,
  MonitorPlay,
  Sparkles,
  Trophy,
  Pencil,
  Monitor,
  Users,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  PlayCircle,
  Award,
  Zap,
} from "lucide-react";

export function EdTechSection() {
  const rightCards = [
    {
      id: "r1",
      title: "Curated Notes & Study Material",
      desc: "Simplified notes for quick revision and deep understanding.",
      icon: <GraduationCap className="w-5 h-5" />,
      iconBg: "bg-[#E6F7F2]",
      iconColor: "text-[#059669]",
      stat: { label: "Resources", value: "2,400+", icon: <BookOpen className="w-3 h-3" /> },
      tags: ["PDF Notes", "Mind Maps", "Flash Cards"],
      accentColor: "#059669",
    },
    {
      id: "r2",
      title: "Certification Classes",
      desc: "Industry-recognized certifications to boost your career profile.",
      icon: <Trophy className="w-5 h-5" />,
      iconBg: "bg-[#FEF3C7]",
      iconColor: "text-[#D97706]",
      stat: { label: "Certificates", value: "50+", icon: <Award className="w-3 h-3" /> },
      tags: ["Cloud", "AI/ML", "Cybersecurity"],
      accentColor: "#D97706",
    },
    {
      id: "r3",
      title: "Hands on Projects & Labs",
      desc: "Real-world projects and virtual labs to build by doing.",
      icon: <Pencil className="w-5 h-5" />,
      iconBg: "bg-[#E6F7F2]",
      iconColor: "text-[#059669]",
      stat: { label: "Live Projects", value: "180+", icon: <Zap className="w-3 h-3" /> },
      tags: ["React", "Python", "DevOps"],
      accentColor: "#059669",
    },
  ];

  const bottomCards = [
    {
      id: "b1",
      title: "Certification Programs",
      desc: "Globally recognized certifications across 20+ domains.",
      icon: <Monitor className="w-5 h-5" />,
      iconBg: "bg-[#EEF2FF]",
      iconColor: "text-[#4F46E5]",
      accentColor: "#4F46E5",
      miniStats: [
        { label: "Programs", value: "20+" },
        { label: "Students", value: "12k" },
      ],
      // mini visual — progress bars
      bars: [
        { label: "Cloud", pct: 85, color: "#4F46E5" },
        { label: "AI", pct: 70, color: "#059669" },
      ],
    },
    {
      id: "b2",
      title: "Internship & Placement Training",
      desc: "Bridge the gap between campus and career with real prep.",
      icon: <GraduationCap className="w-5 h-5" />,
      iconBg: "bg-[#E6F7F2]",
      iconColor: "text-[#059669]",
      accentColor: "#059669",
      miniStats: [
        { label: "Placed", value: "94%" },
        { label: "Companies", value: "300+" },
      ],
      bars: [
        { label: "Placement", pct: 94, color: "#059669" },
        { label: "Internships", pct: 78, color: "#D97706" },
      ],
    },
  ];

  const pills = [
    { label: "Certification Programs", icon: <GraduationCap className="w-[13px] h-[13px]" /> },
    { label: "Webinars", icon: <MonitorPlay className="w-[13px] h-[13px]" /> },
    { label: "Enquire", icon: <Sparkles className="w-[13px] h-[13px]" /> },
    { label: "Hands on Projects & Labs", icon: <Pencil className="w-[13px] h-[13px]" /> },
  ];

  return (
    <section id="edtech" className="py-[80px] bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#059669] mb-3 font-inter">
            EDTECH SECTION
          </p>
          <h2 className="text-[38px] md:text-[44px] font-bold font-inter text-[#0F172A] leading-[1.15] mb-3">
            Learn. Build. Grow.
          </h2>
          <p className="text-[14px] text-[#64748B] font-dm-sans max-w-[440px] mx-auto leading-[1.6]">
            Practical, industry-aligned education for the next generation of tech professionals.
          </p>
        </div>

        {/* ── Main Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-4">

            {/* LARGE IMAGE CARD */}
            <motion.div
              className="relative rounded-[16px] overflow-hidden"
              style={{ aspectRatio: "16/10", minHeight: "240px" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.78)] via-[rgba(0,0,0,0.22)] to-transparent" />

              {/* Top-right live badge */}
              <div className="absolute top-4 right-4 flex items-center gap-[6px] bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-[5px]">
                <span className="w-[7px] h-[7px] rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-[11px] font-semibold font-inter tracking-wide">
                  LIVE
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {/* mini stat row */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-[5px] text-white/80 text-[12px] font-dm-sans">
                    <Users className="w-[13px] h-[13px]" />
                    <span>1,200+ Students</span>
                  </div>
                  <div className="flex items-center gap-[5px] text-white/80 text-[12px] font-dm-sans">
                    <Star className="w-[13px] h-[13px] fill-yellow-400 text-yellow-400" />
                    <span>4.9 Rating</span>
                  </div>
                  <div className="flex items-center gap-[5px] text-white/80 text-[12px] font-dm-sans">
                    <Clock className="w-[13px] h-[13px]" />
                    <span>40+ Hours</span>
                  </div>
                </div>
                <h3 className="text-white text-[22px] font-bold font-inter leading-snug drop-shadow-sm">
                  Live Interactive Classes
                </h3>
                <p className="text-white/70 text-[13px] font-dm-sans mt-1 leading-snug max-w-[360px]">
                  Small-batch sessions with real-time instructor interaction & doubt solving.
                </p>
              </div>
            </motion.div>

            {/* TWO BOTTOM CARDS */}
            <div className="grid grid-cols-2 gap-4">
              {bottomCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  className="group bg-white rounded-[14px] border border-[#E8EDF3] shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-5 flex flex-col gap-4 hover:border-[#059669]/40 hover:shadow-[0_4px_18px_rgba(5,150,105,0.10)] transition-all duration-200 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + idx * 0.08 }}
                  viewport={{ once: true }}
                >
                  {/* Top row: icon + title */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-[40px] h-[40px] min-w-[40px] rounded-[10px] flex items-center justify-center ${card.iconBg} ${card.iconColor} transition-transform group-hover:scale-110 duration-200`}
                    >
                      {card.icon}
                    </div>
                    <h4 className="text-[13px] font-semibold font-inter text-[#1E293B] leading-snug">
                      {card.title}
                    </h4>
                  </div>

                  {/* Desc */}
                  <p className="text-[12px] text-[#64748B] font-dm-sans leading-[1.5]">
                    {card.desc}
                  </p>

                  {/* Mini stats row */}
                  <div className="flex gap-3">
                    {card.miniStats.map((s, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-[2px] bg-[#F8FAFC] rounded-[8px] px-3 py-[6px] flex-1"
                      >
                        <span
                          className="text-[15px] font-bold font-inter"
                          style={{ color: card.accentColor }}
                        >
                          {s.value}
                        </span>
                        <span className="text-[10px] text-[#94A3B8] font-dm-sans">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress bars */}
                  <div className="flex flex-col gap-[6px]">
                    {card.bars.map((bar, i) => (
                      <div key={i} className="flex flex-col gap-[3px]">
                        <div className="flex justify-between items-center">
                          <span className="text-[10.5px] text-[#64748B] font-dm-sans">
                            {bar.label}
                          </span>
                          <span
                            className="text-[10.5px] font-semibold font-inter"
                            style={{ color: bar.color }}
                          >
                            {bar.pct}%
                          </span>
                        </div>
                        <div className="h-[5px] bg-[#F1F5F9] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: bar.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.pct}%` }}
                            transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — 3 Stacked Cards ── */}
          <div className="flex flex-col gap-4">
            {rightCards.map((card, idx) => (
              <motion.div
                key={card.id}
                className="group bg-white rounded-[14px] border border-[#E8EDF3] shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-5 flex flex-col gap-3 hover:border-[#059669]/40 hover:shadow-[0_4px_18px_rgba(5,150,105,0.10)] transition-all duration-200 cursor-pointer"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.05 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Top row */}
                <div className="flex items-start gap-3">
                  <div
                    className={`w-[38px] h-[38px] min-w-[38px] rounded-[10px] flex items-center justify-center ${card.iconBg} ${card.iconColor} transition-transform group-hover:scale-110 duration-200`}
                  >
                    {card.icon}
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <h4 className="text-[13px] font-semibold font-inter text-[#1E293B] leading-snug">
                      {card.title}
                    </h4>
                    {/* Stat inline */}
                    <div
                      className="flex items-center gap-[4px] text-[11px] font-medium font-dm-sans"
                      style={{ color: card.accentColor }}
                    >
                      <span>{card.stat.icon}</span>
                      <span>{card.stat.value} {card.stat.label}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[12px] text-[#64748B] font-dm-sans leading-[1.5]">
                  {card.desc}
                </p>

                {/* Tag chips */}
                <div className="flex flex-wrap gap-[6px]">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-medium font-dm-sans px-[8px] py-[3px] rounded-full border"
                      style={{
                        color: card.accentColor,
                        backgroundColor: card.iconBg,
                        borderColor: `${card.accentColor}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-[3px] w-[32px] rounded-full mt-1 transition-all duration-300 group-hover:w-[56px]"
                  style={{ backgroundColor: card.accentColor }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom Pill Strip ── */}
        <motion.div
          className="mt-6 flex flex-wrap justify-start items-center bg-[#F8FAFC] border border-[#E8EDF3] rounded-[14px] px-4 py-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {pills.map((pill, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-[6px] px-4 py-[6px] text-[#475569] text-[12.5px] font-dm-sans whitespace-nowrap cursor-pointer hover:text-[#059669] transition-colors duration-150">
                <span className="text-[#059669]">{pill.icon}</span>
                {pill.label}
              </div>
              {idx < pills.length - 1 && (
                <div className="w-px h-[18px] bg-[#CBD5E1] mx-1" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

      </div>
    </section>
  );
}