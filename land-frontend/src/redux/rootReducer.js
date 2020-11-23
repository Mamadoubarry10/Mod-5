import {combineReducers} from 'redux'
import { propertiesReducer} from './reducer/propertiesReducer'
import { signupReducer} from './reducer/signupReducer'
import { favoritesReducer} from './reducer/favoritesReducer'


const rootReducer = combineReducers({
    properties: propertiesReducer,
    user: signupReducer,
    favorites: favoritesReducer
})

export default rootReducer