"use client"

import Modal from "@mui/material/Modal"
import './style.scss'
import { useState } from "react";

interface CustomerDataProps {
    setOpenCustomerDataPopup: any,
    openCustomerDataPopup: boolean
}

export default function CustomerData (props: CustomerDataProps){
    const [file, setFile] = useState<any>("");
    return(
        <Modal
        className="modalContainer"
        open={props?.openCustomerDataPopup}
        onClose={() => props?.setOpenCustomerDataPopup(!props?.openCustomerDataPopup)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <div className="addCustomerData poppins">
                <h1>Upload Customer Data</h1>
                <input type="file" className="appInput" value={file} onChange={(event) => setFile(event.target.files)} name="customerData"/>
            </div>
        </Modal>
    )
}