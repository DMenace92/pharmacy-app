import React, {Component} from "react"
// import{Redirect} from "react-router-dom"

import { Button, Form, FormGroup, Label,} from 'reactstrap';
class Notes extends Component{

    state = {
        title: "",
        content: "",

    }
    
    _onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(this.props);
        this.props.notes(this.state);
        this.setState({titel:"",content:""})
    }
    
    _onChange = ({target}) =>  {
        this.setState({[target.name]: target.value})
    }
    
    render(){
        return(
    <Form onSubmit={this._onSubmit}>
        <FormGroup>
        <Label for="title">Title</Label>
        <textarea onChange={this._onChange} value={this.state.title} name="title" id="" cols="30" rows="1"></textarea>
      
        </FormGroup>
        <FormGroup>
        <Label for="Notes">Notes</Label>
        <textarea onChange={this._onChange} value={this.state.content} name="content" id="" cols="30" rows="7"></textarea>
        </FormGroup>
        <Button>Submit</Button>
    </Form>
        )
    }
}
export default Notes;