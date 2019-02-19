import React, {Component} from "react"
import {Button,Container,Card,Navbar, NavbarBrand,Col,Row} from "reactstrap"

import { Link
} from 'react-router-dom'
import "../App.css"
class NoteViewer extends Component{
  componentDidMount(){
    this.props.fetchNotes()
  }
  deleteNotes(_id){
    this.props.deleteNotes(_id)
  }
  render(){
    return(
      <div>
      <Navbar className="nav" color="dark" light>
      <NavbarBrand href="/" className="text-white" ></NavbarBrand>
      <Row sm={1}>
      <Col sm={2}>
          <Button color="primary" tag={Link} to="/main">Back</Button>
          </Col>
          </Row>
          <Row>
          <Col sm={12}>
          <Button color="primary" tag={Link} to="/notes">Create Notes</Button>
          </Col>
          </Row>
      </Navbar>

        <Container className="theOtherContainer">>

        { this.props.notes && this.props.notes.map( note =>
        <Card key={note._id} >
          <h6 className="noteText">
            Title: {note.title}  
            </h6>
          <h6 className="noteText">
            Notes:v{note.content}
            </h6>
          <Button onClick={() => this.props.deleteNotes(note._id)} color="danger">Delete</Button>
          <Button>Edit</Button>
          </Card>
          )}

        </Container>
        
        
      </div>
    )
  }
}
export default NoteViewer;