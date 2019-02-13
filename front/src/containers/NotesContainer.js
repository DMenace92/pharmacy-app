import { connect } from 'react-redux'
import { createNotes } from '../actions/notesActions';
import Notes from "../Component/Notes";


const mapStateToProps = ({notes}) => {
  return {
    user: notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    notes: (notes)=>{
      dispatch(createNotes(notes));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes)