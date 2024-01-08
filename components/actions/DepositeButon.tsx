'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function DepositeButon() {
    const router=useRouter()
    const [isDepositLoading, setIsDepositLoading] = useState(false);
    const handleDepositClick = () => {
        setIsDepositLoading(true);
        // Handle navigation to deposit page after a delay (simulate loading)
        setTimeout(() => {
          router.push("/deposite");
          // Navigate to deposit page here
        }, 1000);
      };
  return (
    <button className="flex items-center p-2 px-4 w-36 justify-center h-12 font-normal  bg-sky-500 text-white  rounded-full gap-4">
        +
        Deposit
    </button>
  )
}
