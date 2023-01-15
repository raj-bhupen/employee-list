import  './modal.css';


const Modal = ({children,  onOkClick, onCancelClick, isOpen, title, disabledOk, size="md"}) => {
    return <div id="myModal" className={`modal ${isOpen && 'show'}`}>
    <div className={`modal-container ${size}`}>
    <div className="modal-header">
        {title}
      <span className="close" onClcik={onCancelClick}>&times;</span>
      </div>
      <div className="modal-content">
      {children}
      </div>      
      <div className="modal-footer">
        <div>
          <button onClick={onCancelClick}> Cancel</button>
          <button disabled={disabledOk} onClick={onOkClick}> Ok</button>
        </div>
      </div>
    </div>
    
  </div>
}

export default Modal;