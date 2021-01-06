import React from 'react';
import './Body.css';

const Body = () => {
    return (
        <div className="container mt2 pa5">
            <div className="box">
                <h3 className="ph5 pv4 f1 lh-title ma0">More than just shorter links</h3>

                <h4 className="ph5 pv2">Build your brand’s recognition and get detailed insights 
                on how your links are performing.</h4>

                <button className="B1">Get Started</button>
            </div>
            <img src={require("C:/Users/abhis/OneDrive/Desktop/insure/api-calling/src/component/Body/illustration-working.svg")} width="550px" height="350px" alt=""/> 
        </div>
    )
}

export default Body;