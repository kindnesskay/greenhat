import BottomNav from "@/components/BottomNav";
import "../globals.css";
import NavBar from "@/components/NavBar";
import AppContextProvider from "@/context/AppContext";
import { Metadata } from "next";
export const metada: Metadata = {
  title: "Greenhat",
  description: "Trade loger",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className="min-h-screen w-full relative bg-slate-100 flex flex-col items-center ">
          <NavBar />
          <main className="px-2 w-full max-w-lg">{children}</main>
          <BottomNav />
        </body>
      </AppContextProvider>
    </html>
  );
}
