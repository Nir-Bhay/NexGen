import type { Metadata } from 'next';
import { Inter, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'NexGen | Hybrid Tech Company Powering Education & Business',
  description: 'AI-Powered Solutions for 2026. Empowering students, colleges, and businesses with cutting-edge IT services, skill-based learning platforms, and AI-driven software products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
// Auto-improvement: Minor optimization Thu Mar  5 07:57:44 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:57:47 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:57:51 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:57:54 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:57:57 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:01 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:04 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:07 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:11 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:14 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:17 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:21 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:24 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:27 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:31 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:34 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:37 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:41 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:44 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:48 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:51 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:54 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:58:58 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:01 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:05 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:08 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:11 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:15 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:18 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:21 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:25 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:28 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:31 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:35 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:38 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:41 UTC 2026
// Auto-improvement: Minor optimization Thu Mar  5 07:59:45 UTC 2026
