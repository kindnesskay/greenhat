"use client";
import { useEffect, useState } from "react";
import Task, { taskType } from "./Task";
import TaskView from "./TaskView";

type tradeDataList = [taskType];
export default function Tracker({ data }: any) {
  const [view, setView] = useState(false);
  const [viewID, setViewID] = useState("");
  const [taskList, setTaskList] = useState(data);
  const handleView = (id: string) => {
    if (view === true) {
      setViewID("");
      setView(false);
      return false;
    }

    setViewID(id);
    setView(true);
  };

  const closeView = () => {
    setView(false);
    setViewID("");
    setTaskList(data);
  };
  useEffect(() => {});

  useEffect(() => {
    if (!viewID) return;
    const task_item = data.filter((task_item: taskType) => {
      return task_item.id.toString() == viewID;
    });

    if (task_item) setTaskList(task_item);
  }, [viewID]);

  return (
    <div className="w-full max-w-md flex-1 rounded-md flex flex-col gap-4">
      <h3 className="text-xl font-bold">Entries</h3>
      {!view
        ? taskList &&
          taskList.map((task_item: taskType) => {
            return (
              <Task
                key={task_item.id}
                task={task_item}
                handleTaskClick={handleView}
              />
            );
          })
        : taskList && (
            <div className="task-view-container">
              <TaskView task={taskList[0]} handleClose={closeView} />
            </div>
          )}
    </div>
  );
}
