import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "./Context/Context";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rules from "./Pages/Rules/Rules";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Profile from "./Pages/Account/Profile";
import SignIn from "./Pages/Account/SignIn";
import SignUp from "./Pages/Account/SignUp";
import AOS from "aos";
import "aos/dist/aos.css";

const axiosInstance = axios.create({
  baseURL: "",
});

function App() {
  AOS.init();
  const loadData = async () => {
    try {
        if(localStorage.getItem("token")){
            dispatch({ type: "Login_START" });
            const data = await axiosInstance.get("/verifytoken", {
              headers: { token: localStorage.getItem("token") },
            });
            console.log(data);
            dispatch({ type: "LOGIN_SUCCESS", payload: data.data.user });
        }
     
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  const { user, dispatch } = useContext(Context);
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <Header style={{ background: "var(--primary)" }} />
      )}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
              </>
            }
          />
          <Route path="/rules" element={<Rules />} />
          <Route
            path="/portfolio"
            element={
              user ? (
                <Portfolio load={loadData} />
              ) : (
                <SignIn axiosInstance={axiosInstance} />
              )
            }
          />
          <Route
            path="/account"
            element={
              user ? <Profile /> : <SignIn axiosInstance={axiosInstance} />
            }
          />
          <Route path="/signup" element={user ? <Profile /> : <SignUp />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
