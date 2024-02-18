import React from "react";
import "../signin/SignInPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAsync, selectUser } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.user);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    alert("User Signed In");
    dispatch(
      loginAsync({
        email: email,
        password: password,
      })
    );
    console.log("This is state" + state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("User Signed In");
    const userData = {
      email: email,
      password: password,
    };

    try {
      const signin = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (signin.ok) {
        const responseJson = await signin.json();
        console.log("Response from the server:", responseJson);
      } else {
        // Handle the case when the request was not successful
        console.error("Signin failed with status:", signin.status);
      }
    } catch (err) {
      console.error();
    }
  };

  const routeChange = () => {
    let path = `signup`;
    navigate("/signup");
  };

  return (
    <div className="screen">
      <div className="leftside">
        <div className="Heading">
          <h1>Sign In Page</h1>
          <h3>Your personal job finder is here</h3>
          <div className="App">
            <form onSubmit={handleSignIn}>
              <input placeholder="Email" type="email" onChange={handleEmail} />
              <input
                placeholder="Password"
                type="password"
                onChange={handlePassword}
              />
              <button type="submit" className="btn">
                Submit
              </button>
              <div className="signup" onClick={routeChange}>
                Don't have an account?{" "}
                <div className="signupbtn">
                  <u>Sign Up</u>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="rightside">
        <img
          src="https://images.pexels.com/photos/7660824/pexels-photo-7660824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignInPage;
