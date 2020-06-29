import React, { Component } from 'react';
import './ChatHeader.scss';
import { Link } from "react-router-dom";
import shopData from '../../data/shop.json';

class ChatHeader extends Component {
  render() {
    const { shop } = this.props;
    const logoStyle = {
      backgroundImage: `url(${shop.logo})`,
    };
    return (
      <header className="ChatHeader">
        <Link to="/" className="link"><img src={shopData.back} /></Link>
        <div className="logo" style={logoStyle} />
        <h1>{shop.name}</h1>
      </header>
    );
  }
}

export default ChatHeader;
