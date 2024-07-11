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
    <div className="rounded-lg  overflow-hidden p-2 flex flex-col  w-full  h-full relative">
      <div className="flex justify-between">
        <button
          onClick={handleClose}
          className="rounded-full z-10 h-12 w-12 hover:shadow-sm p-2 "
        >
          <img src="/assets/close.png" alt="close" />
        </button>
        <button
          className="w-12 h-12 rounded-full overflow-hidden"
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

      <div className="w-full relative flex flex-col p-4 ">
        <h2 className="text-2xl font-semibold text-gray-500">{title}</h2>
        <p className="font-light text-gray-600 font-mono ">{new_date}</p>

        <p className="text-lg ">{note}</p>
      </div>
    </div>
  );
}
