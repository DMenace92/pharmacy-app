import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Container,Card,Button,Row,Col,Navbar,NavbarBrand} from 'reactstrap';
import "../App.css"


class MainPage extends Component {
componentDidMount(){
  this.props.fetchMeds()
  // this.props.deleteMeds()
  
}
  deleteMeds(_id)  {
    this.props.deleteMeds(_id)
  
  }
  render() {
   
   
    return ( 
      
      <div className="divSize">
  <Navbar className="nav" color="dark" light>
    
  <NavbarBrand href="/" className="text-white" ></NavbarBrand>
  
          <Button onClick={() => this.props.logout(this.props.user)} color="primary" tag={Link} to="/">sign out</Button>
    </Navbar>

        <Container className="theContainer">
        
          
        { this.props.medInfo && this.props.medInfo.map( med => <Card key ={med._id}className="card">
        {/* {console.log(med._id)} */}
          <Row sm={3}>
          <Col sm={6}>
          <h4>Medication: {med.medication}</h4>
          </Col>
          
          <Col sm={3}>
          <h4>Quantity: {med.quantity}</h4>
          </Col>
          <Col sm={3}>
          <h6>Date Written: {med.dateWritten}</h6>
          </Col>
          
          </Row>
          <Row sm={3}>
          <Col sm={12}>
          <h4>Directions: {med.directions}</h4>
          </Col>
          </Row>
          <Row sm={3}>
          <Col sm={3}>
          <h6>Refills: {med.refills}</h6>
          </Col>
          
          
          <Col sm={4}>
          <h6>Expired: {med.expired}</h6>
          </Col>
          
          <Col sm={3}>
          <h6>Day Supply: {med.daySupply}</h6>
          </Col>
          
          <Col sm={3}>
          <h6>Doctor: {med.doctor}</h6>
          </Col>
          
          </Row>
          <Row lg={12}>
         
          <Col md={0}>
        

          <Button onClick={() => this.props.deleteMeds(med._id)} color="danger">Delete</Button>
          </Col>
          <Col md={2}>
          <Button  className="editMainButton"onClick={() => this.props.deleteMeds(med._id)} color="primary">Edit</Button>
          
          </Col>
          
          </Row>
        </Card>)}
       
        </Container> 
        
        <Row>
        </Row>
        <Navbar className="nav" color="dark" light>
  <NavbarBrand href="/" className="text-white" ></NavbarBrand>
        {/* <Button  className='signOut'color="primary" tag={Link} to="/">sign out</Button> */}
  
        <Button  color="primary" tag={Link} to="/medinfo">Add a Med</Button>
       
          <Button color="primary" tag={Link} to="/NoteViewer">View Notes</Button>
         
          
    </Navbar>
      </div>
    )
  }
}

export default MainPage