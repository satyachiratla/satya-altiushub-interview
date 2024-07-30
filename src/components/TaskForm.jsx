/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function TaskForm({ onAddTask, editTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  console.log("editTask--->", editTask);

  useEffect(() => {
    setEnteredTask(editTask?.task);
  }, [editTask]);

  const changeTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const submitTaskHandler = (event) => {
    event.preventDefault();

    console.log("task==>", enteredTask);
    onAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="border border-teal-500 rounded-md p-6 max-w-[500px] mx-auto space-y-4">
      <h2 className="text-center font-semibold text-xl">Tasks Management</h2>
      <form onSubmit={submitTaskHandler} className="space-y-4">
        <p className="flex flex-col gap-1">
          <label htmlFor="task">Task</label>
          <input
            id="task"
            type="text"
            required
            value={enteredTask}
            onChange={changeTaskHandler}
            className="border border-gray-300 py-2 px-2 rounded-md"
            placeholder="Enter Task"
          />
        </p>
        <p>
          <button
            type="submit"
            className="w-full py-2 px-1 bg-blue-300 rounded-md"
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
