import React from 'react'
import logo from './logo.svg';
import {connect} from 'react-redux'
import {fetchPropeties} from './redux/action'
import './App.css';
import Login from './component/login'
import List from './component/list'
import Navbar from './component/navbar'
import Signup from './component/signup'
import ListingConatiner from './container/listingContainer'
import FavoritesContainer from './container/favoritesContainer'
import ProfileContainer from './container/profileContainer'
import {Route, Switch} from "react-router-dom";
import Landshow from './component/landshow'

import 'bootstrap/dist/css/bootstrap.min.css';




// import 'bulma/css/bulma.css'





class App extends React.Component{

  componentDidMount(){
   this.props.fetchProperties()

  }
  
  render(){


    return (
      <div className="App">
        
       {this.props.user? <><Navbar/></>: null}
       <Switch>

       <Route path="/listings/:id"  render={(routerProps) => {
                let id = parseInt(routerProps.match.params.id)
                let product

                if (this.props.properties.length > 0) {
                  product = this.props.properties.find(el => el.id === id
                  )
                
                }
                
                return (
                  <>
                    {this.props.properties.length ? <Landshow product={product}  />
                      : <h1>Loading</h1>}  
                      
                  </>)
              }} />
       
       {this.props.user ? <> <Route path= "/listings" render={()=><ListingConatiner/>} />
       <Route path= "/list" render={()=><List/>} />
       <Route path= "/favorites" render={()=><FavoritesContainer/>} />
       <Route path= "/profile" render={()=><ProfileContainer/>} />
       <Route path= "/" render={()=> null} />
       
       </>: <> <Route path= "/" render={()=><Login/>} />
       <Route path= "/signup" render={()=><Signup/>} />
       </>}
       
       
       {/* <Route path= "/login" render={()=><Login/>} />
       <Route path= "/listings" render={()=><ListingConatiner/>} />
       <Route path= "/list" render={()=><List/>} />
       <Route path= "/favorites" render={()=><FavoritesContainer/>} />
       <Route path= "/signup" render={()=><Signup/>} /> */}



       </Switch>
      {console.log("ghh", this.props.user)}
      </div>
    );
  }

}

function mdp(dispatch){
return{fetchProperties: () => dispatch(fetchPropeties())}
}

const msp = (state)=>{

  return { properties: state.properties, user: state.user}
}

export default connect(msp, mdp)(App);
