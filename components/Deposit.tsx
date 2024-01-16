"use client";

import  addTransaction, { transaction } from "@/lib/firebase/functions/addTransaction";
import { uid } from "uid";
import React, { useState, useEffect } from "react";

interface FundAccountProps {}

const Deposit: React.FC<FundAccountProps> = () => {
  const [amount, setAmount] = useState<number | string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeposit = () => {
    // Perform any validation if needed
    // For simplicity, we'll assume the amount is always valid in this example
    if (!amount || typeof(amount)=="string")return
    const data:transaction={
      trxId:uid(25),
      amount:amount,
      status:"success",
      approved:true,
      date:`${new Date()}`,
      type:"Deposit"
    }
    addTransaction(data)
    setLoading(true);
    setTimeout(() => {
      setAmount(0);
      setLoading(false);
    }, 1000); // Simulating an asynchronous operation
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Fund Account</h2>
      <div className="mb-4">
        <label className="block text-gray-600">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleDeposit}
        disabled={loading}
        className={`w-full bg-blue-500 text-white py-2 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Depositing..." : "Deposit"}
      </button>
    </div>
  );
};

export default Deposit;
