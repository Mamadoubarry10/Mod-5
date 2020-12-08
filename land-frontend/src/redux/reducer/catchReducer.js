
const defaultState ={
    error:false
    
}

function errorReducer(state = defaultState.error, action){
    switch(action.type){
        case "ERROR":
            console.log("fetching", action)
            console.log("action",action.payload)
            return action.payload
        default:
            return state
        
    }
    
    
};

export {errorReducer}