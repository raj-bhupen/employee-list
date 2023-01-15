import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneSquareAlt, faGlobe, faHeart, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { editEmployee, removeEmployee, toggleLikeEvent } from '../../actions/employee.action';
import Modal from '../modal/modal';
import EmployeeEdit from '../employee-edit';

const Employee = ({employee}) => {
    const dispatch = useDispatch();
    const [openEdit, showEditModal]=useState(false);
    const [openDelete, showDeleteModal]=useState(false);
    const [editRecord, setEditRecord]= useState();
    
    const likeEmployee=() => {
        dispatch(toggleLikeEvent(employee.id));
    }
    const onEditEmployee = () => {
        setEditRecord(employee);
        showEditModal(true);       
    }

    const onDeleteEmployee = () => {
        showDeleteModal(true);       
    }
    const hideEditModal = () => {
        setEditRecord(null);
        showEditModal(false);       
    }

    const hideDelteModal =() => {
        showDeleteModal(false);      
    }
    
    const onEditField = (field, value) => {
        setEditRecord({...editRecord, [field]: value})
    }

    const performEditOperation = () => {
        dispatch(editEmployee(editRecord));
        hideEditModal();
    }

    const performDeleteOperation = () => {
        dispatch(removeEmployee(employee.id));
        hideDelteModal();
    }

    return <>
            <div className="employee">
                <img alt={employee.username} src={`https://avatars.dicebear.com/v2/avataaars/${employee.username}.svg?options[mood][]=happy`}></img>
                <div className="info">
                    <div>
                        <b>{employee.name}</b>
                    </div>
                    <div>
                       <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
                       <a href={`mailto:${employee.email}`}>{employee.email}</a>
                    </div>
                    <div>
                       <FontAwesomeIcon icon={faPhoneSquareAlt} className="icon"></FontAwesomeIcon>
                       <a href={`tel:${employee.phone}`}>{employee.phone}</a>
                    </div>
                    <div>
                       <FontAwesomeIcon icon={faGlobe} className="icon"></FontAwesomeIcon>
                       <a href={employee.website} target="_blank" rel="noreferrer" >{employee.website}</a>
                    </div>                    
                </div>
                <div className="action">
                    <div onClick={likeEmployee}><FontAwesomeIcon icon={faHeart}  className={`icon ${employee.isLiked? 'red': 'white'}`}></FontAwesomeIcon></div>
                    <div onClick={onEditEmployee}><FontAwesomeIcon icon={faPencil} className="icon"></FontAwesomeIcon></div>
                    <div onClick={onDeleteEmployee}><FontAwesomeIcon icon={faTrash} className="icon"></FontAwesomeIcon></div>
                </div>
                {openEdit && editRecord && <Modal 
                        isOpen={openEdit} 
                        title="Basic Modal"
                        onCancelClick={hideEditModal}
                        onOkClick={performEditOperation}
                        disabledOk={!(editRecord.name 
                                    && editRecord.phone
                                    && editRecord.website
                                    && editRecord.email)}>
                    <>
                        <EmployeeEdit onChange={onEditField} record={editRecord}/>
                    </>
                </Modal>}
                {openDelete && <Modal 
                        isOpen={openDelete} 
                        title="Basic Modal"
                        onCancelClick={hideDelteModal}
                        onOkClick={performDeleteOperation}>
                    <>
                        Do you want to delte User {employee.name}
                    </>
                </Modal>}
            </div> 
    </>
}

export default Employee;