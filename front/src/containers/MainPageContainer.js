import { connect } from 'react-redux'
import MainPage from '../Component/MainPage';
import { fetchMeds,deleteMeds } from '../actions/medAction';
import {logout} from '../actions/userActions'


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
      },
      logout: (user) =>{
        dispatch(logout(user));
      }
    }

  }

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
// ,mapDispatchToProps