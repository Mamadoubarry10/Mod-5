import React from 'react'
import  'bulma/css/bulma.css'
import {Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {removeFave} from '../redux/action'



const favoriteCard = (props)=>{
// console.log(props, 'here')


    return(
        <>

<Card style={{ width: '20rem' }} >
    <div className="view zoom overlay">
    <a href="#!">
        <div className="mask">
            <Card.Img variant="top" src={props.land.img2} className="img-fluid w-100" />
            <div class="mask rgba-black-slight"></div>
        </div>
    </a>
        
    </div>
    <Card.Body style={{textAlign: "center"}}>
    <Card.Title >{props.land.location}</Card.Title>
            <h6 className="mb-2">Price: <span>${props.land.price}</span></h6>
            
            <Button type="button" className="btn btn-dark btn-sm mr-1 mb-2"><NavLink to={`/listings/${props.land.id}`} exact className="link"><i className="fas fa-info-circle pr-2 "></i>see more</NavLink></Button>

        {/* <Button type="button" className="btn btn-dark btn-sm mr-1 mb-2">❤️</Button> */}
       
    

   <Button type="button" className="btn btn-danger btn-sm mr-1 mb-2" onClick={()=> props.removeFave(parseInt(props.favoriteId))}>x</Button>



  </Card.Body>

 </Card> 
        </>
    )
}

const mdp = (dispatch)=>{

    return {removeFave: (id)=> dispatch(removeFave(id))}
}

export default connect(null,mdp)(favoriteCard)