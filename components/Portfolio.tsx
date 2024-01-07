"use client";

export default function Portfolio({
  balance,
  interestRate,
}: {
  balance: number;
  interestRate: number;
}) {
  return (
    <div className="bg-sky-500 text-white rounded-lg shadow-md p-6 w-full ">
      <div className="mb-4">
        <p>Balance</p>
        <div className="flex justify-between">
        <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
        <Image src={'/assets/wallet.svg'} height={36} width={36} alt="wallet icon" className="xs:hidden"/>
        </div>
      </div>
      <div className="mb-4">
        <p>Interest Rate</p>
        <p className="text-xl font-bold">{interestRate}%</p>
      </div>
      <div>
        <p >Total Earnings</p>
        <p className="text-xl font-bold">{((balance* interestRate)/100).toFixed(2)}</p>
      </div>
    </div>
  );
}
import Image from "next/image";
// BankCard.tsx

import React from "react";
