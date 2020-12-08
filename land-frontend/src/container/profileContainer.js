import React from 'react'
import { connect } from 'react-redux'
import ProfileRender from './ProfileRender'

import UserListing from './userListing'




 class profileContainer extends React.Component{
     

     render(){
        
        return (
       
        <div>
               <ProfileRender/>
               <h1 className="list-h1">My Listings</h1>
               <UserListing/>

            
            
            
        </div>
     )

    }
   
}
const msp = (state)=>{

return { properties: state.properties, user: state.user}
}


export default connect(msp)(profileContainer)