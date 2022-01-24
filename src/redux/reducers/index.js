import { combineReducers } from 'redux'
import input from './base/input'
import spa from './spa'

export default combineReducers({spa, username:input('username'), password:input('password'),showpassword:input('showpassword')})