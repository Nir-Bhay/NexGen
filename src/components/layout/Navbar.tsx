"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "EdTech", href: "#edtech" },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState("#home");
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] transition-all duration-300 ${isScrolled
                        ? "glass-panel bg-[#0A1628]/85 border-b border-white/[0.08]"
                        : "bg-transparent border-transparent"
                    }`}
            >
                <div className="max-w-[1280px] mx-auto px-5 lg:px-8 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="text-[24px] font-bold font-inter tracking-tight z-50">
                        <span className="text-white">Nex</span>
                        <span className="text-[#6C3AED]">Gen</span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`relative text-[15px] font-medium font-dm-sans transition-colors duration-200 py-2 group ${activeHash === link.href ? "text-[#FF6B2C]" : "text-[#CBD5E1] hover:text-white"
                                        }`}
                                    onClick={() => setActiveHash(link.href)}
                                >
                                    {link.name}
                                    {activeHash === link.href && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF6B2C] rounded-full" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" className="text-[#CBD5E1] hover:text-white font-dm-sans">
                            Login
                        </Button>
                        <Button className="bg-[#6C3AED] hover:bg-[#5b2bd1] font-inter">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 text-white"
                        onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                    >
                        {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-[999] bg-[#0A1628]/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
                    <ul className="flex flex-col items-center gap-6 text-center">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-2xl font-medium font-dm-sans ${activeHash === link.href ? "text-[#FF6B2C]" : "text-[#CBD5E1]"
                                        }`}
                                    onClick={() => {
                                        setActiveHash(link.href);
                                        setMobileDrawerOpen(false);
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col w-full max-w-[200px] gap-4 mt-8">
                        <Button variant="ghost" className="text-[#CBD5E1] border border-white/20">
                            Login
                        </Button>
                        <Button className="bg-[#6C3AED]">Get Started</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
