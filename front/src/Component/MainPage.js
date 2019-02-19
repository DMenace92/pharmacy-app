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
      
      <div>
  <Navbar className="nav" color="dark" light>
  <NavbarBrand href="/" className="text-white" ></NavbarBrand>
        <Button  className='sign out'color="primary" tag={Link} to="/">sign out</Button>
  
        <Button  className='addMed'color="primary" tag={Link} to="/medinfo">Add a Med</Button>

    </Navbar>
        <Container className="theContainer">
          
        { this.props.medInfo && this.props.medInfo.map( med => <Card key ={med._id}className="card">
        {/* {console.log(med._id)} */}
          <Row sm={3}>
          <Col sm={3}>
          <h4>Medication: {med.medication}</h4>
          </Col>
          <br/>
          <Col sm={3}>
          <h4>Quontity: {med.quantity}</h4>
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
          
          
          <Col sm={3}>
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
          <Col md={6}>
          <Button color="primary" tag={Link} to="/NoteViewer">View Notes</Button>
          </Col>
          <Col md={0}>
          {/* <Button onClick={() => this.props.deleteMeds(med.id)} color="danger">Delete</Button> */}

          <Button onClick={() => this.props.deleteMeds(med._id)} color="danger">Delete</Button>

          </Col>
          </Row>
        </Card>)}
        </Container> 
        
        <Row>
        </Row>
      </div>
    )
  }
}

export default MainPage