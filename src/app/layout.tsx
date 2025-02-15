import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js | homework2 | 강진수",
  description: "Next.js 2주차 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="p-10 min-h-[300px] text-2xl">{children}</main>
        <footer className="bg-black h-[100px] text-white border-t-2 border-white px-10">
          고객센터 홈페이지 우측 하단 [문의하기]를 통해 1:1 채팅상담을 이용하실
          수 있습니다. (전화상담을 원하시는 경우, 채팅상담을 통해
          신청부탁드립니다.) 채팅 상담 운영시간 : 월요일 14:00-17:30 화~금요일
          10:30-17:30 (점심시간 12:30-14:00 / 주말,공휴일 휴무)
        </footer>
      </body>
    </html>
  );
}
