import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="list">
            <ul className="column1">
                Features

                <li >Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul className="column2">
                Resources

                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <ul className="column3">
                Company

                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul> 
        </div>
    )
}

export default Footer;