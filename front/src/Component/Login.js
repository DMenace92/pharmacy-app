import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
// import Register from "./Component/Register"
class Login extends Component{
    state = {
        email: "",
        password: "",
        username:"",
        name:"",
        modal : true
    }
    
    _onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(this.props);
        this.props.login(this.state);
        this.props.history.push("/main")
        this.setState({email: "", password: "", username:"", name:""})
    }
    
    _onChange = ({target}) =>  {
        this.setState({[target.name]: target.value})
    }
    
    render(){
        return(
    <div>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 700 }}
        toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>LogIn</ModalHeader>
        <ModalBody>

    <Form onSubmit={this._onSubmit}>
        <FormGroup>
        <Label for="email">Email</Label>
        <Input onChange={this._onChange} value={this.state.email} type="text" name="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
        <Label for="password">Password</Label>
        <Input onChange={this._onChange} value={this.state.password} type="password" name="password" placeholder="Password" />
        </FormGroup>
        <Row sm={12}>
        <Col sm={6}>
        <Button  color="primary">Submit</Button>
        </Col>
        <Col>
        <Button className ="lrbutton" color="primary" tag={Link} to="/register">Register</Button>
        </Col>
        </Row>
    </Form>
        </ModalBody>
        
        
        {/* <Button color="primary">Submit</Button> */}
        {/* <Button tag={Link} to="/"color="secondary" >Cancel</Button> */}
        
        </Modal>
    </div>
            

    
        )
    }
}
export default Login