import Transaction from "./cards/transaction";

const sample = {
  id: "1",
  type: "Withdrawal",
  amount: 500,
  date: "2024-01-08",
  status: "Success",
  success:true
};
export default function Transactions() {
  return (
    <div>
      <h2 className="text-md font-semibold p-2 text-gray-500">Transaction Details</h2>
      <div>
        <Transaction
        success={sample.success}
          id={sample.id}
          type={sample.type}
          status={sample.status}
          amount={sample.amount}
          date={sample.date}
        />
      </div>
    </div>
  );
}
