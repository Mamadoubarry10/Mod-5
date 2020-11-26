import React from 'react'
import { connect } from 'react-redux'
import {postPropeties} from '../redux/action'



class List extends React.Component{


    state={
        image1:'',
        image2:'',
        image3:'',
        price:'',
        acres:'',
        description:'',
        location:''
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }

    localSubmithandler= (e)=>{
        e.preventDefault()
        this.props.submitHandler(this.state, this.props.user.id)
        console.log("state",this.state)

    }
    render(){
        
        console.log("USER", this.props.user.id)
        
        return(
            
            <div>
                <h1 className="list-h1">New Listing</h1>
                <div className="main2">
                 <form onSubmit={this.localSubmithandler}className="form1">
                 <input className="pass" type="text" name = "image1" value={this.state.image1} onChange={e => this.changeHandler(e)} align="center" placeholder="Photo"/>
                 <input className="pass" type="text" name = "image2"  value={this.state.image2} onChange={e => this.changeHandler(e)} align="center" placeholder="Photo"/>
                 <input className="pass" type="text" name = "image3"  value={this.state.image3} onChange={e => this.changeHandler(e)} align="center" placeholder="Photo"/>
                 <input className="pass " type="number" name ="price" value={this.state.price} onChange={e => this.changeHandler(e)} align="center" placeholder="price"/>
                 <input className="pass" type="number" name = "acres" value={this.state.acres} onChange={e => this.changeHandler(e)} align="center" placeholder="acres"/>
                 <input className="un" type="text" name ="description" value={this.state.description} onChange={e => this.changeHandler(e)} align="center" placeholder="description"/>
                 <input className="un" type="text" name="location" value={this.state.location} onChange={e => this.changeHandler(e)} align="center" placeholder="location"/>
                 <input className="button" type="submit" value="Submit" />
                
                </form>
                </div>
            
            </div>



        )
    }
}

const msp = (state)=>{

    return { user: state.user}
}

function mdp(dispatch){
    return {submitHandler: (obj,User)=>dispatch(postPropeties(obj, User))}
}


export default connect(msp, mdp)(List)