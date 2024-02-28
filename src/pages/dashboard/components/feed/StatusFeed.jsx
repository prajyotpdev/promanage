import styles from "./StatusFeed.module.css";
import CollapseAllIcon from "../../../../assets/icons/collapseAllIcon.svg";
import AddTodoIcon from "../../../../assets/icons/addTodoIcon.svg";

import TaskCard from "../../../../components/task-card/TaskCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

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
  
  // const state = useSelector((state) => state);
  const userID = jwtDecode(useSelector((state) => state.user.user).token).userId;
  console.log("UserID :"+userID)
  const currentTaskList = [
    {
      taskCheckList: [],
      _id: "65d60bb73545645bde5552ff",
      taskStatus: "Done",
      taskTitle: "Task Title3",
      taskValidity: "2022-02-04T12:34:56.789Z",
      taskPriority: "Low",
      createdBy: "65d5d5fafd55e7cade4c3fb3",
      createdAt: "2022-02-01T12:34:56.789+00:00",
    },
    {
      _id: "65d79a6e01c359116a78c7c3",
      taskTitle: "Task Title3",
      taskStatus: "In Progress",
      taskPriority: "Moderate",
      taskValidity: "2024-02-22T12:34:56.789Z",
      taskCheckList: ["subtask1", "subtask2", "subtask3"],
      __v: 0,
      createdBy: "65d5d5fafd55e7cade4c3fb3",
      createdAt: "2022-02-03T12:34:56.789+00:00",
    },
    {
      _id: "65d79a6e01c359111a78c7c3",
      taskTitle: "Task Title6",
      taskStatus: "Done",
      taskPriority: "High",
      taskValidity: "2024-02-12T12:34:56.789Z",
      taskCheckList: ["subtask6", "subtask3", "subtask1"],
      __v: 0,
      createdBy: "65d5d5fafd55e7cade4c3fb3",
      createdAt: "2022-02-03T13:34:56.789+00:00",
    },
  ];

  const [allCollapsed, setAllCollapsed] = useState(false);

  const handleCollapseAll = () => {
    setAllCollapsed(!allCollapsed);
  };
  const handleAddTodoClicked = (section) => {
    addTodo();
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
            <div onClick={handleCollapseAll} className={styles.feedCollapseAll}>
              <img src={CollapseAllIcon} alt="collapse_icon" />
            </div>
            {statusId=="To-do" ?<div onClick={handleAddTodoClicked} className={styles.addTodo}>
              <img src={AddTodoIcon} alt="collapse_icon" />
            </div>:null}
          </div>  
          
          {currentTaskList.map((currentTask) =>(
            <TaskCard task={currentTask} allCollapsed={allCollapsed} key= {currentTask._id}/>))}
          
          {/* <TaskCard task={currentTask} allCollapsed={allCollapsed} key= {currentTask.id}/> */}
        </div>
      </div>
    </>
  );
};

export default StatusFeed;
