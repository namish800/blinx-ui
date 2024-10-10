'use client'


import './style.scss';
import { useState } from 'react';
import CustomerData from '../CustomerData';


const AnalyticSection = () => {
    const[openCustomerDataPopup, setOpenCustomerDataPopup] = useState(false)
    return(
        <div className="analytics-section-wrapper">
            <h2 className="sectionHeading">Analytics</h2>
            <button className="appButton">+ Connect Social Account</button>
            <button className='appButton' onClick={() => setOpenCustomerDataPopup(!openCustomerDataPopup)}>+ Upload Customer Data</button>


            <CustomerData openCustomerDataPopup={openCustomerDataPopup} setOpenCustomerDataPopup={setOpenCustomerDataPopup} />
        </div>
    )
}


export default AnalyticSection