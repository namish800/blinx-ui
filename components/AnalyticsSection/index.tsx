'use client'

import './style.scss';
import { useEffect, useState } from 'react';
import CustomerData from '../CustomerData';


// Define the interface for the response structure
interface FileData {
    file_name: string;
    file_url: string;
  }

  
const AnalyticSection = () => {
    const [files, setFiles] = useState<FileData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const[openCustomerDataPopup, setOpenCustomerDataPopup] = useState(false)

    useEffect(() => {
        // Fetch the list of files from the API
        const fetchFiles = async () => {
        try {
            const response = await fetch(
            "https://blinx-backend-eze3e9drepffcte5.centralindia-01.azurewebsites.net//getCSVFiles?user_id=a093b5be-ab1c-46eb-bdca-1ee223c6a948"
            );
            if (!response.ok) {
            throw new Error("Failed to fetch files.");
            }
            const data = await response.json();
            setFiles(data.files);
        } catch (err) {
            setError((err as Error).message || "An unknown error occurred");
        } finally {
            setLoading(false);
        }
        };

        fetchFiles();
    }, []);


    
    return(
        <div className="analytics-section-wrapper">
            <h2 className="sectionHeading">Analytics</h2>
            <button className="appButton">+ Connect Social Account</button>
            <button className='appButton' onClick={() => setOpenCustomerDataPopup(!openCustomerDataPopup)}>+ Upload Customer Data</button>


            <CustomerData openCustomerDataPopup={openCustomerDataPopup} setOpenCustomerDataPopup={setOpenCustomerDataPopup} />
            <section className="filesection">
                <h2>Uploaded Files</h2>
                {loading && <p>Loading files...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && !error && files.length === 0 && <p>No files uploaded yet.</p>}
                <ul>
                {files.map((file, index) => (
                    <li key={index}>
                    <a href={file.file_url} target="_blank" rel="noopener noreferrer">
                        {file.file_name}
                    </a>
                    </li>
                ))}
                </ul>
            </section>
        </div>
        
    )
}


export default AnalyticSection