import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center bg-white">
          <div className="h-[100vh] w-[85vw] mt-2">
            {/* navbar */}
            <div className="flex flex-row bg-orange-500 px-2 font-bold text-black font-mono">
              <h1>Hacker News</h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
