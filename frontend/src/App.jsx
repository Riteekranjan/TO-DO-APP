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
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleAdd = async () => {
    if (!title) return alert("Please enter a task");
    await addTask(title);
    setTitle("");
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
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
        <button type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
