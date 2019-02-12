import { connect } from 'react-redux'
import MainPage from '../Component/MainPage';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MainPage)