"use client";
import { useState } from "react";

export default function WithdrawEarnings() {
  const [amount, setAmount] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(1000);
  const [totalEarnings, setTotalEarnings] = useState(125);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Withdraw Earnings</h2>
      <div className="mb-4">
        <p className="text-gray-600">Current Balance</p>
        <p className="text-2xl font-bold">${currentBalance.toFixed(2)}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Total Earnings</p>
        <p className="text-2xl font-bold">${totalEarnings.toFixed(2)}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Amount to Withdraw</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <button className="w-full bg-red-500 text-white py-2 rounded">
        Withdraw Earnings
      </button>
    </div>
  );
}
