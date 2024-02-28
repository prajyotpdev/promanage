import styles from "./DashboardPage.module.css";
import FilterForm from "../../components/dropdown/Dropdown";
import StatusFeed from "./components/feed/StatusFeed";
import Navbar from "../home/components/navbar/Navbar";

const DashBoardpage = () => {
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

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("this is user at localstorage " +user.token);
  return (
    <>
      <div className={styles.dashboardPage}>
        <Navbar />
        <div className={styles.dashboardHeader}>
          Board
          <FilterForm
            data={currentTaskList}
            onFilteredDataChange={handleFilteredDataChange}
          />
        </div>
        <div className={styles.dashboardHeroContainer}>
          {/* <button onClick={clearLocalStorage}>Clear</button> */}
          <div className={styles.horizontailScroll}>
            <StatusFeed statusId="Backlog" key={1}/>
            <StatusFeed statusId="To-do" key={2}/>
            <StatusFeed statusId="In progress" key={3}/>
            <StatusFeed statusId="Done" key={4}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardpage;
