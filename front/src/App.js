import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MainPageContainer from './containers/MainPageContainer';
import RegisterContainer from './containers/RegisterContainer';
import NotesContainer from './containers/NotesContainer';
import LoginAndRegister from './Component/LoginAndRegister';
import MedInfoContainer from "./containers/MedInfoContainer";

import './App.css';

class App extends Component {

  render() {
    console.log(LoginContainer)
    return (
      <div className="App">
        
  
        
        <Switch>
        <Route path ="//" component={LoginAndRegister} />
        <Route path ="/medinfo" component = {MedInfoContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route exact path ="/main" component={MainPageContainer} />
        <Route exact path = "/notes" component= {NotesContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
