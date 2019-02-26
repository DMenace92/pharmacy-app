import React, { Component } from 'react'
// import {Card} from 'reactstrap'
class EditForm extends Component{
 state = {
   title: this.props.note.title || "", 
   content: this.props.note.content || "",
 }

  updateNotes(_id){
    this.props.updateNotes(_id)
  }

  render(){
    console.log("editform props",this.props)
    return(
      <div>
        
        <form>
        
          <textarea name="title" id="title" cols="30" rows="10" value={this.props.note && this.props.note.title}/>
          
          <textarea name="content" id="content" cols="30" rows="10" value={this.props.note && this.props.note.content}/>

        </form>
      </div>
    )
  }
}
export default EditForm;