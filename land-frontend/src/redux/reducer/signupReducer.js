
const defaultState ={
    user:false
    
}

function signupReducer(state = defaultState.user, action){
    switch(action.type){
        case "ADD_USER":
            console.log("fetching", action)
            console.log("action",action.payload)
            return action.payload
        case "LOG_OUT":
            return false
        default:
            return state
        
    }
    
    
};

export {signupReducer}
