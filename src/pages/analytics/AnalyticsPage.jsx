import { useDispatch, useSelector } from "react-redux";
import styles from "./AnalyticsPage.module.css";
import { fetchTasks } from "../../store/slices/taskSlice";
import { useEffect } from "react";

const AnalyticsPage = () => {
  const dispatch = useDispatch();

  const handleGetAllTasks = async (e) => {
    dispatch(fetchTasks());
  };
  const valuesMapCpy = {
    backlog_tests: {
      title: "Backlog Tests",
      value: 16,
    },
    low_priority: {
      title: "Low Priority Tasks",
      value: 4,
    },
    todo_tasks: {
      title: "To-do Tasks",
      value: 14,
    },
    moderate_priority: {
      title: "Moderate Priority Tasks",
      value: 16,
    },
    inprogress_tasks: {
      title: "In-Progress Tasks",
      value: 3,
    },
    high_priority: {
      title: "High Priority Tasks",
      value: 1,
    },
    completed_tasks: {
      title: "Completed Tasks",
      value: 16,
    },
    due_date_tasks: {
      title: "Due Date Tasks",
      value: 16,
    },
  };

  const updateValuesMap = (tasks) => {
    const valuesMapCopy = valuesMapCpy;

    valuesMapCopy.backlog_tests.value = tasks.filter(
      (task) => task.taskStatus === "Backlog"
    ).length;
    valuesMapCopy.low_priority.value = tasks.filter(
      (task) => task.taskPriority === "Low"
    ).length;
    valuesMapCopy.todo_tasks.value = tasks.filter(
      (task) => task.taskStatus === "To-Do"
    ).length;
    valuesMapCopy.moderate_priority.value = tasks.filter(
      (task) => task.taskPriority === "Moderate"
    ).length;
    valuesMapCopy.inprogress_tasks.value = tasks.filter(
      (task) => task.taskStatus === "In-Progress"
    ).length;
    valuesMapCopy.high_priority.value = tasks.filter(
      (task) => task.taskPriority === "High"
    ).length;
    valuesMapCopy.completed_tasks.value = tasks.filter(
      (task) => task.taskStatus === "Done"
    ).length;

    return valuesMapCopy;
  };
  if (useSelector((state) => state.tasks) == undefined || null) {
    handleGetAllTasks;
  }
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const updatedValuesMap = updateValuesMap(
    useSelector((state) => state.task.data.data)
  );
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
