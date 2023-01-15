export const GET_EMPLOYEE_LIST = 'EMPLOYEE/GET_EMPLOYEE_LIST';
export const SET_EMPLOYEE_LIST = 'EMPLOYEE/SET_EMPLOYEE_LIST';
export const DELETE_EMPLOYEE = 'EMPLOYEE/DELETE_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EMPLOYEE/EDIT_EMPLOYEE';
export const TOGGLE_LIKE_EVENT = 'EMPLOYEE/TOGGLE_LIKE_EVENT';


export const getEmployeeList = () => {
    return {
        type:GET_EMPLOYEE_LIST
    }
}

export const setEmployeeList = (data) => {
    return {
        type:SET_EMPLOYEE_LIST,
        data
    }
}

export const toggleLikeEvent = (employeeId) => {
    return {
        type:TOGGLE_LIKE_EVENT,
        employeeId
    }
}

export const removeEmployee = (id) => {
    return {
        type:DELETE_EMPLOYEE,
        id
    }
}
export const editEmployee = (emp) => {
    return {
        type:EDIT_EMPLOYEE,
        emp
    }
}

