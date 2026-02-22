import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "./api";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

const loadTasks = async () => {
  try {
    const res = await getTasks();
    setTasks(res.data);
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
};

const handleAdd = async () => {
  if (!title.trim()) return alert("Please enter a task");

  try {
    await addTask(title);
    setTitle("");
    loadTasks();
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

const handleDelete = async (id) => {
  try {
    await deleteTask(id);
    loadTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

  return (
    <div style={{ padding: "2rem" }}>
      <h1>To-Do App</h1>
      <form
        id="input-section"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit" >Add</button>
      </form>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
