import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "See-we",
  description: "오늘 서울의 시위 현황",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-5">
          <div className="max-w-5xl w-full items-center justify-between space-y-5">
            <div className=" flex font-bold text-4xl">See-We</div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
