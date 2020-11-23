import React from 'react'
import { connect } from 'react-redux'
import ListingCard from '../component/listingCard'



 class favoritesContainer extends React.Component{

    

     renderListing = () => { 
         return this.props.favorite.map(land => <ListingCard  key={land.id} land={land}/>)
        }


     render(){
        
        return (
      
        <div>
            <h1 className="list-h1">My favorites</h1>
        {this.renderListing()}
        {console.log('lol',  this.props.favorite)}
        
        </div>

       
     )

    }
   
}
const msp = (state)=>{

return { favorite: state.favorites}
}


export default connect(msp)(favoritesContainer)