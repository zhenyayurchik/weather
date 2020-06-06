import {combineReducers} from 'redux'
import {weathrReducer} from './weatherReducer'

export const rootReducer = combineReducers({
    wheather: weathrReducer
})

export default rootReducer