"use client";

import Link from "next/link";

export default function WithdrawButon() {
 
  return (
    <Link href={'/withdraw'} className="flex items-center p-2 px-4 h-12 font-normal  bg-sky-500 text-white  rounded-full w-36 justify-center">
      Withdraw
    </Link>
  );
}
