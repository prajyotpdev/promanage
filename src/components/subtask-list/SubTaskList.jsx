import React, { useEffect, useState } from "react";
import styles from "./SubTaskList.module.css";

const SubTaskList = ({ subTaskCheckList, onCountChange }) => {
  const [checkedSubtasks, setCheckedSubtasks] = useState(
    Object.keys(subTaskCheckList).filter(
      (subTaskId) => subTaskCheckList[subTaskId].isDone
    )
  );

  const [checkedCount, setCheckedCount] = useState(
    Object.values(subTaskCheckList).filter((item) => item.isDone).length
  );

  useEffect(() => {
    onCountChange?.(checkedCount, subTaskCheckList.length);
  }, [checkedCount, checkedSubtasks]);

  const handleSubtaskChange = (subtaskId) => {
    console.log("this is subtaskID" + subtaskId);
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ul className={styles.subtasklist}>
      {Object.values(subTaskCheckList).map((subtaskId, index) => (
        <li
          key={Object.keys(subTaskCheckList)[index]}
          className={styles.subtasklistItem}
        >
          <input
            type="checkbox" 
            defaultChecked={subtaskId.isDone}
            onChange={() =>
              handleSubtaskChange(Object.keys(subTaskCheckList)[index])
            }
          />
          {subtaskId.subtaskName}
        </li>
      ))}
    </ul>
  );
};

export default SubTaskList;
