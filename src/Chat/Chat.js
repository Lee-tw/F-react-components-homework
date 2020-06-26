import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
      sentMessage: '',
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  onSubmit = () => {
    if (this.state.sentMessage.length > 0) {
      const userMessage = { text: this.state.sentMessage, role: ROLE.CUSTOMER };
      const pushedMessages = this.state.messages.concat(userMessage);
      this.setState({messages: pushedMessages});
    }
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput
            onSubmit={this.onSubmit}
            onChange={event => this.setState({ sentMessage: event.target.value })}
            value={this.state.sentMessage}/>
      </main>
    );
  }
}

export default Chat;
