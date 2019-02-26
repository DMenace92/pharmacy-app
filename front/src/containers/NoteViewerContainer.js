import { connect } from 'react-redux'
import { fetchNotes, deleteNotes, fetchOneNote } from '../actions/notesActions';
import NoteViewer from "../Component/NoteViewer";


const mapStateToProps = state=> {
  return {
    notes: state.notes.notes,
  }
}
const mapDispatchToProps = dispatch => {
    
  return {
    fetchNotes: (notes)=>{
      dispatch(fetchNotes(notes));
    },
    deleteNotes: (id) =>{
      dispatch(deleteNotes(id))
    },
    // updateNotes:(id) =>{
    //   dispatch(updateNotes(id))
    // },
    fetchOneNote:(id) =>{
      dispatch(fetchOneNote(id))
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(NoteViewer)