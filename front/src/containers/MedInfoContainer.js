import { connect } from 'react-redux'
import MedInfo from '../Component/MedInfo';
import {createMeds} from "../actions/medAction";
const mapStateToProps = state => {
  return {
    meds: state.meds
  }
}
const mapDispatchToProps = dispatch => {
  return {
    meds: (meds)=>{
      dispatch(createMeds(meds));
    }
  }
}

    export default connect(mapStateToProps, mapDispatchToProps)(MedInfo);