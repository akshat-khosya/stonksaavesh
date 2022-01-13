import React from "react";
import Rule from "./Rule";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const rules = [
    "Participants should have basic knowledge of Investment and Stock Market.",
    "Participants should have knowledge on how to make portfolios.",
    "Participants can only include the companies that are listed in NSE.",
    "The initial price considered of the stock would be the closing price on the day before the submission day i.e., Friday the 19th November (tentatively)",
    "Shares of minimum one company must be added in the portfolio.",
    "Shares of maximum 10 different companies can be added in the portfolio.",
    "Participants can use any source to know the best required.",
    "Only the profit or loss earned from the principle of Rs. 5 Lakh will be taken into account.",
    "If the limit exceeds, the last added stock would be excluded from the portfolio, and so on until the total investment is under 5 lakh INR ",
    "Minimum volume of share bought must be 50k.",
    "If a particular company (whose shares are bought) announces bonus shares or dividends in the notice period then its profit will also be considered. ",
  ];
  const navigate = useNavigate();
  return (
    <section className="rules" id="about">
      <div className="rules-heading">
        <div className="rules-heading__back">
          <button
            className="btn rules-heading__back__button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <span className="material-icons">arrow_back</span>
          </button>
        </div>
        <div className="rules-heading__text">Rules for the event</div>
      </div>
      <div className="rules-box">
        <div
          className="rules-bar"
          style={{ height: `${rules.length * 10}rem` }}
        ></div>
        <div className="rules-container">
          {rules.map((rule, index) => (
            <Rule title={`Rule ${index + 1}`} content={rule} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
