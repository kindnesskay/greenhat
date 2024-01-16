"use client";
import { currency } from "@/lib/tools/currency";
import Image from "next/image";
export default function Portfolio({
  balance,
  interestRate,
}: {
  balance: number;
  interestRate: number;
}) {
  return (
    <div className=" rounded-lg shadow-md p-6 w-full max-w-lg">
      <div className="mb-4">
        <p>Balance</p>
        <div className="flex justify-between">
          <p className="text-3xl font-bold">{currency}{balance.toFixed(2)}</p>
          <Image
            src={"/assets/wallet.svg"}
            height={36}
            width={36}
            alt="wallet icon"
            className="xs:hidden bg-black px-1 rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p >Total Earnings</p>
          <p className="text-lg font-semibold">
            {currency}{((balance * interestRate) / 100).toFixed(2)}
          </p>
        </div>
        <div>
          <p>Interest Rate</p>
          <p className="text-lg font-semibold">{interestRate}%</p>
        </div>
      </div>
    </div>
  );
}
