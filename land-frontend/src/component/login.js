import React from 'react'
import {userLoginFetch} from '../redux/action'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Login extends React.Component{


    state={
        username:'',
        password:''

    }    
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

        console.log(this.state)
    }
    
    localSubmithandler= (e)=>{
        e.preventDefault()
        this.props.submitHandler(this.state)

    }
    render(){

        return(
  
            <div>
            <div className="main">
                <p className="sign" align="center">Sign in</p>
                <form onSubmit={this.localSubmithandler} className="form1" >
                <input className="un " type="text" name ="username" value={this.state.username} onChange={e => this.changeHandler(e)} align="center" placeholder="Username"/>
                <input className="pass" type="password" name = "password" value={this.state.password} onChange={e => this.changeHandler(e)} align="center" placeholder="Password"/>
                <input className="button" type="submit" value="Submit" />
                
                </form>
                {this.props.error ? <h5 style={{ color: "red", textAlign: "center" }}>Incorrect username or password</h5> : null}

                <p style={{textAlign:"center"}}>Don't have an account? <NavLink to={`/signup`} exact className="signUp-link">Sign Up</NavLink></p>

      
    </div>
                </div>
         
        )


    }
}

function mdp(dispatch){
    return {submitHandler: (newUser)=>dispatch(userLoginFetch(newUser))}
}

function msp(state){
    return {error : state.error}
}

export default connect(msp, mdp)(Login)

