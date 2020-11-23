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
import {Route, Switch} from "react-router-dom";
import Landshow from './component/landshow'



import 'bulma/css/bulma.css'





class App extends React.Component{

  componentDidMount(){
   this.props.fetchProperties()
   
  }
  
  render(){


    return (
      <div className="App">
       <Navbar/>
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
       <Route path= "/login" render={()=><Login/>} />
       <Route path= "/list" render={()=><List/>} />
       <Route path= "/listings" render={()=><ListingConatiner/>} />
       <Route path= "/favorites" render={()=><FavoritesContainer/>} />
       <Route path= "/signup" render={()=><Signup/>} />



       </Switch>
      
      </div>
    );
  }

}

function mdp(dispatch){
return{fetchProperties: () => dispatch(fetchPropeties())}
}

const msp = (state)=>{

  return { properties: state.properties}
}

export default connect(msp, mdp)(App);
