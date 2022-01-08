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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in augue at est egestas cursus eu condimentum est. Donec auctor et diam nec porttitor. Nunc pulvinar lorem a tellus dictum, eget tempor sapien posuere. In sit amet orci quis ligula pellentesque faucibus.
                </div>
            </div>
            <div className="about-card">
                <div className="about-card-heading">About Stonks</div>
                <div className="about-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in augue at est egestas cursus eu condimentum est. Donec auctor et diam nec porttitor. Nunc pulvinar lorem a tellus dictum, eget tempor sapien posuere. In sit amet orci quis ligula pellentesque faucibus.
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
