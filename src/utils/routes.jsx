// import React from 'react'
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import LoadingScreen from "../pages/loading/LoadingScreen";
import SignInPage from "../pages/signin/SignInPage";
import { selectUser } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import PublishedPage from "../pages/publish_page/PublicPage";
import DashBoardpage from "../pages/dashboard/DashboardPage";
import RequireAuth from "../components/auth/require-auth";
import RegisterPage from "../pages/register/RegisterPage";

const RouteManager = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("State", state);
  const currentUser = useSelector(selectUser);
  console.log("its selectUser" + JSON.stringify(currentUser));
  const [hasFetched, setHasFetched] = useState(false);
  const navigate = useNavigate();
  console.log("User:", !!currentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/promanage/user");
    }
  }, [currentUser]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const profiles = [
    {
      id: "event1",
      name: "Event 1",
      date: "2023-09-10",
      description: "Description 1",
    },
    {
      id: "event2",
      name: "Event 2",
      date: "2023-09-15",
      description: "Description 2",
    },
    // Add more events from Firebase data
  ];

  return (
    <Routes>
      <Route
        path="/promanage/"
        element={isLoading ? <LoadingScreen /> : <SignInPage />}
      />
      <Route path="/promanage/about" element={<AboutPage />} />
      {/* <Route path="/promanage/edit" element={<EditDetailsScreen />} /> */}
      <Route path="/promanage/register" element={<RegisterPage />} />
      <Route path="/promanage/signin" element={<SignInPage />} />
      {/* <Route path="/promanage/updates" element={<UpdatesPage />} /> */}
      {/* <Route path="/promanage/rough" element={<RoughPage />} /> */}
      <Route
        path="/promanage/profiles/:profileId"
        element={<PublishedPage />}
      ></Route>
      <Route
        path="/promanage/user"
        element={
          <RequireAuth>
            <DashBoardpage />
          </RequireAuth>
        }
      />
      <Route
        path="/promanage/home"
        element={
          isLoading && !currentUser ? (
            <LoadingScreen />
          ) : currentUser ? (
            <DashBoardpage />
          ) : (
            <DashBoardpage />
          )
        }
      />
    </Routes>
  );
};

export default RouteManager;
