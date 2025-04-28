import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import styles from "../styles/Home.module.css";

function Home() {
  const navigate = useNavigate();
  const { tasks, deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <main className={styles.home}>
      <header>
        <h1>Task Manager</h1>
        <button onClick={() => navigate("/createtask")}>
          + Create New Task
        </button>
      </header>

      <section className={styles.taskList}>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one!</p>
        ) : (
          tasks.map((task, index) => (
            <article
              key={index}
              className={`${styles.task} ${task.completed ? styles.completed : ""}`}
            >
              <h2 className={styles.taskname}>{task.taskName}</h2>
              <p>{task.descriptionText}</p>
              <div className={styles.taskActions}>
                <button onClick={() => toggleComplete(index)}>
                  {task.completed ? "Mark Incomplete" : "Mark Completed"}
                </button>
                <button onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default Home;
