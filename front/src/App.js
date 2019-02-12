import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MainPageContainer from './containers/MainPageContainer';
import RegisterContainer from './containers/RegisterContainer';

import './App.css';

class App extends Component {
  render() {
    console.log(LoginContainer)
    return (
      <div className="App">
        <h1>hi</h1>
      
        
        <Switch>
        <Route path ="/MainPage" component={MainPageContainer} />
        <Route path="/Login" component={LoginContainer} />
        <Route path="/Register" component={RegisterContainer} />
      
        </Switch>
      </div>
    );
  }
}

export default App;
