import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <ul className="unorder mt3">
            <li className="nav">Features</li>
            <li className="nav">Pricing</li>
            <li className="nav">Resources</li>
            <li className="nav2"><button>Sign Up</button></li>
            <li className="nav2">Login</li>
        </ul> 
    )
}

export default Navigation;