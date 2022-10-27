import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ alertVis, handleOK, handleCancel }) => {
    return (
        <>
            <div class="modal" tabindex="-1" style={{ display: alertVis ? "block" : "none" }} onBlur={handleCancel}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header bold">
                            <h5 class="modal-title fs-3 fw-bold ">Are You Sure?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel} />
                        </div>
                        <div class="modal-body">
                            <p>Do you want to delete this task?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>No</button>
                            <button type="button" class="btn btn-primary" onClick={handleOK}>Yaa, Ofcourse</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alert;
