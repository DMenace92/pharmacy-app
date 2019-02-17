import { connect } from 'react-redux'
import { fetchNotes } from '../actions/notesActions';
import NoteViewer from "../Component/NoteViewer";


const mapStateToProps = state=> {
  return {
    user: state.notes,
   
  }
}
const mapDispatchToProps = dispatch => {
    
  return {
    fetchNotes: (notes)=>{
      dispatch(fetchNotes(notes));
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(NoteViewer)