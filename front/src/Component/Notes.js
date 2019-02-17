import React, {Component} from "react"
import{Link} from "react-router-dom"

import { Button, Form, FormGroup, Label, Container,Card} from 'reactstrap';
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
            <Container>
                <Card>
             <Form onSubmit={this._onSubmit}>
                <FormGroup>
        <Label for="title"></Label>
        <textarea onChange={this._onChange} value={this.state.title} name="title" id="" cols="30" rows="1"></textarea>
      
        </FormGroup>
        <FormGroup>
        <Label for="Notes"></Label>
        <textarea onChange={this._onChange} value={this.state.content} name="content" id="" cols="30" rows="7"></textarea>
        </FormGroup>
        <Button>Submit</Button>
    </Form>
    </Card>
    <Button color="primary" tag={Link} to="/noteViewer">Back</Button>
    </Container>
        )
    }
}
export default Notes;