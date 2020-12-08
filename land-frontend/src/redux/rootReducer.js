import {combineReducers} from 'redux'
import { propertiesReducer} from './reducer/propertiesReducer'
import { signupReducer} from './reducer/signupReducer'
import { favoritesReducer} from './reducer/favoritesReducer'
import {errorReducer} from './reducer/catchReducer'


const rootReducer = combineReducers({
    properties: propertiesReducer,
    user: signupReducer,
    favorites: favoritesReducer,
    error: errorReducer
})

export default rootReducer