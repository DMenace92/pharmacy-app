import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends Component{
    state = {
        email: "",
        password: ""
    }
    
    _onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(this.props);
        this.props.login(this.state);
        this.setState({email: "", password: ""})
    }
    
    _onChange = ({target}) =>  {
        this.setState({[target.name]: target.value})
    }
    
    render(){
        return(
    <Form onSubmit={this._onSubmit}>
        <FormGroup>
        <Label for="email">Email</Label>
        <Input onChange={this._onChange} value={this.state.email} type="text" name="email" placeholder="Email" />
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
export default Login