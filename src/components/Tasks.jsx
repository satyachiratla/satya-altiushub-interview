/* eslint-disable react/prop-types */
export default function Tasks({ tasks, onDelete, onEdit }) {
  //   console.log("tasks-->", tasks);
  return (
    <>
      {tasks?.length === 0 && (
        <p className="text-center text-lg font-medium">
          No Tasks! Please add one!
        </p>
      )}
      {tasks?.length > 0 && (
        <ul className="border border-cyan-300 p-6 rounded-md max-w-[500px] mx-auto space-y-3">
          {tasks?.map((task) => (
            <li
              key={task?.id}
              className="flex justify-between items-center bg-teal-200 p-4 rounded-md"
            >
              <p>{task?.task}</p>
              <div className="space-x-4">
                <button
                  onClick={() => onEdit(task?.id)}
                  className="text-green-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task?.id)}
                  className="text-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
