import React, { useState, useEffect, useContext } from "react";
import signin__image from "../../images/signin.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

const SignIn = ({ sign, submit, axiosInstance }) => {
  const { dispatch, isFetching } = useContext(Context);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newUser = {
      ...userData,
      [name]: value,
    };
    setUserData(newUser);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (userData.email !== "" && userData.password !== "") {
      console.log(userData);
      dispatch({ type: "Login_START" });
      axiosInstance
        .post("/login", userData)
        .then((response) => {
          console.log(response.data);
          if (response.data.status) {
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
            localStorage.setItem("token", response.data.token);
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: "LOGIN_FAILURE" });
        });

      setUserData({
        email: "",
        password: "",
      });
    } else {
      alert("Please fill in the fields");
    }
  }
  return (
    <section className="sign-in" id="about" data-aos="fade-up">
      <div className="sign-in-frame">
        <div className="sign-in-box">
          <div className="sign-in-content">
            <div className="sign-in-content-title">Sign In</div>
            <form className="sign-in-content-form" onSubmit={handleSubmit}>
              <div className="sign-in-content-form__group">
                <input
                  className="sign-in-content-form__input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-in-content-form__group">
                <input
                  className="sign-in-content-form__input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-in-content-form__group">
                <button className="sign-in-content-form__button" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="sign-in-content-signup">
              <Link to="/signup">I don't have an account</Link>
            </div>
          </div>
          <div
            className="sign-in-image"
            style={{ backgroundImage: `url(${signin__image})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
