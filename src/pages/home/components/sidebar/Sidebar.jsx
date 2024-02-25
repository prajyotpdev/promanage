import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ onSectionChange }) => {
  const handleClick = (section) => {
    onSectionChange(section);
  };

  return (
    <div className={styles.sidebar}>Sidebar
      <button onClick={() => handleClick("board")}>Board</button>
      <button onClick={() => handleClick("analytics")}>Analytics</button>
      <button onClick={() => handleClick("settings")}>Settings</button>
      <button
        onClick={() => {
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
