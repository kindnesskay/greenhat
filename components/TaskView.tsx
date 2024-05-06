import { taskType } from "./Task";

type task = {
  task: taskType;
  handleClose: any;
};
export default function TaskView({ task, handleClose }: task) {
  const { title, date, note, id } = task;
  let new_date = new Date(date).toDateString();
  return (
    <div className="bg-white py-4 flex flex-col gap-2 w-full p-2 rounded-md h-full relative">
      <div className="flex w-full items-center justify-between">
        <button
          onClick={handleClose}
          className="rounded-full h-8 w-8 bg-slate-100 text-white p-2"
        >
          <img src="/assets/close.png" alt="close" />
        </button>
        <p className="text-xs font-light text-gray-600 font-mono text-right">
          {new_date}
        </p>
      </div>
      <div className="w-full relative">
        <h2 className="text-center text-3xl font-semibold text-gray-500">
          {title}
        </h2>
        <p className="text-md p-2">{note}</p>
      </div>
    </div>
  );
}
