import React, {Component} from "react"
import{Link} from "react-router-dom"

import { Button, Form, FormGroup, Label, Container,Card,Navbar,NavbarBrand,Row,Col} from 'reactstrap';
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
            <div>
              <Navbar className="nav" color="dark" light>
             <NavbarBrand href="/" className="text-white" ></NavbarBrand>
             <Button  className='addMed'color="primary" tag={Link} to="/noteViewer">back</Button>
             </Navbar>
       
            <Container>
          
               
             <Form onSubmit={this._onSubmit}>
             <Card>
             <Row sm={2}>
                <FormGroup>
                <Col >      
        <Label for="title">
            <h4>Title</h4>
            </Label>
        
        <textarea className="textNotes" onChange={this._onChange} value={this.state.title} name="title" id="" cols="132" rows="1"></textarea>
        </Col>
        </FormGroup>
        </Row>
        </Card>
        <Card>
        <Row>
        <FormGroup>
        <Col>
        <Label for="Notes">
        <h4>Notes</h4>
        </Label>
        
        <textarea className="textNotes" onChange={this._onChange} value={this.state.content} name="content" id="" cols="132" rows="20"></textarea>
        </Col>
        </FormGroup>
        </Row>
        <Button>Submit</Button>
        </Card>
    </Form>
    
    </Container>
    </div>
        )
    }
}
export default Notes;