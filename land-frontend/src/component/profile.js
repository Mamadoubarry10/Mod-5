import react from 'react'
import {connect} from 'react-redux'
import UserListing from '../container/userListing'


const profile = (props) =>{

    return(
       
<div>
   
<div class="wrapper">
    <div class="left">
        <img src={props.user.userImg} alt="user" width="100"/>
    <h4>{props.user.name}</h4>
         <p>Seller</p>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
    <p>{props.user.email}</p>
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
    <p>{props.user.phone}</p>
              </div>
              <div class="data">
                   <h4>location</h4>
    <p>{props.user.location}</p>
              </div>
              
            </div>
        </div>
      
     
        
    </div>
   

</div>
   
  <div>
      
  <UserListing/>
      </div> 

  
</div>

    )

   
}


function msp(state){
    return {user: state.user}
}

export default connect(msp)(profile)