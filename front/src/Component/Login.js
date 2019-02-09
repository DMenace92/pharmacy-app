import React, {Component} from 'react'

class Login extends Component{
    render(){
        return(
            <form action="login">
                <input type="username"/>
                <input type="password"/>
            </form>
        )
    }
}
export default Login