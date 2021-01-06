import React from 'react';
import './Body.css';

const Body = () => {
    return (
        <div className="container">
            <div className="box">
                <h1 className="ph6 pv5 f1 lh-title">More than just shorter links</h1>

                <h4 className="ph6 ma1">Build your brand’s recognition and get detailed<br/>insights 
                on how your links are performing.</h4>

                <button className="B1">Get Started</button>
            </div>
            <img src={require("C:/Users/abhis/OneDrive/Desktop/insure/api-calling/src/illustration-working.svg")} width="550px" height="350px" alt=""/> 
        </div>
    )
}

export default Body;