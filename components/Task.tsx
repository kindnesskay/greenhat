export type taskType = {
  title: string;
  id: string;
  date: string;
  note: string;
  profit: number;
  loss: number;
};
export const initialTask = {
  title: "",
  id: "",
  date: "",
  note: "",
  profit: 0,
  loss: 0,
};
type taskCompType = {
  task: taskType;
  handleTaskClick: any;
};

export default function Task({ task, handleTaskClick }: taskCompType) {
  let { title, id, profit, loss, date } = task;

  const time = new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
  });
  const parsed_date = new Date(date).toDateString();

  return (
    <div
      className={` task-bar h-20 flex flex-row gap-2 justify-between rounded-lg cursor-pointer hover:scale-105 `}
      onClick={() => handleTaskClick(task)}
    >
      <div
        className={`border-r-4 border-solid hover:cursor-pointer ${
          profit > 0
            ? "border-green-200 hover:border-green-400"
            : "border-red-200 hover:border-red-400"
        }`}
      >
        <p className="w-16 font-semibold text-slate-400 text-sm ">{time}</p>
      </div>
      <div className="flex-1 flex flex-row gap-2 justify-between pl-4 border border-solid border-slate-300 rounded-lg ">
        <div className="w-3/5 flex flex-col justify-center gap-2">
          <p className="text-lg  font-semibold ">{title}</p>
          <p className="text-xs text-slate-400 font-medium ">{parsed_date}</p>
        </div>
        <div className="flex items-center font-semibold text-gray-700 pr-4">
          <p
            className={`font-bold text-2xl ${
              profit > loss ? "text-green-500" : "text-red-500"
            }`}
          >
            {profit > loss ? profit : loss}
          </p>
        </div>
      </div>
    </div>
  );
}
