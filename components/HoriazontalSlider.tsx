"use client";
import { UseApp } from "@/context/AppContext";
import { useEffect, useState } from "react";
export default function HoriazontalSlider() {
  const { database } = UseApp();
  const [profit, setProfit] = useState(0);
  const [loss, setLoss] = useState(0);
  function GetTotal(total: number, number: number) {
    return total + number;
  }
  useEffect(() => {
    const data = database.getAllData();

    if (!data) return;
    const profitArray = data.map((item) => {
      return item.profit;
    });
    const lossArray = data.map((item) => {
      return item.loss;
    });

    setProfit(profitArray.reduce(GetTotal));
    setLoss(lossArray.reduce(GetTotal));
  }, []);
  return (
    <div className="w-full relative rounded-md py-2">
      {/* <h2 className="font-bold text-xl">Portfolio</h2> */}
      <p
        className={`font-bold text-2xl text-center  ${
          profit > loss ? "text-green-500" : "text-red-500"
        }`}
      >
        ${profit - loss}
      </p>
    </div>
  );
}
