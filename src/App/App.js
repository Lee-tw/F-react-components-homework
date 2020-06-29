import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from '../welcome/Welcome'
import Chat from "../Chat/Chat";
import ComingSoon from "../comingSoon/ComingSoon";

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <BrowserRouter>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/activity">
            <ComingSoon />
          </Route>
          <Route path="/about">
            <ComingSoon />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
