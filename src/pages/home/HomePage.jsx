import { useState } from "react";
import User from "../../store/models/User";

const HomePage = () => {
  const [user, setUser] = useState(new User());
  const updateUser = () => {
    const updatedUser = new User("prajyot@getTimeMeasureUtils.com");
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    console.log(JSON.stringify(updatedUser));
  };

  return (
    <div>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default HomePage;
