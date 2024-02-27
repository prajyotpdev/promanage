import TaskCard from "../../components/task-card/TaskCard";
import styles from "./DashboardPage.module.css";
import CollapseAllIcon from "../../assets/icons/collapseAllIcon.svg";
import Dropdown from "../../components/dropdown/Dropdown";
import FilterForm from "../../components/dropdown/Dropdown";

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
    createdAt:"2024-02-12T12:34:56.789Z"
  };

  const currentTaskList = {
    taskCheckList: ["subtaksid1", "subtaksid2", "subtaksid3"],
    taskValidity: "2024-02-22T12:34:56.789Z",
    taskStatus: "Done",
    taskPriority: "Moderate",
    taskTitle: "Task Title3",
    createdAt:"2024-02-12T12:34:56.789Z"
  };

  const handleCollapseAll = (section) => {
    onSectionChange(section);
  };

  return (
    <>
    <div className={styles.dashboardPage}>
    <div className={styles.dashboardHeader}>
    Board
    <FilterForm data={currentTask}/>
    </div>
    <div className={styles.dashboardScrollableContainer}><div className={styles.dashboardHeroContainer}>
      {/* <button onClick={clearLocalStorage}>Clear</button> */}
      <div className={styles.tasksFeedContainer}>   
      <div className={styles.feed}>
      <div className={styles.feedHeader}>
        <div className={styles.feedTitle}>Backlog</div>
        <btn onclick={handleCollapseAll} className={styles.feedCollapseAll}>
          <img src={CollapseAllIcon} alt="collapse_icon" />
      </btn></div>
      <TaskCard task={currentTask} />
      <TaskCard task={currentTask} />
      <TaskCard task={currentTask} /></div>     
      </div>
      <div className={styles.tasksFeedContainer}>   
      <div className={styles.feed}>
      <div className={styles.feedHeader}>
        <div className={styles.feedTitle}>Backlog</div>
        <btn onclick={handleCollapseAll} className={styles.feedCollapseAll}>
          <img src={CollapseAllIcon} alt="collapse_icon" />
      </btn></div>
      <TaskCard task={currentTask} />
      <TaskCard task={currentTask} />
      <TaskCard task={currentTask} /></div>     
      </div>
      <div className={styles.tasksFeedContainer}>   
      <div className={styles.feed}>
      <div className={styles.feedHeader}> 
        <div className={styles.feedTitle}>Backlog</div>
        <btn onclick={handleCollapseAll} className={styles.feedCollapseAll}>
          <img src={CollapseAllIcon} alt="collapse_icon" />
      </btn></div>
      <TaskCard task={currentTask} />
      <TaskCard task={currentTask} />
      <TaskCard task={currentTask} /></div>     
      </div>
      </div></div>
    
      </div>
    </>
  );
};

export default DashBoardpage;
