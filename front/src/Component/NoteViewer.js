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
    console.log(this.props.notes)
    return(
      <div>
        <Container className="theOtherContainer">>

        { this.props.notes && this.props.notes.map( note =>
        <Card>
          <h6 className="noteText">
            {note.title}
            </h6>
          <h6 className="noteText">
            {note.content}
            </h6>
          <Button color="danger">Delete</Button>
          <Button>Edit</Button>
          </Card>
          )}

        </Container>
        
        <Button color="primary" tag={Link} to="/notes">Create Notes</Button>
        <Button color="primary" tag={Link} to="/main">Back</Button>
      </div>
    )
  }
}
export default NoteViewer;