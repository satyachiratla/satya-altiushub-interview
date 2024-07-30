import { useState } from "react";
import AuthForm from "./components/AuthForm";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import ImageUpload from "./components/ImageUpload";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState();

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => [...prevTasks, { id: crypto.randomUUID(), task }]);
  };

  const deleteTaskHandler = (id) => {
    const updatedTasks = tasks?.filter((task) => task?.id !== id);
    setTasks(updatedTasks);
  };

  const editTaskHandler = (id) => {
    const foundTask = tasks?.find((task) => task?.id === id);
    setEditTask(foundTask);
  };

  return (
    <div className="space-y-5">
      <AuthForm />
      <TaskForm onAddTask={addTaskHandler} editTask={editTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskHandler}
        onEdit={editTaskHandler}
      />
      <ImageUpload />
      <ProfilePage />
    </div>
  );
}

export default App;
