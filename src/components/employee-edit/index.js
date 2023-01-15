import './employee-edit.css';


const EmployeeEdit = ({onChange, record}) => {
    return <div>
        <div className="form-control">
            <div className="form-label"><span className="required">*</span> Name: </div>
            <input defaultValue={record.name} onChange={(event) => onChange('name', event.target.value)}/>
        </div>
        <div className="form-control">
            <div className="form-label">
                <span className="required">*</span> Email: 
            </div>
            <input defaultValue={record.email} onChange={(event) => onChange('email', event.target.value)}/>
        </div>
        <div className="form-control">
        <div className="form-label">
                <span className="required">*</span> Phone: 
            </div>
        <input defaultValue={record.phone} onChange={(event) => onChange('phone', event.target.value)}/>
        </div>
        <div className="form-control">
            <div className="form-label">
                <span className="required">*</span> Website: 
            </div>
             <input defaultValue={record.website} onChange={(event) => onChange('website', event.target.value)}/>
        </div>
    </div>
}

export default EmployeeEdit;