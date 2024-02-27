import { useState } from "react";
import User from "../../store/models/User";
import styleshomepage from "../home/HomePage.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import DashBoardpage from "../dashboard/DashboardPage";
import AnalyticsPage from "../analytics/AnalyticsPage";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("MainSection"); // Track active section
  const [user, setUser] = useState(new User());
  const updateUser = () => {
    const updatedUser = new User("prajyot@getTimeMeasureUtils.com");
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    console.log(JSON.stringify(updatedUser));
  };
  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
  };
  const renderSection = () => {
    switch (activeSection) {
      case "board":
        return <DashBoardpage />;
      case "analytics":
        return <AnalyticsPage />;
      case "settings":
        return <Settings />;
      default:
        return <DashBoardpage />;
    }
  };

  return (
    <div className={styleshomepage.homepage}>
      <Sidebar
        onSectionChange={handleSectionChange}
        currentsection={activeSection}
        style={{ flex: "1 auto" }}
      />
      <div className={styleshomepage.heroContainer}>{renderSection()}</div>{" "}
    </div>
  );
};

export default HomePage;
