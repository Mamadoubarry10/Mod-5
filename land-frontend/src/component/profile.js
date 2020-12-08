import React from 'react'
import {connect} from 'react-redux'
import UserListing from '../container/userListing'


const profile = (props) =>{
console.log(props)
    return(
     <div>

<div class="card" style={{textAlign: "center", width:"50%" }} >
  <img src={props.user.userImg} alt="Avatar" style={{width:"50%", textAlign: "center"}}/>
  <div class="container">
    <h3><b>Name:</b> {props.user.name}</h3>
    <h3><b>Lives in:</b> {props.user.location}</h3>
    <p></p> 
  </div>
</div>
    

</div>  

    )

   
}


function msp(state){
    return {user: state.user}
}

export default connect(msp)(profile)