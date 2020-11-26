import React from 'react'
import { connect } from 'react-redux'
import FavoritesCard from '../component/favoritesCard'
import{CardColumns} from 'react-bootstrap'




 class favoritesContainer extends React.Component{

    

     renderListing = () => { 
        if (this.props.favorite.length > 0)
         return this.props.favorite.map(land => <FavoritesCard   land={land[0]} favoriteId={land[1]}/>)
         else 
         return null
        }


     render(){
        
        return (
      
        <div>
            <h1 className="list-h1">My favorites</h1>
        <CardColumns>
        {
        this.renderListing()}

        </CardColumns>
     
        {console.log("faves props", this.props.favorite)}
        <h1>hwy</h1>
        
        </div>

       
     )

    }
   
}
const msp = (state)=>{

return { favorite: state.favorites, favorite_id: state.favorite_id}
}


export default connect(msp)(favoritesContainer)