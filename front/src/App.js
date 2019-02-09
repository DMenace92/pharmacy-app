import React, { Component } from 'react';
import NavBar from './Component/NavBar'
import Login from './Component/Login'
import SearchBar from './Component/SearchBar'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    Users: [],
    med: [],
    filterMeds:''
  }

  medapi = (id) => {
    axios.patch('https://datadiscovery.nlm.nih.gov/profile/Dennis/x74w-6hq2/app_tokens?apikey=7UDwuqDVIg7rRaz6HbG9QSbL8')
      .then(response => {
        let updatedmed = response.data
        let othermed = this.state.med.filter(med => med.id !== id)
        this.setState({
          
          med: [...othermed, updatedmed]
          
        })
       
      })
  }
  
  // async componentDidMount (){
  //   const res = await fetch('https://datadiscovery.nlm.nih.gov/profile/Dennis/x74w-6hq2/app_tokens?apikey=7UDwuqDVIg7rRaz6HbG9QSbL8')
  //   const json = await res.json()
    
  //   this.setState({meds: json.data.results})
    
  //   this.getUser()
  //   console.log(json)
  // }
  // async getUser(){
  //   const res = await fetch('http://localhost:8000/')
  //   const json = await res.json()
  //   this.setState({user: json})
  //   console.log(json)
   
  // }


  MedSearch = (e) => {
    this.setState ({
      filterMeds: e.target.value
      
    })
    
   }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Login />
        <SearchBar />
      </div>
    );
  }
}

export default App;
