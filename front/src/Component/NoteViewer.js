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
    console.log(this.props.notes)
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
        <Card>
          <h6 className="noteText">
            Title:<h4>{note.title} </h4> 
            </h6>
          <h6 className="noteText">
            Notes: <h5> {note.content} </h5>
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