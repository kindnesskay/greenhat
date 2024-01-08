'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WithdrawButon() {
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
    <button className="flex items-center p-2 px-4 h-12 font-normal  bg-sky-500 text-white  rounded-full w-36 justify-center">
       - Withdraw 
    </button>
  )
}
