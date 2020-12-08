import React from 'react'
import { connect } from 'react-redux'
import {fetchSignUp} from '../redux/action'



class Signup extends React.Component{


    state={
        name:"",
        username:"",
        email:"",
        password:"",
        userImg:"",
        phone:"",
        location:""
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

       
    }

    localSubmithandler= (e)=>{
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'mamadou')
     
        const res = await fetch(
          '	https://api.cloudinary.com/v1_1/dchooagl5/image/upload' ,
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
    
       console.log(file)
        this.setState({userImg:file.secure_url})
   
      }
    render(){
        return(
            <div>
                <h1 className="list-h1">Sign UP</h1>
                <div className="main2">
                 <form onSubmit={this.localSubmithandler} className="form1">
                 <input className="pass" type="text" name ="name"  value={this.state.name} onChange={e => this.changeHandler(e)} align="center" placeholder="name"/>
                 <input className="pass" type="text" name ="username"  value={this.state.username} onChange={e => this.changeHandler(e)} align="center" placeholder="username"/>
                 <input className="pass " type="email" name="email" value={this.state.email} onChange={e => this.changeHandler(e)} align="center" placeholder="email"/>
                 <input className="pass" type="password" name="password" value={this.state.password} onChange={e => this.changeHandler(e)} align="center" placeholder="password"/>
                 <input className="un" type="file" name="userImg" onChange={e => this.uploadImage(e)} align="center" placeholder="photo"/>
                 <input className="un" type="tel" name ="phone" value={this.state.phone} onChange={e => this.changeHandler(e)} align="center" placeholder="phone"/>
                 <input className="un" type="text" name="location" value={this.state.location} onChange={e => this.changeHandler(e)} align="center" placeholder="location"/>
                 <input className="button" type="submit" value="Submit" />
                
                </form>
                </div>
            
            </div>



        )
    }
}


function mdp(dispatch){
    return {submitHandler: (newUser)=>dispatch(fetchSignUp(newUser))}
}

export default connect(null, mdp)(Signup)
