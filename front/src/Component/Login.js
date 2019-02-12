import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends Component{
    state = {
        Email: "",
        password: ""
    }
    
    _onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({username: "", password: ""})
    }
    
    _onChange = ({target}) =>  {
        this.setState({[target.name]: target.value})
    }
    
    render(){
        return(
    <Form onSubmit={this._onSubmit}>
        <FormGroup>
        <Label for="Email">Email</Label>
        <Input onChange={this._onChange} value={this.state.Email} type="text" name="Email" placeholder="Email" />
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