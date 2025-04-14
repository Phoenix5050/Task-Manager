import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

function Home() {
  const { tasks, deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <div className="home">
      <h1>Task Manager</h1>
      <Link to="/createtask">Add New Task</Link>

      {tasks.map((task, index) => (
        // display tasks using name and description followed by buttons to mark as complete/incomplete and delete
        <div
          key={index}
          className={`task ${task.completed ? "completed" : ""}`}
        >
          <div className="taskname">{task.taskName}</div>
          <div className="body">{task.descriptionText}</div>
          <button onClick={() => toggleComplete(index)}>
            {task.completed ? "Mark as incomplete" : "Mark as complete"}
          </button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
