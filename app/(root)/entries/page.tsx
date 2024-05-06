"use client";
import Tracker from "@/components/Tracker";
import DatabaseManager from "../../../lib/tools/localStorage.js";
import { useEffect, useState } from "react";
import DateDisplay from "@/components/DateDisplay";
type tradeData = {
  title: string;
  id: string;
  date: string;
  note: string;
};

export default function page() {
  const databaseName = "Trader_traker_v1";
  const database = new DatabaseManager(databaseName);
  database.update();
  const [home, setHome] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    let stored_data = database.getAllData() as [];
    if (!stored_data) return;

    setData(stored_data);
  }, []);
  return (
    <section className="w-full flex flex-col items-center gap-4 min-h-screen">
      <>
        <DateDisplay />
        {data.length && <Tracker data={data} />}
      </>
    </section>
  );
}
