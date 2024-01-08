"use client";

import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="top-bar bg-white">
      <div>
        <Image alt="menu" height={36} width={36} src={"/assets/menu.svg"} />
      </div>

      <Link className="font-bold text-2xl" href={"/"}>
        Smart Funds
      </Link>

      <Link href={"/dashboard"} className=" max-[270px]:hidden">
        <Image alt="menu" height={36} width={36} src={"/assets/profile.svg"} />
      </Link>
    </nav>
  );
}
