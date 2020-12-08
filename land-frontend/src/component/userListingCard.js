import React from 'react'
import  'bulma/css/bulma.css'
import {Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { listAsSold } from '../redux/action'



const listingCard = (props)=>{
// console.log(props, 'here')
    return(
        <>

<Card style={{ width: '18rem' }} >
    <div className="view zoom overlay">
    <a href="#!">
        <div className="mask">
            <Card.Img variant="top" src={props.land.attributes.img2} className="img-fluid w-100" />
            <div class="mask rgba-black-slight"></div>
        </div>
    </a>
        
    </div>
    <Card.Body style={{textAlign: "center"}}>
    <Card.Title >{props.land.location}</Card.Title>
            <h6 className="mb-2">Price: <span>${props.land.attributes.price}</span></h6>
            
            <Button type="button" className="btn btn-dark btn-sm mr-1 mb-2"><NavLink to={`/listings/${props.land.id}`} exact className="link"><i className="fas fa-info-circle pr-2 "></i>see more</NavLink></Button>

        <Button type="button" className="btn btn-green btn-sm mr-1 mb-2" onClick={()=>props.listAsSold(props.land.id)}>Sold?</Button>
       
        

   

  </Card.Body>

    
 </Card> 
        </>
    )
}

const mdp =(dispatch) => {
    return {listAsSold:(id) => dispatch(listAsSold(id))}
}

export default connect(null, mdp)(listingCard)