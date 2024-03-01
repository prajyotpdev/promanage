import { useSelector } from "react-redux";
import styles from "./AnalyticsPage.module.css";


const updateValuesMap = (tasks) => {
  const valuesMapCopy = { ...valuesMap };

  // Update values based on tasks
  valuesMapCopy.backlog_tests.value = tasks.filter(task => task.taskStatus === 'Backlog').length;
  valuesMapCopy.low_priority.value = tasks.filter(task => task.taskPriority === 'Low').length;
  valuesMapCopy.todo_tasks.value = tasks.filter(task => task.taskStatus === 'To-Do').length;
  valuesMapCopy.moderate_priority.value = tasks.filter(task => task.taskPriority === 'Moderate').length;
  valuesMapCopy.inprogress_tasks.value = tasks.filter(task => task.taskStatus === 'In-Progress').length;
  valuesMapCopy.high_priority.value = tasks.filter(task => task.taskPriority === 'High').length;
  valuesMapCopy.completed_tasks.value = tasks.filter(task => task.taskStatus === 'Done').length;

  return valuesMapCopy;
};


const AnalyticsPage = () => {
console.log("this is state.tasks.tasks.data :" + useSelector((state) => state.tasks));
  const updatedValuesMap = updateValuesMap();
  const valuesMap = updatedValuesMap;
  return (
    <div>
      <div className={styles.analyticsPage}>
        <div className={styles.analyticsHeader}>Analytics</div>
        <div className={styles.analyticsMainContainer}>
          <div className={styles.analyticsEntriesColumn}>
            {Object.entries(valuesMap).map(([key, { title, value }], index) => {
              return (
                index % 2 == 0 && (
                  <div className={styles.analticsItem} key={key}>
                    <div className={styles.analticsItemKey}>
                      <span
                        className={`${styles.dot} ${styles.dotColor}`}
                        style={{
                          "--dot-height": "10px",
                          "--dot-color": "#90C4CC",
                          margin: "1em",
                          textAlign: "center",
                        }}
                      ></span>
                      {title}
                    </div>
                    {value}
                  </div>
                )
              );
            })}
          </div>
          <div className={styles.analyticsEntriesColumn}>
            {Object.entries(valuesMap).map(([key, { title, value }], index) => {
              return (
                index % 2 == 1 && (
                  <div className={styles.analticsItem} key={key}>
                    <div className={styles.analticsItemKey}>
                      <span
                        className={`${styles.dot} ${styles.dotColor}`}
                        style={{
                          "--dot-height": "10px",
                          "--dot-color": "#90C4CC",
                          margin: "1em",
                        }}
                      ></span>
                      {title}
                    </div>
                    {value}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;

const analticsItem = (
  <tr className={styles.analticsItem}>
    <span
      className={`${styles.dot} ${styles.dotColor}`}
      style={{ "--dot-height": "10px", "--dot-color": "#90C4CC" }}
    ></span>
  </tr>
);
