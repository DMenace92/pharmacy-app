import { connect } from 'react-redux'
import MainPage from '../Component/MainPage';
import { fetchMeds } from '../actions/medAction';

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
      }
    }

  }

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
// ,mapDispatchToProps