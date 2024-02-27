import styles from "./AnalyticsPage.module.css";

const AnalyticsPage = () => {
  const valuesMap = {
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
