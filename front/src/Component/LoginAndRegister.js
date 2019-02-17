import React, {Component} from "react";
import {Button} from "reactstrap"

import { Link
} from 'react-router-dom'

class LoginAndRegister extends Component{
  render(){
    return(
      <div>
      <Button className ="lrbutton" color="primary" tag={Link} to="/login">Login</Button>
      <Button className ="lrbutton" color="primary" tag={Link} to="/login">Register</Button>
      
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/register">Register</Link> */}
      </div>
    )
  }
}
export default LoginAndRegister;