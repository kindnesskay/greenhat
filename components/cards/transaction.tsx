interface props {
  id: string;
  type: string;
  amount: number;
  date: string;
  status: string;
  success:boolean
}
export default function Transaction({ type, amount, date, status,success }: props) {
  const getStatusColorClass = () => {
    switch (status.toLowerCase()) {
      case "success":
        return "text-green-500";
      case "failed":
        return "text-red-500";
      case "pending":
        return "text-yellow-500";
      default:
        return "text-black";
    }
  };

  const sign=()=>{
    if(!success)return false
    if(type.toLowerCase()==="withdrawal")return "-"
    if(type.toLowerCase()==="deposit")return "+"
    return ""
  }
  return (
    <div className={"border border-gray-300 flex justify-between font-mono rounded-xl"}>
      <div className="p-2">
        <p className="font-semibold">{type}</p>
        <p className="text-sm text-gray-400"> {date}</p>
      </div>
      <div className="p-2">
        <p>{sign()}{amount}</p>
        <p className={`${getStatusColorClass()}`}>{status}</p>
      </div>
    </div>
  );
}
