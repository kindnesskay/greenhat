"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname} from "next/navigation";
// MenuDrawer component with Tailwind CSS
export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname=usePathname()
  useEffect(()=>{
      setIsOpen(false)
  },[pathname])
  return (
    <div className="fixed inset-0 flex z-30 red-border w-fit h-fit">
      {/* Open Drawer Button */}
      <button
        className="fixed top-0 left-0 p-4 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <div>
          <Image alt="menu" height={36} width={36} src={"/assets/menu.svg"} />
        </div>
      </button>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          isOpen ? "visible" : "invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-lg  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Drawer Header */}
        <div className="bg-sky-500 p-4 justify-between flex items-center text-white">
          <span className="text-2xl font-bold">Menu</span>
          {/* close drwer button */}
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={"/assets/close.svg"}
              alt="close"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="py-2 pt-2 flex flex-col">
          <Link
            href={"/"}
            className="mb-2  font-semibold  hover:text-white hover:bg-sky-300 p-2"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="mb-2  font-semibold  hover:text-white hover:bg-sky-300 p-2"
          >
            About
          </Link>
          <Link
            href={"/dashboard"}
            className="mb-2  font-semibold  hover:text-white hover:bg-sky-300 p-2"
          >
            Services
          </Link>
          <Link
            href={"/contact"}
            className="mb-2  font-semibold  hover:text-white hover:bg-sky-300 p-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
