import React, { useState, useContext } from "react";
import man from "../../images/man.svg";
import woman from "../../images/man.svg";
import axios from "axios";
import Cookies from "js-cookie";
import SnackBar from "../../components/Snackbar"
import { Context } from "../../Context/Context";
const companySuggestions = [
  "Google",
  "Microsoft",
  "Facebook",
  "Apple",
  "Amazon",
  "Netflix",
  "Tesla",
];
const StockInput = ({ index, companyValue, volumeValue, onChange }) => {
  const { user, dispatch } = useContext(Context);
  return (
    <tr key={index} className="table-tr">
      <td className="table-td table-td-company">
        <input
          disabled
          className="table-td-company__input"
          type="text"
          placeholder="Company Name"
          list="typeSuggestions"
          name={`c${index + 1}`}
          value={companyValue}
          onChange={onChange}
        />
       
      </td>
      <td className="table-td table-td-volume">
        <input
          className="table-td-volume__input"
          type="number"
          min="1"
          placeholder="Volume"
          name={`s${index + 1}`}
          value={volumeValue}
          onChange={onChange}
        />
      </td>
    </tr>
  );
};

const Portfolio = ({ GoTo, stocks, submit, load }) => {
  const [show, setShow] = useState(false);
  const { user, dispatch } = useContext(Context);
  const [allStocks, setAllStocks] = useState([
    {
      c1: user.c1,
      s1: user.s1,
    },
    {
      c2: user.c2,
      s2: user.s2,
    },
    {
      c3: user.c3,
      s3: user.s3,
    },
    {
      c4: user.c4,
      s4: user.s4,
    },
    {
      c5: user.c5,
      s5: user.s5,
    },
    {
      c6: user.c6,
      s6: user.s6,
    },
    {
      c7: user.c7,
      s7: user.s7,
    },
    {
      c8: user.c8,
      s8: user.s8,
    },
    {
      c9: user.c9,
      s9: user.s9,
    },
    {
      c10: user.c10,
      s10: user.s10,
    },
  ]);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const changeStocks = [...allStocks];
    changeStocks[id] = {
      ...changeStocks[id],
      [name]: value,
    };
    setAllStocks(changeStocks);
  };
  const submitStocks = (e) => {
    e.preventDefault();
    let userData = {
      email: user.email,
      stocks: allStocks,
    };
    console.log(userData);
    axios
      .post("/company", userData)
      .then((res) => {
        load();
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2500);
  };
  return (
    <section className="portfolio" id="about">
      <div className="portfolio-heading">
        <div className="portfolio-heading__back">
          <button
            className="btn portfolio-heading__back__button"
            onClick={() => {
              GoTo(0);
            }}
          >
            <span className="material-icons">arrow_back</span>
          </button>
        </div>
        <div className="portfolio-heading__text">Your Portfolio</div>
      </div>
      <div className="portfolio-user" data-aos="fade-up">
        <div className="portfolio-user-image">
          <img
            className="portfolio-user-image__img"
            src={user.gender === "M" ? man : woman}
            alt="User Profile"
            onClick={() => {
              console.log(stocks, allStocks);
            }}
          />
        </div>
        <div className="portfolio-user-content">
          <div className="portfolio-user-content__name">
            <span>
              {user.fname !== ""
                ? `${user.fname} ${user.lname}`
                : "Your Name Here"}
            </span>
          </div>
          <div className="portfolio-user-content__about">
            <span>{user.about !== "" ? user.about : "About Me"}</span>
          </div>
        </div>
      </div>
      <div className="portfolio-content" data-aos="fade-up">
        <form className="portfolio-form" onSubmit={submitStocks}>
          <table className="table">
            <tr className="table-tr">
              <th className="table-th">Company Name</th>
              <th className="table-th">Shares issued</th>
            </tr>
            {/* {allStocks.map((stock, index) => {
              return (
                <tr key={index} className="table-tr">
                  <td className="table-td table-td-company">
                    <input
                      className="table-td-company__input"
                      type="text"
                      placeholder="Company Name"
                      list="typeSuggestions"
                      name={`c${index + 1}`}
                      value={stock.c1}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    />
                    <datalist id="typeSuggestions">
                      {companySuggestions.map((companySuggestion, index) => (
                        <option value={companySuggestion} key={index} />
                      ))}
                    </datalist>
                  </td>
                  <td className="table-td table-td-volume">
                    <input
                      className="table-td-volume__input"
                      type="number"
                      min="1"
                      placeholder="Volume"
                      name={`s${index + 1}`}
                      value={stock.s1}
                      onChange={(e) => {
                        handleChange(e, index);
                      }}
                    />
                  </td>
                </tr>
              );
            })} */}
            <StockInput
              index={0}
              companyValue={allStocks[0].c1}
              volumeValue={allStocks[0].s1}
              onChange={(e) => {
                handleChange(e, 0);
              }}
            />
            <StockInput
              index={1}
              companyValue={allStocks[1].c2}
              volumeValue={allStocks[1].s2}
              onChange={(e) => {
                handleChange(e, 1);
              }}
            />
            <StockInput
              index={2}
              companyValue={allStocks[2].c3}
              volumeValue={allStocks[2].s3}
              onChange={(e) => {
                handleChange(e, 2);
              }}
            />
            <StockInput
              index={3}
              companyValue={allStocks[3].c4}
              volumeValue={allStocks[3].s4}
              onChange={(e) => {
                handleChange(e, 3);
              }}
            />
            <StockInput
              index={4}
              companyValue={allStocks[4].c5}
              volumeValue={allStocks[4].s5}
              onChange={(e) => {
                handleChange(e, 4);
              }}
            />
            <StockInput
              index={5}
              companyValue={allStocks[5].c6}
              volumeValue={allStocks[5].s6}
              onChange={(e) => {
                handleChange(e, 5);
              }}
            />
            <StockInput
              index={6}
              companyValue={allStocks[6].c7}
              volumeValue={allStocks[6].s7}
              onChange={(e) => {
                handleChange(e, 6);
              }}
            />
            <StockInput
              index={7}
              companyValue={allStocks[7].c8}
              volumeValue={allStocks[7].s8}
              onChange={(e) => {
                handleChange(e, 7);
              }}
            />
            <StockInput
              index={8}
              companyValue={allStocks[8].c9}
              volumeValue={allStocks[8].s9}
              onChange={(e) => {
                handleChange(e, 8);
              }}
            />
            <StockInput
              index={9}
              companyValue={allStocks[9].c10}
              volumeValue={allStocks[9].s10}
              onChange={(e) => {
                handleChange(e, 9);
              }}
            />
            <tr className="portfolio-form-button table-tr">
              <td
                className="portfolio-form-button__save table-td"
                colSpan="2"
                style={{ width: "20%", padding: 0 }}
              >
                
              </td>
            </tr>
          </table>
        </form>
      </div>
      {show && <SnackBar text="Response Submitted" delayTime={2500} />}
    </section>
  );
};

export default Portfolio;
