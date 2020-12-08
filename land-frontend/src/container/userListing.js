import React from 'react'
import { connect } from 'react-redux'
import UserListingCard from '../component/userListingCard'
import{CardColumns} from 'react-bootstrap'

class userListing extends React.Component{
     
  renderUserListing = () =>{
      return this.props.properties.filter(mine => mine.attributes.user_id === this.props.user.id).map(land => <UserListingCard key={land.id} land={land}/>)
  }

render(){
  return (

            <div>
            
            <CardColumns style={{textAlign: "center"}}>
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