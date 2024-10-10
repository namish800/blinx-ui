"use client"

import Modal from "@mui/material/Modal";
import './style.scss';
import { useState } from "react";

interface CustomerDataProps {
  setOpenCustomerDataPopup: any;
  openCustomerDataPopup: boolean;
}

export default function CustomerData(props: CustomerDataProps) {
  const [file, setFile] = useState<File | null>(null); // Update file type to File
  const [uploadStatus, setUploadStatus] = useState<string | null>(null); // Status for upload
  const [loading, setLoading] = useState<boolean>(false);

  const userId = 'a093b5be-ab1c-46eb-bdca-1ee223c6a948'; // Simulate user_id for now

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]); // Set the first file
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setUploadStatus('Please select a file.');
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append('file', file); // Append the selected file
    formData.append('user_id', userId); // Append the user ID

    setLoading(true);
    setUploadStatus(null); // Clear any previous status

    try {
      const response = await fetch('https://blinx-backend-eze3e9drepffcte5.centralindia-01.azurewebsites.net/uploadCSV', {
        method: 'POST',
        body: formData, // Send the form data
      });

      if (response.ok) {
        setUploadStatus('File uploaded successfully!');
      } else {
        setUploadStatus('File upload failed.');
      }
    } catch (err) {
      setUploadStatus('An error occurred during file upload.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      className="modalContainer"
      open={props?.openCustomerDataPopup}
      onClose={() => props?.setOpenCustomerDataPopup(!props?.openCustomerDataPopup)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="addCustomerData poppins">
        <h1>Upload Customer Data</h1>
        <input
          type="file"
          className="appInput"
          onChange={handleFileChange}
          name="customerData"
        />
        {loading ? <p>Uploading...</p> : <button onClick={handleSubmit} className="appButton">Upload</button>}

        {/* Display upload status */}
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </Modal>
  );
}
