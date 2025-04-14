import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

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
    <div className="createTask">
      <Link to="/">Return Home</Link>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="formContainer">
          <label>Taskname: </label>
          <ErrorMessage name="taskName" component="span" />
          <Field name="taskName" placeholder="(Ex. Do laundry...)" />
          <label>Description: </label>
          <ErrorMessage name="descriptionText" component="span" />
          <Field name="descriptionText" placeholder="(Ex. With detergent...)" />
          <button type="submit">Create Task</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateTask;
