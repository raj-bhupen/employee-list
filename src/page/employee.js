import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeList } from '../actions/employee.action';
import Employee from '../components/employee/employee';
import Loader from '../components/loader/Loader';
import './employee.css';


const Employees = ({onSelect, variant}) => {
    const dispatch = useDispatch();
    const employeeSelector= useSelector(state => state.employee);
    const {loading, employees=[]} = employeeSelector;
    useEffect(() => {
        setTimeout(() => dispatch(getEmployeeList()), 3000);
    },[])
    return <>
        <div className="employee-container">
        {loading? <Loader>

        </Loader>: <>
           { employees.map(employee => <Employee key={employee.id} employee={employee}></Employee>)}
         </>}
       
    </div>
    </>
}

export default Employees;