import React from 'react'
import { connect } from 'react-redux'
import Profile from '../component/profile'
import ListingCard from '../component/listingCard'
import UserListing from './userListing'




 class profileRender extends React.Component{
     

     render(){
        
        return (
       
        <div>
               <Profile/>

            
            
            
        </div>
     )

    }
   
}


export default profileRender