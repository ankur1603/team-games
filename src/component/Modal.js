import React from 'react'

function Modal(props) {
  return (
    <>
    {(props.triggerButton)?
        <button type="button"
                    className={`btn btn-${props.triggerButtonType}`} data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
                    {props.triggerButtonLabel}
                  </button> :<></>
    }
    
<div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${props.id}Label`} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id={`${props.id}Label`}><div dangerouslySetInnerHTML={{ __html:props.title }}/></h1>
        {props.needRejectBtn ?<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>:<></>}
      </div>
      <div className="modal-body">
        {props.body}
      </div>
      <div className="modal-footer">
        {props.needRejectBtn ? <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{props.rejectLabel}</button>:<></>}
        {props.needAcceptBtn ? <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={props.confirmFunc}>{props.acceptLabel}</button>:<></>}
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Modal
Modal.defaultProps = {
    triggerButton: true,
    needRejectBtn: true,
    needAcceptBtn: true,
    triggerButtonType: "danger", 
    acceptLabel: "Understood",
    rejectLabel: "Cancel"
}