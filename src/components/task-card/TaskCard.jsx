import React, { useState } from "react";
import styles from "./TaskCard.module.css";

const TaskCard = ({ task }) => {
  const { taskTitle, taskCheckList, taskValidity, taskStatus, taskPriority } =
    task;

  const [checkedSubtasks, setCheckedSubtasks] = useState(new Set()); // Store checked subtask IDs

  const formattedValidity = new Date(taskValidity).toLocaleString();
  const formattedStatus = taskStatus ? taskStatus : "Unknown";
  const handleSubtaskChange = (subtaskId) => {
    const updatedCheckedSubtasks = new Set(checkedSubtasks);
    updatedCheckedSubtasks.has(subtaskId)
      ? updatedCheckedSubtasks.delete(subtaskId) // Uncheck
      : updatedCheckedSubtasks.add(subtaskId); // Check
    setCheckedSubtasks(updatedCheckedSubtasks);
    console.log(checkedSubtasks);
  };
  return (
    <div className={styles.card}>
      <div className="task-header">
        <h2 className="task-title">{taskTitle}</h2>
        <span className="task-priority {taskPriority.toLowerCase()}">
          {taskPriority}
        </span>
      </div>
      <div className="task-details">
        <p>Validity: {formattedValidity}</p>
        <p>Status: {formattedStatus}</p>
        <ul className="task-checklist">
          {taskCheckList.map((subtaskId) => (
            <li key={subtaskId} className="checklist-item">
              <input
                type="checkbox"
                checked={checkedSubtasks.has(subtaskId)} // Check if subtask is checked
                onChange={() => handleSubtaskChange(subtaskId)} // Call handler on click/change
              />
              {subtaskId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;
