import React, { Component } from 'react';
import NavBar from './Component/NavBar'
import Login from './Component/Login'
import SearchBar from './Component/SearchBar'
// import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    Users: [],
    med: [],
    filterMeds:''
  }

  // medapi = (id) => {
  //   axios.patch('https://datadiscovery.nlm.nih.gov/resource/crzr-uvwg.json')
  //     .then(response => {
  //       let updatedmed = response.data
  //       let othermed = this.state.med.filter(med => med.id !== id)
  //       this.setState({
          
  //         med: [...othermed, updatedmed]
          
  //       })
    
  //     })
  // }
  
  async componentDidMount (){
    const res = await fetch('https://datadiscovery.nlm.nih.gov/resource/crzr-uvwg.json')
    const json = await res.json()
    
    this.setState({meds: json})
    
    this.getUser()
    console.log(json)
  }
  async getUser(){
    const res = await fetch('http://localhost:8000/users')
    const json = await res.json()
    this.setState({json})
    console.log(json)
  
  }


  myMeds = (id) => {
    const SelectMeds = this.state.med.filter(meds => meds.id)
    console.log(SelectMeds)
    this.setState(prevState => {
      console.log(prevState)
    //   let CartItems = this.state.CartItem
    //   for(let i = 0; i < this.state.comic.length; i++){
    //     if(this.state.comic[i].id === id){
    //       CartItems.push(this.state.comic[i])
          
    //   }
    //   }
    // return {CartItems};
    })
}

  

  MedSearch = (e) => {
    this.setState ({
      filterMeds: e.target.value
      
    })
    
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <switch>
        <Login />
        <SearchBar />
        </switch>
      </div>
    );
  }
}

export default App;
