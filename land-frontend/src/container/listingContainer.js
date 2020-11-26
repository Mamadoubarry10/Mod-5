import React from 'react'
import { connect } from 'react-redux'
import ListingCard from '../component/listingCard'
import{CardColumns} from 'react-bootstrap'



 class listingContainer extends React.Component{

     renderListing = () => { 
         return this.props.properties.map(land => <ListingCard  key={land.id} land={land}/>)
        }


     render(){
        return (
       
        <div>
            <h1 className="list-h1">All Listings</h1>
            <CardColumns>
            {this.renderListing()}
            </CardColumns>
        
        {console.log("loooooooo", this.props.properties)}
        </div>
     )

    }
   
}
const msp = (state)=>{

return { properties: state.properties}
}


export default connect(msp)(listingContainer)
