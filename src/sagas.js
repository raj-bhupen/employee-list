import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_EMPLOYEE_LIST, setEmployeeList } from './actions/employee.action';
import axios from 'axios';


function* fetchEmployeeList() {
  const options = {
    method: 'GET',
    url: 'https://users148.p.rapidapi.com/users',
    headers: {
      'X-RapidAPI-Key': '2801a402acmshdf619884548d789p18a474jsnc225e9b0f098',
      'X-RapidAPI-Host': 'users148.p.rapidapi.com'
    }
  };
  
  const employees = yield axios.request(options).then(function (response) {
    return (response.data);
  }).catch(function (error) {
    console.error(error);
  });  
  
  yield put(setEmployeeList(employees));
}
function* actionWatcher() {
     yield takeLatest(GET_EMPLOYEE_LIST, fetchEmployeeList)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}