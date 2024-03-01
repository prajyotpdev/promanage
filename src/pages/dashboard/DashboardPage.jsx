import styles from "./DashboardPage.module.css";
import FilterForm from "../../components/dropdown/Dropdown";
import StatusFeed from "./components/feed/StatusFeed";
import Navbar from "../home/components/navbar/Navbar";
import { fetchTasks } from "../../store/slices/taskSlice";
import { useDispatch } from "react-redux";
import SolidButton from "../../components/buttons/SolidButton/SolidButton";
import { useEffect, useState } from "react";

const DashBoardpage = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    // You can also update the state or perform any other necessary actions
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
  const [taskList, setTaskList] = useState(currentTaskList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    
  }, [dispatch]);

  const handleCollapseAll = (section) => {
    onSectionChange(section);
  };

  const handleFilteredDataChange = (filteredData) => {
    console.log("Filtered Data:", filteredData);
  };

  const handleGetAllTasks = async (e) => {
    dispatch(fetchTasks());
    // onClose();
  };

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
        <SolidButton
          bgcolor={"#FF2473"}
          fontColor={"#FFFFFF"}
          onClick={handleGetAllTasks}
        >
          Test
        </SolidButton>
        <div className={styles.dashboardHeroContainer}>
          {/* <button onClick={clearLocalStorage}>Clear</button> */}
          <div className={styles.horizontailScroll}>
            <StatusFeed statusId="Backlog" key={1} />
            <StatusFeed statusId="To-do" key={2} />
            <StatusFeed statusId="In progress" key={3} />
            <StatusFeed statusId="Done" key={4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardpage;
