import React, {Component} from "react";
// import {Button} from "reactstrap"

import { Link
} from 'react-router-dom'

class LoginAndRegister extends Component{
  render(){
    return(
      <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </div>
    )
  }
}
export default LoginAndRegister;