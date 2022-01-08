import React, { useState, useEffect } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Rules from "../Pages/Rules/Rules";
import ScrollToTop from "./ScrollToTop";
import SignIn from "../Pages/Account/SignIn";
import SignUp from "../Pages/Account/SignUp";
import Profile from "../Pages/Account/Profile";
import man from "../images/man.svg";
import woman from "../images/woman.svg";
import person from "../images/person.svg";
import Cookies from "js-cookie";
import axios from "axios";

const App = () => {
  useEffect(() => {
    if (Cookies.get("email")) {
      let Signin = {
        email: Cookies.get("email"),
        password: Cookies.get("password"),
      };
      let email = { email: Cookies.get("email") };
      axios
        .post("http://localhost:4000/findcompany", email)
        .then(function (response) {
          console.log(response.data);
          setStocks([
            {
              c1: response.data.c1,
              s1: response.data.s1,
            },
            {
              c2: response.data.c2,
              s2: response.data.s2,
            },
            {
              c3: response.data.c3,
              s3: response.data.s3,
            },
            {
              c4: response.data.c4,
              s4: response.data.s4,
            },
            {
              c5: response.data.c5,
              s5: response.data.s5,
            },
            {
              c6: response.data.c6,
              s6: response.data.s6,
            },
            {
              c7: response.data.c7,
              s7: response.data.s7,
            },
            {
              c8: response.data.c8,
              s8: response.data.s8,
            },
            {
              c9: response.data.c9,
              s9: response.data.s9,
            },
            {
              c10: response.data.c10,
              s10: response.data.s10,
            },
          ]);
          console.log(stocks);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .post("http://localhost:4000/login", Signin)
        .then(function (response) {
          if (response.data.status) {
            console.log(response.data);

            setUser({
              fname: response.data.fname,
              lname: response.data.lname,
              email: response.data.email,
              password: response.data.password,
              gender: response.data.gender,
              img:
                response.data.gender === "M"
                  ? man
                  : response.data.gender === "F"
                  ? woman
                  : person,
              about: response.data.about,
            });
          } else {
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);
  const [render, setRender] = useState(1);
  const [stocks, setStocks] = useState([
    {
      c1: "",
      s1: "",
    },
    {
      c2: "",
      s2: "",
    },
    {
      c3: "",
      s3: "",
    },
    {
      c4: "",
      s4: "",
    },
    {
      c5: "",
      s5: "",
    },
    {
      c6: "",
      s6: "",
    },
    {
      c7: "",
      s7: "",
    },
    {
      c8: "",
      s8: "",
    },
    {
      c9: "",
      s9: "",
    },
    {
      c10: "",
      s10: "",
    },
  ]);
  const [accountExist, setAccountExist] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
    img: person,
    about: "",
  });
  const handleRender = (link) => {
    setRender(link + 1);
    setUser(() => {
      return {
        ...user,
        img:
          user.img !== person && user.img !== man && user.img !== woman
            ? user.img
            : user.gender === "M"
            ? man
            : user.gender === "F"
            ? woman
            : person,
      };
    });
  };
  const handleChangeStocks = (e) => {
    setStocks(e);
  };
  const [showScrollButton, setshowScrollButton] = useState(false);
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) setshowScrollButton(true);
    else setshowScrollButton(false);
  };
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const handleSignIn = (a) => {
    console.log(a);
    setAccountExist(true);
    setLoggedIn(true);
  };
  const handleSignUp = (a) => {
    console.log(a);
    setUser({
      fname: a.fname,
      lname: a.lname,
      email: a.email,
      password: a.password,
      gender: a.gender,
      img:
        user.img !== person && user.img !== man && user.img !== woman
          ? user.img
          : a.gender === "M"
          ? man
          : a.gender === "F"
          ? woman
          : person,
    });
    setLoggedIn(a.logInState);
    setAccountExist(a.logInState);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
    setAccountExist(true);
    setUser({
      fname: "",
      lname: "",
      email: "",
      password: "",
      gender: "",
      img: person,
      about: "",
    });
  };
  const handleAbout = (a) => {
    console.log(a);
    setUser({
      ...user,
      about: a,
    });
  };
  return (
    <>
      {render === 1 && (
        <>
          <Hero GoTo={handleRender} />
          <About />
        </>
      )}
      {render === 3 && (
        <>
          <Header
            GoToLink={handleRender}
            style={{ background: "var(--primary)" }}
            home={false}
          />
          <main>
            <Rules GoTo={handleRender} />
          </main>
        </>
      )}
      {render === 4 && (
        <>
          <Header
            GoToLink={handleRender}
            style={{ background: "var(--primary)" }}
            home={false}
          />
          <main>
            <Portfolio
              user={user}
              GoTo={handleRender}
              stocks={stocks}
              submit={handleChangeStocks}
            />
          </main>
        </>
      )}
      {render === 5 && (
        <>
          <Header
            GoToLink={handleRender}
            style={{ background: "var(--primary)" }}
            home={false}
          />
          <main>
            <div className="account-heading">
              <div className="account-heading__back">
                <button
                  className="btn account-heading__back__button"
                  onClick={() => {
                    handleRender(0);
                  }}
                >
                  <span className="material-icons">arrow_back</span>
                </button>
              </div>
              <div className="account-heading__text">Your Account</div>
            </div>
            {accountExist ? (
              loggedIn ? (
                <Profile
                  user={user}
                  LogOut={() => {
                    handleLogOut();
                  }}
                  submit={handleAbout}
                />
              ) : (
                <SignIn
                  sign={() => {
                    setAccountExist(false);
                  }}
                  submit={handleSignIn}
                />
              )
            ) : (
              <SignUp
                sign={() => {
                  setAccountExist(true);
                }}
                submit={handleSignUp}
              />
            )}
          </main>
        </>
      )}
      {showScrollButton && <ScrollToTop onClick={topFunction} />}
      <Footer GoTo={handleRender} />
    </>
  );
};

export default App;
