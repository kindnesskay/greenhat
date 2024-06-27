"use client";
import React, { useEffect, useState } from "react";
import Task, { initialTask, taskType } from "./Task";
import TaskView from "./TaskView";
import { UseApp } from "@/context/AppContext";

export default function Tracker() {
  const { database } = UseApp();
  const [data, setData] = useState([]);
  const [view, setView] = useState(initialTask);
  const [viewID, setViewID] = useState(false);

  useEffect(() => {
    let stored_data = database.getAllData() as [];
    let total = database.totalItems;
    const last = total - 6;
    if (!stored_data) return;
    total > 6 ? setData(stored_data.slice(last, total)) : setData(stored_data);
  }, [view]);

  const handleView = (task: taskType) => {
    setView(task);
    return viewID ? setViewID(false) : setViewID(true);
  };

  const closeView = () => {
    setViewID(false);
    setView(initialTask);
  };

  return (
    <div className="w-full flex-1 rounded-md flex flex-col gap-4 ">
      {!viewID && <h3 className="text-xl font-bold">Entries</h3>}
      {!viewID
        ? data && (
            <>
              {data.map((task_item: taskType) => {
                return (
                  <Task
                    key={task_item.id}
                    task={task_item}
                    handleTaskClick={handleView}
                  />
                );
              })}
            </>
          )
        : data && (
            <div className="task-view-container">
              <TaskView
                task={view}
                handleClose={closeView}
                deleteItem={() => {
                  database.remove(view.id);
                  closeView();
                }}
              />
            </div>
          )}
    </div>
  );
}
