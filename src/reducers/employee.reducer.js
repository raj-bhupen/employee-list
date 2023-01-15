import { GET_EMPLOYEE_LIST, DELETE_EMPLOYEE, EDIT_EMPLOYEE, SET_EMPLOYEE_LIST, TOGGLE_LIKE_EVENT } from "../actions/employee.action";

const reducer = (state = {loading:true, selectedVariants: new Map()}, action) => {
   let employees = state.employees;
    switch (action.type) {
      case GET_EMPLOYEE_LIST:
          return { ...state, loading: true };
      case SET_EMPLOYEE_LIST:
         return { ...state, loading: false, employees: action.data };
      case DELETE_EMPLOYEE:
         return { ...state, loading: false, employees: employees.filter(emp => emp.id !== action.id) };
      case EDIT_EMPLOYEE:
         employees =  state.employees.map(emp => emp.id === action.emp.id ? action.emp : emp)
         return { ...state, loading: false, employees: [...employees]};
      case TOGGLE_LIKE_EVENT:
         employees =  state.employees.map(emp => emp.id === action.employeeId ? {...emp, isLiked: !emp.isLiked} : emp)
            return { ...state, loading: false, employees: [...employees]  };
      default:
          return state;
     }
  };
  export default reducer;