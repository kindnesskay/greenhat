"use client";

import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="w-full z-40 p-2 py-4 min-h-16 bg-white absolute">
      <div className="flex justify-around items-center flex-wrap">
        <div >
          <Image alt="menu" height={36} width={36} src={'/assets/menu.svg'}/>
        </div>
        <div className="flex justify-center">
          <Link className="font-bold text-2xl" href={"/"}>
            Smart Funds
          </Link>
        </div>
        <Link href={'/dashboard'} className=" max-[270px]:hidden">
          <Image alt="menu" height={36} width={36}  src={'/assets/profile.svg'}/>
        </Link>
      </div>
    </nav>
  );
}
