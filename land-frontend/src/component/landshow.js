import react from 'react'
import { connect } from 'react-redux'
import {Container} from 'react-bootstrap'
import {fetchToFavorites} from '../redux/action'



const landShow = (props)=>{

    // function addToFavorite(){
    //     props.addToFavorites(props.user,props.product)
    // }
    return(
        <>
    <h1 className="list-h1"> show page</h1>
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
                <h4>location: {props.product.location}</h4>
                 <h4>acres: {props.product.acres}</h4>
               <p >property info: {props.product.description }</p>
                                <h4>price: ${props.product.price}</h4>
                </div>
                {console.log("ROOOOOOOOOOOOOOO", props.user, 'YXXXXXXXX',props.product.id)}
                <button type="button" className="btn-dark" onClick={()=>props.addToFavorites(props.user.id, props.product )}>Add to favorites</button>
                
   {console.log("here", props.user.id, props.product)}
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

