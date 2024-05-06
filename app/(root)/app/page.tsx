"use client";
import HoriazontalSlider from "@/components/HoriazontalSlider";
import Tracker from "@/components/Tracker";
import greetCustomer from "@/lib/tools/GreetClient.js";
import { useEffect, useState } from "react";
import DateDisplay from "@/components/DateDisplay";
import { UseApp } from "@/context/AppContext";
type tradeData = {
  title: string;
  id: string;
  date: string;
  note: string;
};

export default function page() {
  const { database } = UseApp();
  const [data, setData] = useState([]);
  const greeting = greetCustomer();
  useEffect(() => {
    let stored_data = database.getAllData() as [];
    let total = database.totalItems;
    if (!stored_data) return;
    total > 6 ? setData(stored_data.slice(0, 6)) : setData(stored_data);
  }, []);
  return (
    <section className="w-full flex flex-col items-center gap-4 min-h-screen">
      <>
        <DateDisplay />
        <HoriazontalSlider />
        {data.length != 0 && <Tracker data={data} />}
      </>
    </section>
  );
}
