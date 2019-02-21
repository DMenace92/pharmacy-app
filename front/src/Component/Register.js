import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Link} from 'react-router-dom';

class Register extends Component {

  state = {
    name:"",
    username: "",
    password: "",
    email:"",
    modal : true
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
    this.setState({username: "", password: "",name:"",email:""})
  }

  _onChange = ({target}) =>  {
    this.setState({[target.name]: target.value})
  }

  render() {
    
    return (
       <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>

          <Form onSubmit={this._onSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input onChange={this._onChange} value={this.state.username} type="text" name="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input onChange={this._onChange} value={this.state.name} type="text" name="name" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input onChange={this._onChange} value={this.state.email} type="Email" name="email"  />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input onChange={this._onChange} value={this.state.password} type="password" name="password" placeholder="Password" />
        </FormGroup>
        <Button color="primary">Submit</Button>
        
      </Form>
          
          </ModalBody>
          <Button tag={Link} to="/"color="secondary" >Cancel</Button>
         
        </Modal>
      
    )
  }
}

export default Register