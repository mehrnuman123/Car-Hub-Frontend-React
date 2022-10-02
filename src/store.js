import { createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {carReducer, carsReducer, newCarReducer,carDetailsReducer}from './components/reducers/carReducer'
import { authReducer,userReducer,userDetailsReducer,forgotPasswordReducer,allUsersReducer
 } from './components/reducers/userReducers'

const rootReducer = combineReducers({
  cars:carsReducer,
  newCar: newCarReducer,
  car:carReducer,
  carDetails: carDetailsReducer,
  auth:authReducer,
  user:userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,

})


let initialState ={}

const middleware =[thunk];
const store = createStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store