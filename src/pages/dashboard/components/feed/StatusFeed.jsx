import styles from "./StatusFeed.module.css";
import CollapseAllIcon from "../../../../assets/icons/collapseAllIcon.svg";

import TaskCard from "../../../../components/task-card/TaskCard";

const StatusFeed = ({statusId}) => {
  const clearLocalStorage = () => {
    localStorage.clear();
    // You can also update the state or perform any other necessary actions
  };

  const currentTask = {
    taskCheckList: ["subtaksid1", "subtaksid2", "subtaksid3"],
    taskValidity: "2024-02-22T12:34:56.789Z",
    taskStatus: "Done",
    taskPriority: "Moderate",
    taskTitle: "Task Title3",
    createdAt: "2024-02-12T12:34:56.789Z",
  };

  const currentTaskList = [
    {
      taskCheckList: [],
      _id: "65d60bb73545645bde5552ff",
      taskStatus: "Done",
      taskTitle: "Task Title3",
      taskValidity: "2022-02-04T12:34:56.789Z",
      taskPriority: "Late",
      createdBy: "65d5d5fafd55e7cade4c3fb3",
      createdAt: "2022-02-01T12:34:56.789+00:00",
    },
    {
      _id: "65d79a6e01c359116a78c7c3",
      taskTitle: "Task Title3",
      taskStatus: "In Progress",
      taskPriority: "Late",
      taskValidity: "2024-02-22T12:34:56.789Z",
      taskCheckList: ["subtask1", "subtask2", "subtask3"],
      __v: 0,
      createdBy: "65d5d5fafd55e7cade4c3fb3",
      createdAt: "2022-02-03T12:34:56.789+00:00",
    },
  ];

  const handleCollapseAll = (section) => {
    onSectionChange(section);
  };

  const handleFilteredDataChange = (filteredData) => {
    console.log("Filtered Data:", filteredData);
  };

  return (
    <>
      <div className={styles.tasksFeedContainer}>
        <div className={styles.feed}>
          <div className={styles.feedHeader}>
            <div className={styles.feedTitle}>{statusId}</div>
            <btn onClick={handleCollapseAll} className={styles.feedCollapseAll}>
              <img src={CollapseAllIcon} alt="collapse_icon" />
            </btn>
          </div>  
          <TaskCard task={currentTask} />
          <TaskCard task={currentTask} />
          <TaskCard task={currentTask} />
        </div>
      </div>
    </>
  );
};

export default StatusFeed;
