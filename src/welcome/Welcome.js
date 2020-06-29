import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';
import shopData from '../data/shop.json';

class Welcome extends Component {
    render() {
        const logoStyle = {
            backgroundImage: `url(${shopData.logo})`,
        };
        return (
            <main className="Chat">
                <header className="ChatHeader">
                    <h1>Welcome</h1>
                </header>

                <body className="body">
                    <div className="logo" style={logoStyle} />
                    <h1>starbucks星巴克</h1>
                </body>

                <footer className="footer">
                    <ul>
                        <li>
                            <Link to="/chat" className="link">客服</Link>
                        </li>
                        <li>
                            <Link to="/activity" className="link">6.18活动</Link>
                        </li>
                        <li>
                            <Link to="/about" className="link">关于我们</Link>
                        </li>
                    </ul>
                </footer>
            </main>
        );
    }
}

export default Welcome;
