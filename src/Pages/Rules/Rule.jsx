import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rule = ({ title, content }) => {
    AOS.init();
    return (
        <div className="rule" data-aos="fade-up">
            <div className="rule-frame">
                <div className="rule-box">
                    <div className="rule-title">{title}</div>
                    <div className="rule-content">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rule
