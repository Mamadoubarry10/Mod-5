
const defaultState ={
    favorites :[]
}

function favoritesReducer(state = defaultState.favorites, action){
    switch(action.type){
        case "ADD_FAVORITE":
            console.log("fetching", action)
            return [...state, action.payload];
            
        case "PAST_FAVORITE":
            console.log("looking for you",action.payload)
        return action.payload

        
        default:
            return state
           
    }
};

export {favoritesReducer}