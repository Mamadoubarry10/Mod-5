import React from 'react'
import { connect } from 'react-redux'

import ListingCard from '../component/listingCard'
import Profile from '../component/profile'

import{CardColumns} from 'react-bootstrap'



 class userListing extends React.Component{
     
  renderUserListing = () =>{
      return this.props.properties.filter(mine => mine.user_id === this.props.user.id).map(land => <ListingCard key={land.id} land={land}/>)
  }

     render(){
        
        return (
       
        
       
<div>
   
<CardColumns>
{this.renderUserListing()}
</CardColumns>


</div>
            
            
            
        
     )

    }
   
}
const msp = (state)=>{

return { properties: state.properties, user: state.user}
}


export default connect(msp)(userListing)