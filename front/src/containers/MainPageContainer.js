import { connect } from 'react-redux'
import MainPage from '../Component/MainPage';
// import { fetchMeds } from '../actions/medAction';

const mapStateToProps = state => {
  return {
    user: state.user,
    // medlist: state.meds.meds

  }
}
  // const mapDispatchToProps = dispatch => {
    
    
    
  //   return {
  //     meds: (meds)=>{
  //       dispatch(fetchMeds(meds));
  //     }
  //   }

  // }

export default connect(mapStateToProps)(MainPage)
// ,mapDispatchToProps