import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Chat from '../Chat/Chat';
import ComingSoon from '../comingSoon/ComingSoon'
import './Welcome.scss';
import ChatHeader from "../Chat/ChatHeader/ChatHeader";
import ChatBox from "../Chat/ChatBox/ChatBox";
import ChatInput from "../Chat/ChatInput/ChatInput";
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
                            <Link to="/chat">客服</Link>
                        </li>
                        <li>
                            <Link to="/activity">6.18活动</Link>
                        </li>
                        <li>
                            <Link to="/about">关于我们</Link>
                        </li>
                    </ul>
                </footer>
            </main>
        );
    }
}

export default Welcome;
