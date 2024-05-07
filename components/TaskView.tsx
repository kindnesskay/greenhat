import Image from "next/image";
import { taskType } from "./Task";

type task = {
  task: taskType;
  handleClose: any;
  deleteItem: any;
};
export default function TaskView({ task, handleClose, deleteItem }: task) {
  const { title, date, note, id } = task;

  const handleDelete = () => {
    handleClose();
    deleteItem(id);
  };
  let new_date = new Date(date).toDateString();
  return (
    <div className="p-1  rounded-tl-2xl rounded-br-2xl bg-white flex flex-col gap-2 w-full rounded h-full relative">
      <button
        onClick={handleClose}
        className="rounded-full z-10 mt-1 h-8 w-8 bg-slate-100 text-white p-2 absolute top-0"
      >
        <img src="/assets/close.png" alt="close" />
      </button>
      <button className="w-10 h-10 absolute right-0 z-10" onClick={deleteItem}>
        <Image
          width={40}
          height={40}
          src={"/assets/delete.svg"}
          alt="delete-icon"
          className="h-full w-full"
        />
      </button>

      <div className="w-full relative flex flex-col gap-2  pl-10 pr-12 py-4 0">
        <div className="flex justify-between items-center pr-4">
          <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
          <p className="text-xs font-light text-gray-600 font-mono text-right">
            {new_date}
          </p>
        </div>
        <p className="text-sm ">{note}</p>
      </div>
    </div>
  );
}
