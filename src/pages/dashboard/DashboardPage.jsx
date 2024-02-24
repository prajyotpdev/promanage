import TaskCard from "../../components/task-card/TaskCard";

const DashBoardpage = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    // You can also update the state or perform any other necessary actions
  };
  const currentTask = {
    taskCheckList: ["subtaksid1", "subtaksid2", "subtaksid3"],
    taskValidity: "2024-02-22T12:34:56.789Z",
    taskStatus: "Done",
    taskPriority: "Late",
    taskTitle: "Task Title3",
  };
  return (
    <div>
      <button onClick={clearLocalStorage}>Clear</button>
      <TaskCard task={currentTask} />
    </div>
  );
};

export default DashBoardpage;
