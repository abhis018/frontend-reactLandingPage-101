import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="list">
            <ul className="column1">
                <h4>Features</h4>
                <li className="pv1">Link Shortening</li>
                <li className="pv1">Branded Links</li>
                <li className="pv1 mb4">Analytics</li>
            </ul>
            <ul className="column2">
                <h4>Resources</h4>
                <li className="pv1">Blog</li>
                <li className="pv1">Developers</li>
                <li className="pv1 mb4">Support</li>
            </ul>
            <ul className="column3">
                <h4>Company</h4>
                <li className="pv1">About</li>
                <li className="pv1">Our Team</li>
                <li className="pv1">Careers</li>
                <li className="pv1 mb4">Contact</li>
            </ul> 
        </div>
    )
}

export default Footer;