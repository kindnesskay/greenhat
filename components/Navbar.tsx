"use client";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="top-bar pl-24 bg-white">
      <Link className="font-bold text-xl flex items-center gap-2" href={"/"}>
        Smart Funds
      </Link>

      <Link href={"/profile"} className=" max-[270px]:hidden">
        <Image alt="menu" height={36} width={36} src={"/assets/profile.svg"} />
      </Link>
    </nav>
  );
}
