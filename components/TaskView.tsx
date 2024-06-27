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
    <div className="rounded-lg bg-white overflow-hidden p-2 flex flex-col  w-full  h-full relative shadow-md">
      <div className="flex justify-between">
        <button
          onClick={handleClose}
          className="rounded-full z-10 h-8 w-8 bg-slate-100 text-white p-2 "
        >
          <img src="/assets/close.png" alt="close" />
        </button>
        <button
          className="w-8 h-8 rounded-full overflow-hidden"
          onClick={deleteItem}
        >
          <Image
            width={40}
            height={40}
            src={"/assets/delete.svg"}
            alt="delete-icon"
            className="h-full w-full"
          />
        </button>
      </div>

      <div className="w-full relative flex flex-col px-2 ">
        <h2 className="text-xl font-semibold text-gray-500">{title}</h2>
        <p className="text-xs font-light text-gray-600 font-mono ">
          Transaction on {new_date}
        </p>

        <p className="text-sm ">{note}</p>
      </div>
    </div>
  );
}
