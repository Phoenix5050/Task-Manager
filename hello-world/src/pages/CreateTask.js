import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import styles from "../styles/CreateTask.module.css";

function CreateTask() {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);

  const initialValues = {
    taskName: "",
    descriptionText: "",
  };

  const onSubmit = (data) => {
    const newTask = { ...data, completed: false };
    addTask(newTask);
    navigate("/");
  };

  return (
    <main className={styles.createTask}>
      <header>
        <h1>Create a New Task</h1>
        <button onClick={() => navigate("/")}>
          Return Home
        </button>
      </header>

      <section>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className={styles.formContainer}>
            <label htmlFor="taskName">Taskname:</label>
            <ErrorMessage name="taskName" component="span" />
            <Field id="taskName" name="taskName" placeholder="(Ex. Do laundry...)" />

            <label htmlFor="descriptionText">Description:</label>
            <ErrorMessage name="descriptionText" component="span" />
            <Field id="descriptionText" name="descriptionText" placeholder="(Ex. With detergent...)" />

            <button type="submit">Create Task</button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}

export default CreateTask;
