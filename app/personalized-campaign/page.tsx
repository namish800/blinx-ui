"use client";

import { useState, useEffect } from 'react';
import './style.scss'

// Define the interface for the file list API response
interface FileListResponse {
  files: string[];
}

// Define the interface for the response of the marketing API
interface MarketingResponse {
  session_id: string;
  status: string;
  result?: string;
}

interface TaskStatusResponse {
  session_id: string;
  result?: string;
  status: string;
}

const userId = 'a093b5be-ab1c-46eb-bdca-1ee223c6a948'; // Hardcoded for simplicity

export default function CampaignPage() {
  const [files, setFiles] = useState<string[]>([]);
  const [campaignObjective, setCampaignObjective] = useState<string>('product launch');
  const [campaignDetails, setCampaignDetails] = useState<string>('');
  const [selectedFileName, setSelectedFileName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Track loading status
  const [error, setError] = useState<string>('');
  const [result, setResult] = useState<MarketingResponse | null>(null);

  // Fetch the list of files uploaded by the user
  useEffect(() => {
    const fetchFiles = async () => {
      let files = ['test_size_5.csv']; // Simulating the fetch request with static data
      setFiles(files);
    };
    fetchFiles();

    // Load stored response (session_id, result, status) from localStorage if available
    const storedResponse = localStorage.getItem('campaignResponse');
    if (storedResponse) {
      const parsedResponse: MarketingResponse = JSON.parse(storedResponse);
      setResult(parsedResponse);

      // If it's still processing, show loading screen and continue polling
      if (parsedResponse.status === 'processing') {
        setLoading(true);
        pollStatus(parsedResponse.session_id);
      }
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFileName) {
      setError('Please select a file.');
      return;
    }

    setError('');
    setLoading(true);

    // Clear previous result if new campaign is submitted
    localStorage.removeItem('campaignResponse');
    setResult(null);

    // Submit the campaign data
    try {
      const response = await fetch('https://blinx-backend-eze3e9drepffcte5.centralindia-01.azurewebsites.net/personalized_marketing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          objective: campaignObjective,
          details: campaignDetails,
          file_name: selectedFileName,
          user_id: userId,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit campaign.');

      const data: MarketingResponse = await response.json();
      setResult(data); // Save response locally
      localStorage.setItem('campaignResponse', JSON.stringify(data)); // Save response in localStorage
      pollStatus(data.session_id); // Start polling the status of the request
    } catch (err) {
      const errorMessage = (err as Error).message || 'An unknown error occurred';
      setError('Error submitting campaign: ' + errorMessage);
      setLoading(false);
    }
  };

  // Poll the task status until it's completed or failed
  const pollStatus = (sessionId: string) => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch(`https://blinx-backend-eze3e9drepffcte5.centralindia-01.azurewebsites.net/poll-csv/${sessionId}`);
        if (!response.ok) throw new Error('Failed to get task status.');

        const data: TaskStatusResponse = await response.json();
        if (data.status === 'completed') {
          clearInterval(intervalId);
          if (data.result) {
            const updatedResult: MarketingResponse = { session_id: sessionId, status: data.status, result: data.result };
            setResult(updatedResult);
            localStorage.setItem('campaignResponse', JSON.stringify(updatedResult)); // Update in localStorage
            setLoading(false);
          }
        } else if (data.status === 'failed') {
          clearInterval(intervalId);
          setError('Campaign processing failed.');
          setLoading(false);
        }
      } catch (err) {
        clearInterval(intervalId);
        const errorMessage = (err as Error).message || 'An unknown error occurred';
        setError('Error polling task status: ' + errorMessage);
        setLoading(false);
      }
    }, 5000); // Poll every 5 seconds
  };

  return (
    <div className="personalized-campaign poppins">
      <h1>Campaign Submission</h1>

      {error && <p className="error">{error}</p>}
      
      {loading && <p>Processing your campaign... Please wait.</p>}
      
      {!loading && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            {/* Campaign Objective Dropdown */}
            <label htmlFor="objective">Campaign Objective</label>
            <select
              id="objective"
              value={campaignObjective}
              onChange={(e) => setCampaignObjective(e.target.value)}
            >
              <option value="product launch">Product Launch</option>
              <option value="brand awareness">Brand Awareness</option>
              <option value="lead generation">Lead Generation</option>
              <option value="customer engagement">Customer Engagement</option>
            </select>
          </div>

          <div className="form-group">
            {/* Campaign Details Textarea */}
            <label htmlFor="details">Campaign Details</label>
            <textarea
              className='appInput'
              id="details"
              value={campaignDetails}
              onChange={(e) => setCampaignDetails(e.target.value)}
              placeholder="Enter details of the campaign"
              required
            />
          </div>

          <div className="form-group">
            {/* File Selection Dropdown */}
            <label htmlFor="file_name">Select a File</label>
            <select
              id="file_name"
              value={selectedFileName}
              onChange={(e) => setSelectedFileName(e.target.value)}
              required
            >
              <option value="">-- Select a file --</option>
              {files.map((file, index) => (
                <option key={index} value={file}>
                  {file}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className=" appButton">Submit Campaign</button>
        </form>
      )}

      {/* Show the result URL if the campaign is completed */}
      {result?.result && (
        <div className="result">
          <h3>Campaign Result</h3>
          <a href={result.result} target="_blank" rel="noopener noreferrer" className="result-link">
            Download Result
          </a>

          {/* <CSVViewer csvUrl={result.result} /> */}
        </div>
      )}
    </div>
  );
}
