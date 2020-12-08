
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
        case "UPDATE_PROPERTY":
            console.log("YURrr", action.payload.id)
            const properties = state.filter(favorite => favorite.id !== action.payload.id)
            console.log('check this', state)
            console.log("right here",[...properties, action.payload])
        return [...properties, action.payload]
        default:
            return state
            break;
    }
};

export {propertiesReducer}