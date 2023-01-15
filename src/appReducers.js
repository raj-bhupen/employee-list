import  { EmployeeReducer }from './reducers';
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    employee: EmployeeReducer
})
export default rootReducer;