import React from 'react'
import { connect } from 'react-redux'
import {Container} from 'react-bootstrap'
import {fetchToFavorites} from '../redux/action'



const landShow = (props)=>{

    // function addToFavorite(){
    //     props.addToFavorites(props.user,props.product)
    // }
    return(
        <>

        <div className="land">
                <div className="row-image">
                <div className="column">
                 <img src={props.product.img1} alt="Snow" style={{width:"100%"}}/>
                </div>
                <div className="column">
                    <img src={props.product.img2} alt="Forest" style={{width:"100%"}}/>
                </div>
                <div className="column">
                    <img src={props.product.img3} alt="Mountains" style={{width:"100%"}}/>
                </div>
                </div>
                <div style={{textAlign: "center"}}>
                
                <h3 style={{textAlign: "center"}}>Price: ${props.product.price}</h3>
                <h4>Acres: {props.product.acres}</h4>
                <h5>Location: {props.product.location}</h5>
               <p ><b>Property info:</b> {props.product.description }</p>
               <p ><b>Property Owner:</b> {props.product.user.name }</p>
                               
                                </div>
    <p style={{textAlign: "center"}}><b>interested? call me { props.product.user.phone} or send email <a href = {"mailto:" + props.product.user.email} >{ props.product.user.email}</a></b></p>
              
           
              <button type="button" className="btn-success" onClick={()=>props.addToFavorites(props.user.id, props.product )}>Add to favorites</button>
              
   
        </div>
        
        

        </>
        

    )

}

const msp = (state)=>{

    return { user: state.user}
}


const mdp = (dispatch)=>{

    return {addToFavorites: (user, listing)=> dispatch(fetchToFavorites(user, listing))}
}



export default connect(msp, mdp)(landShow)

