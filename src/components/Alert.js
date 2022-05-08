import React from 'react'
import './Alert.css'
const Alert = ({ handleOK, handleCancel, alertVis }) => {
    return (
        <div className="modal" style={{ display: alertVis ? "block" : "none" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <p>Are you Sure?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>No</button>
                        <button type="button" className="btn btn-primary" onClick={handleOK}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert