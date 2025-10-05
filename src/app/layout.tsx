import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "零碳园区工具站 - AI帮您规划零碳未来",
  description: "上传园区能耗数据或图片，AI生成零碳改造效果图与诊断报告。免费体验，无需安装，立即获得专业建议。",
  keywords: "零碳园区, AI改造, 碳中和, 绿色能源, 光伏发电, 储能系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
