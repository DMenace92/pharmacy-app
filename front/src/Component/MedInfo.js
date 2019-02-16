import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container,Modal,ModalBody,ModalFooter,ModalHeader } from 'reactstrap';
import '../App.css';

class MedInfo extends Component{
    state = {
      userId: "",
      medication:"",
      quantity: "",
      doctor: "",
      dateWritten: "",
      expired:"",
      daySupply: "",
      refills: "",
      directions: "",
      modal: true
    };

    


  toggle = ()=>{
    this.setState(prevState => ({
      modal: !prevState.modal
      
    }));
    
  }
  _onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props);
    this.props.meds(this.state);
    this.props.history.push("/main")
    this.setState({medication: "", quantity: "", doctor:"",
    dateWritten:"", daySupply:"", refills:"",expired:"",directions:""})
}

_onChange = ({target}) =>  {
    this.setState({[target.name]: target.value})
}
  
  render(){
    return(
      <Container >
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Your med info</ModalHeader>
          <ModalBody>
          CII medication have a life spand of 90 days from the day it is writen, CIII - CIV 
          have a life spand of 6 months from the day it is writen, every other medication have 
          a life spand of 1 year 365 days from the day it is writen.
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      <Form onSubmit={this._onSubmit} >
        <FormGroup className = "medFormText">
          <Label for="Medication name">Medication name</Label>
          <Input onChange={this._onChange} value={this.state.medication}
          type="" name="medication" id="example" />
        </FormGroup>
        {/* <FormGroup className = "medFormText">
          <Label for="Medication name">Medication name</Label>
          <Input type="" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup> */}
        <FormGroup  className = "medFormText" >
          <Label for="Medication name">Quantity</Label>
          <Input onChange={this._onChange} value={this.state.quantity}
          type="" name="quantity" id="exampleQuantity" />
        </FormGroup>
        <FormGroup  className = "medFormText" >
          <Label for="Medication name">Day Supply</Label>
          <Input onChange={this._onChange} value={this.state.daySupply}
          type="" name="daySupply" id="exampleQuantity" />
        </FormGroup>
        <FormGroup className = "medFormText">
          <Label for="exampleDate">writen Date</Label>
          <Input onChange={this._onChange} value={this.state.dateWritten}
            type="date"
            name="dateWritten"
            id="exampleDate"
            placeholder="date placeholder"/>
        </FormGroup>
        <FormGroup className = "medFormText">
          <Label for="exampleDate">Expired Date</Label>        
          <Input onChange={this._onChange} value={this.state.expired}
            type="date"
            name="expired"
            id="exampleDate"
            placeholder="date placeholder"/>
        </FormGroup>
        <FormGroup className = "medFormText">
          <Label for="exampleSelect">refills remaining</Label>
          <Input onChange={this._onChange} value={this.state.refills}
          type="select" name="refills" id="exampleSelect">
          <option>None</option><option>1</option><option>2</option>
          <option>3</option><option>4</option><option>5</option>
          <option>6</option><option>7</option><option>8</option>
          <option>9</option><option>10</option><option>11</option>
          <option>12</option><option>Year Supply</option>
          </Input>
        </FormGroup>
        <FormGroup className = "medFormText">
          <Label for="Medication name">Doctor</Label>
          <Input onChange={this._onChange} value={this.state.doctor}
          type="" name="doctor" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup className = "medFormText">
          <Label for="exampleText">Directions</Label>
          <Input onChange={this._onChange} value={this.state.directions}
          type="textarea" name="directions" id="exampleText" />
        </FormGroup>
        
        <Button color="primary">Submit</Button>
      </Form>
      </Container>
    )
  }
}
export default MedInfo; 