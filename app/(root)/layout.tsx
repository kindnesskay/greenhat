import "../globals.css";
import BottomNav from "@/components/BottomNav";
// import NavBar from "@/components/NavBar";
import AppContextProvider from "@/context/AppContext";
export const metadata = {
  title: "Greenhat",
  description: "Trade logger",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className="min-h-screen  w-full relative bg-slate-100 flex flex-col items-center ">
          {/* <NavBar /> */}
          <main className=" w-full max-w-xl pt-8 px-2 ">{children}</main>
          <BottomNav />
        </body>
      </AppContextProvider>
    </html>
  );
}
