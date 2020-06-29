import React, { Component } from 'react';
import './ComingSoon.scss';
import {Link} from "react-router-dom";

class ComingSoon extends Component {
    render() {
        return (
            <main className="Chat">
                <header className="ChatHeader">
                    <h1>Welcome</h1>
                </header>

                <body className="body">
                    <h1>Coming Soon...</h1>
                    <Link to="/" className="link">Back to Home</Link>
                </body>
            </main>
        );
    }
}

export default ComingSoon;
