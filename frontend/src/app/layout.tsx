import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// 폰트 설정
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K 계리 AI Platform",
  description: "계리사 실무 관련 정보 및 AI 도구",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GNB (Global Navigation Bar) */}
        <nav className="mb-12 bg-blue-600 shadow-md">
          <div className="container mx-auto flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="flex items-baseline space-x-2">
                <span className="text-white text-2xl font-bold">
                  K 계리 AI Platform
                </span>
                <span className="text-white text-xl font-bold">
                  - Chris Chang Min Lee
                </span>
              </div>
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  AI Tools and Data
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance-news"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  보험 기관 실무 News
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chrislee9407/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  관리자 Linkedin
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
