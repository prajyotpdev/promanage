import React, { useEffect, useState } from "react";
import styles from "./SubTaskList.module.css";

const SubTaskList = ({ subTaskCheckList, onCountChange }) => {
  const [checkedSubtasks, setCheckedSubtasks] = useState(new Set());

  const [checkedCount, setCheckedCount] = useState(
    subTaskCheckList.filter((subtask) => subtask.checked).length
  );

  useEffect(() => {
    console.log(checkedSubtasks);
  }, [checkedCount]);

  const handleSubtaskChange = (subtaskId) => {
    const updatedCheckedSubtasks = new Set(checkedSubtasks);
    // prevCount = checkedCount;
    updatedCheckedSubtasks.has(subtaskId)
      ? updatedCheckedSubtasks.delete(subtaskId) &&
        setCheckedCount(checkedCount - 1)
      : updatedCheckedSubtasks.add(subtaskId) &&
        setCheckedCount(checkedCount + 1);
    setCheckedSubtasks(updatedCheckedSubtasks);
    // setCheckedCount((prevCount) => (isChecked ? prevCount + 1 :));
    onCountChange?.(checkedCount, subTaskCheckList.length);
  };

  return (
    <ul className={styles.subtasklist}>
      {subTaskCheckList.map((subtaskId) => (
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
  );
};

export default SubTaskList;
