import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MainPageContainer from './containers/MainPageContainer';
import RegisterContainer from './containers/RegisterContainer';
import NotesContainer from './containers/NotesContainer';

import './App.css';
// import Notes from './Component/Notes';

class App extends Component {
  render() {
    console.log(LoginContainer)
    return (
      <div className="App">
        
      
        
        <Switch>
      
        <Route path="/login" component={LoginContainer} />
        <Route path="/Register" component={RegisterContainer} />
        <Route exact path ="/MainPage" component={MainPageContainer} />
        <Route exact path = "/Notes" component= {NotesContainer} />
       
      
        </Switch>
      </div>
    );
  }
}

export default App;
