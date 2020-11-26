import React from 'react'
import { connect } from 'react-redux'
import Profile from '../component/profile'
import ListingCard from '../component/listingCard'
import UserListing from './userListing'




 class profileContainer extends React.Component{
     

     render(){
        
        return (
       
        <div>
               <Profile/>

              

            
            
            
        </div>
     )

    }
   
}
const msp = (state)=>{

return { properties: state.properties, user: state.user}
}


export default connect(msp)(profileContainer)