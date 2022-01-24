import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import SPA from './containers'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
{//          <p className="App-intro">
//            To get started, edit <code>src/App.js</code> and save to reload.
//          </p>
    }
          <SPA />
        </div>
      </Provider>
    );
  }
}

export default App;
