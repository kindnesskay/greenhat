"use client";
import Link from "next/link";
export default function DepositeButon() {
  return (
    <Link
      href={"/deposit"}
      className="flex items-center p-2 px-4 w-36 justify-center h-12 font-normal  bg-sky-500 text-white  rounded-md gap-4"
    >
      Deposit
    </Link>
  );
}
