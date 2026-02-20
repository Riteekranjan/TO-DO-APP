export default function TaskList({ tasks, onDelete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task._id}
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 14px",
            borderRadius: "8px",
            width: "320px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
            border: "1px solid #e5e7eb",
            transition: "all 0.2s ease",
          }}
        >
          <span>{task.title}</span>
          <button
            onClick={() => onDelete(task._id)}
            style={{
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          ></button>
        </li>
      ))}
    </ul>
  );
}
