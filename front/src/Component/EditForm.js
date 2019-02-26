import React, { Component, useState, useEffect } from 'react'
import {Button,Form} from 'reactstrap'
const EditForm = (props) => {
  console.log("editform props", props)

  if (props.note) {
    const [title, setTitle] = useState(props.note.title)
    const [content, setContent] = useState(props.note.content)
    
    function handleSubmit(e){
      e.preventDefault()
      let updatedNote = {title,content}
      props.dispatchUpdateNote(props.note._id,updatedNote)
    }
    return (
      <div>

        <form onSubmit={handleSubmit}>

          <textarea name="title" id="title" cols="30" rows="10" onChange={e => setTitle(e.target.value)} value={title} />

          <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)} value={content} />
        <Button type="submit">submit</Button>
        </form>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}
export default EditForm;


// import React, { Component } from 'react'
// // import {Card} from 'reactstrap'
// class EditForm extends Component{
//  state = {
//    title: this.props.note.title || "", 
//    content: this.props.note.content || "",
//  }

//   updateNotes(_id){
//     this.props.updateNotes(_id)
//   }

//   render(){
//     console.log("editform props",this.props)
//     return(
//       <div>
        
//         <form>
        
//           <textarea name="title" id="title" cols="30" rows="10" value={this.props.note && this.props.note.title}/>
          
//           <textarea name="content" id="content" cols="30" rows="10" value={this.props.note && this.props.note.content}/>

//         </form>
//       </div>
//     )
//   }
// }
// export default EditForm;