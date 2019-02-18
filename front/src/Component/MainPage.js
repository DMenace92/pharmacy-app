import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Container,Card,Button,Row,Col,Navbar,NavbarBrand, Modal, ModalHeader, ModalBody, ModalFooter,Calendar} from 'reactstrap';
import "../App.css"


class MainPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: false
  //   };

  //   this.toggle = this.toggle.bind(this);
  // }

  // toggle() {
  //   this.setState(prevState => ({
  //     modal: !prevState.modal
  //   }));
  // }
 
componentDidMount(){
  this.props.fetchMeds()
}

  render() {
    console.log(this.props.medInfo)
    return ( 
      
      <div>
  <Navbar className="nav" color="dark" light>
  <NavbarBrand href="/" className="text-white" ></NavbarBrand>
  {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        {/* <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Calendar date={moment("23/10/2015", "DD/MM/YYYY")} onSelect={this.onSelect} />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
  
   <Button  className='addMed'color="primary" tag={Link} to="/medinfo">Add a Med</Button>
   
   </Navbar>
        <Container className="theContainer">
          {/* <SearchBar meds={this.props.medlist}/> */} 
          
        { this.props.medInfo && this.props.medInfo.map( med => <Card className="card">
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
          <Button onSubmit={this._onSubmit} color="danger">Delete</Button>
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