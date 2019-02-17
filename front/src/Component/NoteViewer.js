import React, {Component} from "react"
import {Button,Container,Card} from "reactstrap"

import { Link
} from 'react-router-dom'
import "../App.css"
class NoteViewer extends Component{
  componentDidMount(){
    this.props.fetchNotes()
  }
  render(){
    return(
      <div>
        <Container>
          <Card>
          <h6 className="noteText">this title place holder</h6>
          <h6 className="noteText">this is the note place holder</h6>
          <Button color="danger">Delete</Button>
          <Button>Edit</Button>
          </Card>

        </Container>
        
        <Button color="primary" tag={Link} to="/notes">Create Notes</Button>
        <Button color="primary" tag={Link} to="/main">Back</Button>
      </div>
    )
  }
}
export default NoteViewer;