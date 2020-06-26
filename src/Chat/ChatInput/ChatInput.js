import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  render() {
    return (
      <footer className="ChatInput">
        <input type="text"
               onChange={this.props.onChange}
               value={this.props.sentMessage}/>

        <button type="button"
                onClick={this.props.onSubmit}>Send</button>
      </footer>
    );
  }
}

export default ChatInput;
