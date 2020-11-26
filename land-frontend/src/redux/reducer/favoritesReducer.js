
const defaultState ={
    favorites :[],
}

function favoritesReducer(state = defaultState.favorites, action){
    switch(action.type){
        case "ADD_FAVORITE":
           
            console.log("fetchiiiiiiing", action.payload)
            return [...state, action.payload];
            
        case "PAST_FAVORITE":
            console.log("looking for you",action.payload)
        return action.payload

        case "DELETE_FAVORITE":
            
            console.log("deleteeeee", action.payload.data.id )
            console.log("hereeee",  state[0].filter(favorite => favorite.id === parseInt(action.payload.data.id)) )
            console.log("here",  state.filter(favorite => favorite.id !== action.payload.data.id))

            // state.map(favorite => {if (favorite[1] === )})

             const favorites = state.filter(favorite => favorite[1] !== parseInt(action.payload.data.id) )
             console.log('Dele filter', favorites)
            //  debugger
        return favorites

        // favorites: state.favorites.filter(favorite => favorite.id !== action.paylod)
        default:
            return state
           
    }
};

export {favoritesReducer}