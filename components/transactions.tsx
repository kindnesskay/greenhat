"use client";
import getTransactions from "@/lib/firebase/functions/getTransactions";
import Transaction from "./cards/transaction";
import { transaction } from "@/lib/firebase/functions/addTransaction";
import { useEffect, useState } from "react";


export default function Transactions({userID}:{userID:string}) {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getTransactions(userID);
      if (data) {
        setTransactions(data);
      }
    }
    fetchData()
  }, []);
  return (
    <div>
      <h2 className="text-md font-semibold p-2 text-gray-500">
        Transaction Details
      </h2>
      <div className="flex flex-col gap-2 ">
        {transactions &&
          transactions.map((transaction: transaction) => {
            return (
              <Transaction
                key={transaction.trxId}
                success={transaction.approved}
                id={transaction.trxId}
                type={transaction.type}
                status={transaction.status}
                amount={transaction.amount}
                date={transaction.date}
              />
            );
          })}
      </div>
    </div>
  );
}
