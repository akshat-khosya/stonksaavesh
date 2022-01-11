import React from 'react'
import gold from '../images/gold.svg'
import silver from '../images/silver.svg'
import bronze from '../images/bronze.svg'

const About = () => {
    return (
        <main className="about" id="about">
            <div className="about-card">
                <div className="about-card-heading">What is Stock Market</div>
                <div className="about-card-text">
                   A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately, such as shares of private companies which are sold to investors through equity crowdfunding platforms. Investment in the stock market is most often done via stockbrokerages and electronic trading platforms. Investment is usually made with an investment strategy in mind.  
                </div>
            </div>
            <div className="about-card">
                <div className="about-card-heading">About Stonks</div>
                <div className="about-card-text">
                   Ever thought of investing in the stock market but never tried
                    because of no experience? If so, we have brought this event
                    for you, where you can pick stocks and create your very own
                    portfolio with the virtual money we provide you. Compete
                    among other minds and create the best portfolio which
                    provides the maximum return and wins the prize money.
                    In our event, we will provide you a platform to invest in some
                    NSE stocks and create your portfolio which will be analyzed
                    by us.
                    We will be searching for the best portfolio with the maximum
                    return.
                </div>
            </div>
            <div className="about-card">
                <div className="about-card-heading">Prizes</div>
                <div className="about-card-content">
                    <div className="row">
                        <div className="col-lg-100 col-md-100 col-sm-100">
                            <div className="about-card-prize-image">
                                <img src={gold} alt="Gold" className="about-card-prize-image__img" />
                            </div>
                        </div>
                        <div className="col-lg-50 col-md-50 col-sm-50">
                            <div className="about-card-prize-image">
                                <img src={silver} alt="Silver" className="about-card-prize-image__img" />
                            </div>
                        </div>
                        <div className="col-lg-50 col-md-50 col-sm-50">
                            <div className="about-card-prize-image">
                                <img src={bronze} alt="Bronze" className="about-card-prize-image__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
