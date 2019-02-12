import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Register extends Component {

  state = {
    name:"",
    username: "",
    password: "",
    email:""
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
      <Form onSubmit={this._onSubmit}>
        Register
        <FormGroup>
          <Label for="username">Username</Label>
          <Input onChange={this._onChange} value={this.state.username} type="text" name="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="name">name</Label>
          <Input onChange={this._onChange} value={this.state.name} type="text" name="name" placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input onChange={this._onChange} value={this.state.email} type="text" name="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input onChange={this._onChange} value={this.state.password} type="password" name="password" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default Register