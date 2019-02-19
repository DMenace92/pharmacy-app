import { connect } from 'react-redux'
import MainPage from '../Component/MainPage';
import { fetchMeds,deleteMeds } from '../actions/medAction';


const mapStateToProps = state => {
  return {
    user: state.user,
    medInfo: state.meds.meds,
    

  }
}
const mapDispatchToProps = dispatch => {
    
    return {
      fetchMeds: (meds)=>{
        dispatch(fetchMeds(meds));
      },
      
      deleteMeds: (id) =>{
        dispatch(deleteMeds(id))
      }
    }

  }

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
// ,mapDispatchToProps