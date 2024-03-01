import DatePicker from "react-date-picker";
import styles from "./AddToDoModal.module.css";
import { useEffect, useState } from "react";
import DotIndicator from "../../../../components/dotindicator/DotIndicator.jsx";

const AddToDoModal = ({ onClose }) => {
  const [allCollapsed, setAllCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  const handleClose = () => {
    onClose();
  };

  const handleTaskChange = (index, value) => {
    // Update the task at the given index
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    // Add the new task to the tasks list
    setNewTask("");
    setTasks([...tasks, newTask]);
    // Clear the input field after adding a task
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    index > 1 ? setTasks(updatedTasks) : null;
    console.log("this is going to be deleted " + index);
  };
  const handleAddTodo = () => {
    onClose();
  };
  const addNewInputTaskField = () => {};

  // useEffect(() => {}, [isModalOpen]);
  const [value, onDateChange] = useState(new Date());
  return (
    <>
      <div className={styles.todoModalContent}>
        <div className={styles.todoSection}>
          <div className={styles.taskHeader}>
            <span>Title </span>
            <span style={{ color: "red" }}>*</span>
          </div>
          <input
            className={styles.taskInput}
            placeholder="Enter Task Title"
          ></input>
        </div>

        <div className={styles.todoSection}>
          <div className={styles.priorityContainer}>
            <div className={styles.taskHeader}>
              Select Priority
              <span style={{ color: "red" }}>*</span>
            </div>
            <div className={styles.taskPriorityContent}>
              <DotIndicator dotColor={"#FF2473"} height={"10px"} />
              <span>HIGH PRIORITY</span>
            </div>
            <div className={styles.taskPriorityContent}>
              <DotIndicator dotColor={"#18B0FF"} height={"10px"} />
              <span>MODERATE PRIORITY</span>
            </div>
            <div className={styles.taskPriorityContent}>
              <DotIndicator dotColor={"#63C05B"} height={"10px"} />
              <span>LOW PRIORITY</span>
            </div>
          </div>
        </div>

        <div className={styles.todoSection}>
          <div>
            <span>Checklist(0/0) </span>
            <span style={{ color: "red" }}>*</span>
          </div>
        </div>

        <div className={styles.todoSection}>
          <div className={styles.addedTaskList}>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={task}
                    onChange={(e) => handleTaskChange(index, e.target.value)}
                  />
                  <button
                    onClick={index > 0 ? handleDeleteTask(index) : null}
                  ></button>
                </li>
              ))}
            </ul>
            <button onClick={handleAddTask}>Add Task</button>
          </div>
          <div className={styles.addTask}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "grey",
                border: "transparent",
                padding: "0px",
              }}
              onClick={addNewInputTaskField}
            >
              + Add New
            </button>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <DatePicker onChange={onDateChange} value={value} />
          <div>
            <button
              onClick={handleClose}
              style={{
                backgroundColor: "white",
                color: "red",
                border: "2px solid red",
              }}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "#0d8090",
                color: "white",
                marginLeft: "10px",
                border: "2px solid #0d8090",
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToDoModal;
