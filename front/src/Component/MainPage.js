import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Container,Card,Button,Row,Col} from 'reactstrap';
import "../App.css"


class MainPage extends Component {
 
componentDidMount(){
  this.props.fetchMeds()
}

  render() {
    console.log(this.props.medInfo)
    return ( 
      <div>
        <Container className="theContainer">
          {/* <SearchBar meds={this.props.medlist}/> */} 
          
        { this.props.medInfo && this.props.medInfo.map( med => <Card className="card">
          <h6>Medication: {med.medication}</h6>
          <h6>Quontity: {med.quantity}</h6>
          <h6>Directions: {med.directions}</h6>
          <h6>Refills: {med.refills}</h6>
          <h6>Date Written: {med.dateWritten}</h6>
          <h6>Expired: {med.expired}</h6>
          <h6>Day Supply: {med.daySupply}</h6>
          <h6>Doctor: {med.doctor}</h6>
          <Button >View Notes</Button>
          <Button onSubmit={this._onSubmit} color="danger">Delete</Button>
        </Card>)}
        
        
        </Container> 
        <Row>
      

        {/* <Button  className='addMed'color="primary" tag={Link} to="/medinfo">Add a Med</Button>
         */}
        </Row>
      </div>
    )
  }
}

export default MainPage