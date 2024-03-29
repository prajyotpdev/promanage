import React, { useEffect, useState } from "react";
import styles from "./TaskCard.module.css";
import SubTaskList from "../subtask-list/SubTaskList";
import CollapsibleIcon from "../../assets/icons/collapsibledropdown.svg";
import DotIndicator from "../dotindicator/DotIndicator.jsx";

const TaskCard = ({ key, task, allCollapsed }) => {
  const { taskTitle, taskCheckList, taskValidity, taskStatus, taskPriority } =
    task;

  const formattedValidity = new Date(taskValidity).toLocaleString();
  const formattedStatus = taskStatus ? taskStatus : "Unknown";
  const options = {
    month: "short",
    day: "numeric",
  };
  const [checkedsubtask, setCheckedsubtask] = useState(
    Object.keys(taskCheckList).filter(
      (subTaskId) => taskCheckList[subTaskId].isDone
    ).length
  );
  const [isCollapsed, setIsCollapsed] = useState(allCollapsed);
  const [totalsubtasks, setTotalsubtasks] = useState(
    Object.keys(taskCheckList).length
  );

  const originalDate = new Date(taskValidity);
  const formattedDate = originalDate.toLocaleString("en-US", options);
  const day = originalDate.getDate();
  const month = originalDate.toLocaleString("en-US", { month: "short" });
  const year = originalDate.getFullYear();
  let dotColor = "#18B0FF";

  function getOrdinalNum(n) {
    return (
      n +
      (n > 0
        ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : "")
    );
  }

  const handleCountChange = (updatedChecked, total) => {
    setCheckedsubtask(updatedChecked);
    setTotalsubtasks(Object.keys(taskCheckList).length);
  };

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  taskPriority.toLowerCase() == "high"
    ? (dotColor = "#FF2473")
    : taskPriority.toLowerCase() == "moderate"
    ? (dotColor = "#18B0FF")
    : (dotColor = "#63C05B");

  useEffect(() => {}, [isCollapsed, checkedsubtask]);

  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <div className={styles.prioritybar}>
          <div className={styles.priority}>
            <DotIndicator dotColor={dotColor} height={"10px"} />{" "}
            <span className={styles.nothing}>
              {taskPriority.toUpperCase()} PRIORITY
            </span>
          </div>
          <div className={styles.collapsible}>
            <span
              className={`${styles.dot} ${styles.dotColor}`}
              style={{ "--dot-height": "5px", "--dot-color": "#000000" }}
            ></span>
            <span
              className={`${styles.dot} ${styles.dotColor}`}
              style={{ "--dot-height": "5px", "--dot-color": "#000000" }}
            ></span>
            <span
              className={`${styles.dot} ${styles.dotColor}`}
              style={{ "--dot-height": "5px", "--dot-color": "#000000" }}
            ></span>
          </div>
        </div>
        <h2 className={styles.cardTitle}>{taskTitle}</h2>
      </div>
      <div className={styles.cardMainSection}>
        {/* <p>Status: {formattedStatus}</p> */}
        <div className={styles.cardMainSectionbanner}>
          <div className={styles.cardMainSectionChecklistIndicator}>
            CheckList ({checkedsubtask}/{totalsubtasks})
          </div>
          <div className={styles.cardMainSectionChecklistIndicator}>
            {isCollapsed ? (
              <img
                src={CollapsibleIcon}
                alt="collapsible-icon"
                onClick={handleCollapsed}
              />
            ) : (
              <img
                src={CollapsibleIcon}
                alt="collapsible-icon"
                style={{ transform: "scaleY(-1)" }}
                onClick={handleCollapsed}
              />
            )}
          </div>
        </div>
        {(!allCollapsed && !isCollapsed) || !isCollapsed || !allCollapsed ? (
          <SubTaskList
            subTaskCheckList={taskCheckList}
            onCountChange={handleCountChange}
          />
        ) : (
          <div style={{ height: "10px" }}></div>
        )}
      </div>
      <div className={styles.cardfooter}>
        {taskValidity == "" ? (
          <div></div>
        ) : (
          <div className={styles.validity}>
            {month} {getOrdinalNum(day)}
          </div>
        )}
        <div className={styles.statusList}>
          <div className={styles.statusItem}>PROGRESS</div>
          <div className={styles.statusItem}>TO-DO</div>
          <div className={styles.statusItem}>Done</div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
