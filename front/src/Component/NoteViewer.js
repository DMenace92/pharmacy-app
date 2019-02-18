import React, {Component} from "react"
import {Button,Container,Card,Navbar, NavbarBrand,Col} from "reactstrap"

import { Link
} from 'react-router-dom'
import "../App.css"
class NoteViewer extends Component{
  componentDidMount(){
    this.props.fetchNotes()
  }
  render(){
    console.log(this.props.notes)
    return(
      <div>
      <Navbar className="nav" color="dark" light>
      <NavbarBrand href="/" className="text-white" ></NavbarBrand>
      <Col sm={10}>
          <Button color="primary" tag={Link} to="/main">Back</Button>
          </Col>
          <Button color="primary" tag={Link} to="/notes">Create Notes</Button>
          
      </Navbar>

        <Container className="theOtherContainer">>

        { this.props.notes && this.props.notes.map( note =>
        <Card>
          <h6 className="noteText">
            Note Title: {note.title}
            </h6>
          <h6 className="noteText">
            {note.content}
            </h6>
          <Button color="danger">Delete</Button>
          <Button>Edit</Button>
          </Card>
          )}

        </Container>
        
        
      </div>
    )
  }
}
export default NoteViewer;