import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import NavBar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
      <body className={`${poppins.className} bg-neutral-50`}>
        <NavBar />

        <main className="flex flex-row">
          <LeftSideBar />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSideBar />
        </main>
      </body>
    </html>
  );
}
