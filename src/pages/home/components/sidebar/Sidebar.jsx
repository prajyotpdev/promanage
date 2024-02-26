import React from "react";
import styles from "./Sidebar.module.css";
import SandboxLogo from "../../../../assets/icons/sandboxLogo.svg";
import BoardIcon from "../../../../assets/icons/boardIcon.svg";
import AnalyticsIcon from "../../../../assets/icons/analyticsIcon.svg";
import SettingsIcon from "../../../../assets/icons/settingsIcon.svg";
import SignOutIcon from "../../../../assets/icons/signoutIcon.svg";

const Sidebar = ({ onSectionChange, currentsection }) => {
  const handleClick = (section) => {
    onSectionChange(section);
  };

  return (
    <div className={styles.sidebar}>
      <button
        onClick={() => handleClick("board")}
        className={`${styles["sidebar-title"]}`}
      >
        <img src={SandboxLogo} alt="logo" />
        Pro Manage
      </button>
      <button
        onClick={() => handleClick("board")}
        className={`${styles["sidebar-item"]} ${
          currentsection === "board" ? styles.active : ""
        }`}
      >
        <img src={BoardIcon} alt="logo" />
        Board
      </button>
      <button
        onClick={() => handleClick("analytics")}
        className={`${styles["sidebar-item"]} ${
          currentsection === "analytics" ? styles.active : ""
        }`}
        style={{ fill: currentsection === "board" ? "blue" : "inherit" }}
      >
        <img src={AnalyticsIcon} alt="logo" />
        Analytics
      </button>
      <button
        onClick={() => handleClick("settings")}
        className={`${styles["sidebar-item"]} ${
          currentsection === "settings" ? styles.active : ""
        }`}
      >
        <img src={SettingsIcon} alt="logo" fill="black" />
        Settings
      </button>
      <button onClick={() => {}} 
        className={`${styles["sidebar-signout"]}`}>
        <img src={SignOutIcon} alt="logo" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
