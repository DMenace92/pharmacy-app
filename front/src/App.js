import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import MainPageContainer from './containers/MainPageContainer';
import RegisterContainer from './containers/RegisterContainer';
import NotesContainer from './containers/NotesContainer';
import MedInfoContainer from "./containers/MedInfoContainer";
import NoteViewerContainer from "./containers/NoteViewerContainer"
import NavBar from "./Component/NavBar"
import EditFormContainer from './containers/EditFormContainer'
import DropDownbutton from './Component/Buttons/DropDownButton'
import './App.css';


class App extends Component {

  render() {
    
    return (
      <div className="App">
        
      <NavBar />
     
        
        <Switch>
        <Route path="//" component={LoginContainer} />
      
       
        <Route path ="/medinfo" component = {MedInfoContainer} />
        
        <Route path="/register" component={RegisterContainer} />
        <Route exact path ="/main" component={MainPageContainer} />
        <Route exact path = "/notes" component= {NotesContainer} />
        <Route path = "/noteViewer" component= {NoteViewerContainer} />
        <Route exact path= "/editform/:id"  component = {EditFormContainer}/>
        </Switch>
        <DropDownbutton />
      </div>
    );
  }
}

export default App;
