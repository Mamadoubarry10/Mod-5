
const defaultState ={
    properties :[]
}

function propertiesReducer(state = defaultState.properties, action){
    switch(action.type){
        case "FETCH_PROPERTIES":
            console.log("fetching",action)
            return action.payload;
            break;
        case "ADD_PROPERTY":
            return [...state, action.payload];
        default:
            return state
            break;
    }
};

export {propertiesReducer}