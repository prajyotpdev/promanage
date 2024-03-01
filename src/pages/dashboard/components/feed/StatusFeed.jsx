import styles from "./StatusFeed.module.css";
import CollapseAllIcon from "../../../../assets/icons/collapseAllIcon.svg";
import AddTodoIcon from "../../../../assets/icons/addTodoIcon.svg";

import TaskCard from "../../../../components/task-card/TaskCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Modal from "../../../../components/modal/Modal";
import AddToDoModal from "../addtodomodal/AddToDoModal";

const StatusFeed = ({ statusId }) => {
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
  const userID = jwtDecode(
    useSelector((state) => state.user.user).token
  ).userId;
  console.log("UserID :" + userID);
  const currentTaskList = [
    {
      taskCheckList: {
        id1: { subtaskName: "subtaskName1", isDone: true },
        id2: { subtaskName: "subtaskName2", isDone: false },
        id3: { subtaskName: "subtaskName3", isDone: true },
        id4: { subtaskName: "subtaskName4", isDone: false },
      },
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
      taskCheckList: {
        id1: { subtaskName: "subtaskName1", isDone: true },
        id2: { subtaskName: "subtaskName2", isDone: false },
        id3: { subtaskName: "subtaskName3", isDone: true },
        id4: { subtaskName: "subtaskName4", isDone: false },
      },
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
      taskCheckList: {
        id1: { subtaskName: "subtaskName1", isDone: true },
        id2: { subtaskName: "subtaskName2", isDone: false },
        id3: { subtaskName: "subtaskName3", isDone: true },
        id4: { subtaskName: "subtaskName4", isDone: false },
      },
      __v: 0,
      createdBy: "65d5d5fafd55e7cade4c3fb3",
      createdAt: "2022-02-03T13:34:56.789+00:00",
    },
  ];

  const [allCollapsed, setAllCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openTodoModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleCollapseAll = () => {
    setAllCollapsed(!allCollapsed);
  };
  const handleAddTodoClicked = (section) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

            {statusId == "To-do" ? (
              <button onClick={openTodoModal} className={styles.addTodo}>
                <img src={AddTodoIcon} alt="collapse_icon" />
              </button>
            ) : null}
            <div onClick={handleCollapseAll} className={styles.feedCollapseAll}>
              <img src={CollapseAllIcon} alt="collapse_icon" />
            </div>
          </div>

          {currentTaskList.map((currentTask) => (
            <TaskCard
              task={currentTask}
              allCollapsed={allCollapsed}
              key={currentTask._id}
            />
          ))}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <AddToDoModal onClose={closeModal} />
          </Modal>

          {/* <TaskCard task={currentTask} allCollapsed={allCollapsed} key= {currentTask.id}/> */}
        </div>
      </div>
    </>
  );
};

export default StatusFeed;
