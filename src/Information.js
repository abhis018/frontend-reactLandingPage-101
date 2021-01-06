import React from 'react';
import './Information.css';

const Information = () => {
    return (
        <div>
            <h1 className="center">Advanced Statistics</h1>
            <p className="center">Track how your links are performing across the web with our 
                advanced statistics dashboard.
            </p>
            <div className="flex mh6 mv5">
                <div className="boxes mr4">
                    <h4>Brand Recognition</h4>

                    <p>Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="boxes mv5 mr4">
                    <h4>Detailed Records</h4>

                    <p>Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.</p>
                </div>
                <div className="boxes mv6">
                    <h4>Fully Customizable</h4>

                    <p>Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    )
}
export default Information;