import React, {Component} from 'react'
import {Navbar,NavbarBrand,Button} from "reactstrap"
import {Link} from 'react-router-dom'
//see if token exists use if else statement
class NavBar extends Component{
    render(){
        return(
        <div>  

            <Navbar className="nav" color="dark" light>
            <NavbarBrand href="/" className="text-white" ></NavbarBrand>
            <Button  color="primary" tag={Link} to="/login">Login</Button>
            <Button color="primary" tag={Link} to="/register">Register</Button>
            
            <Button  className='addMed'color="primary" tag={Link} to="/medinfo">Add a Med</Button>
        </Navbar>
    </div>
        )
    }
}
export default NavBar;