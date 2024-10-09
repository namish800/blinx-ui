import { useEffect, useState } from 'react';
import Papa from 'papaparse';

interface CSVData {
  [key: string]: string;
}

interface CSVViewerProps {
  csvUrl: string;
}

export default function CSVViewer({ csvUrl }: CSVViewerProps) {
  const [data, setData] = useState<CSVData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(csvUrl);
        if (!response.ok) throw new Error('Failed to fetch CSV file.');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true, // Convert rows into objects with keys
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data as CSVData[]);
            setLoading(false);
          },
          error: (error) => {
            setError(error.message);
            setLoading(false);
          },
        });
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };

    fetchCSV();
  }, [csvUrl]);

  if (loading) return <p>Loading CSV data...</p>;
  if (error) return <p>Error loading CSV data: {error}</p>;

  return (
    <div className="csv-container">
      <h3>CSV Data</h3>
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, cellIndex) => (
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .csv-container {
          margin-top: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 8px;
          border: 1px solid #ddd;
          text-align: left;
        }

        th {
          background-color: #333;
          color: #fff;
        }

        td {
          background-color: #fff;
          color: #333;
        }
      `}</style>
    </div>
  );
}
