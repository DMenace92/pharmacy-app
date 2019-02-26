import EditForm from '../Component/EditForm'
import { updateNotes } from '../actions/notesActions';
import { connect } from 'react-redux';

const mapStateToProps = ({ notes }, props) => {
  return {
    note: notes.notes.filter(note => note._id == props.match.params.id)[0]
  }
}
const mapDispatchToProps = dispatch => {

  return {
    dispatchUpdateNote: (_id, note) => {
      dispatch(updateNotes(_id, note));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditForm)


// import EditForm from '../Component/EditForm'
// import { updateNotes } from '../actions/notesActions';
// import { connect } from 'react-redux';

// const mapStateToProps = ({notes},props) => {
//   console.log("efc notes", notes)
//   return !notes?{note:{}}:{
//     note: notes.notes.filter(note => note._id == props.match.params.id)[0]
//   }
// }
// const mapDispatchToProps = dispatch => {
  
//   return {
//     dispatchUpdateNote: (_id)=>{
//       dispatch(updateNotes(_id));
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EditForm)