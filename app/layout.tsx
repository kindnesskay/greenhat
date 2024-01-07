import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import LoadingScreen from "@/components/Loader";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "smart funds",
  description: "smart funds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-full overflow-hidden flex justify-center`}
      >
        <Suspense fallback={<LoadingScreen />}>
          <header>
            <NavBar />
          </header>
          <main className="w-full flex pt-16">
            <LeftSideBar />
            <section className=" flex h-full flex-1 flex-col items-center overflow-auto">
              {children}
            </section>
            <RightSideBar />
          </main>
        </Suspense>
      </body>
    </html>
  );
}
