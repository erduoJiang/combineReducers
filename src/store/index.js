import {createStore,combineReducers} from 'redux'
// import {rootReducer} from './reducers'

import {proReducers} from './reducers/proReducers'
import {userReducers} from './reducers/userReducers'

const reducers = combineReducers({
    pro:proReducers,
    user:userReducers
})
export default createStore(reducers)