
import { useState, useEffect } from 'react';

export const useProjectLogger = () => {
  const [logEntries, setLogEntries] = useState<string[]>([]);

  // Function to log project steps to CSV
  const logProjectStep = (step: number, description: string, files: string, status: string) => {
    const timestamp = new Date().toISOString();
    const csvEntry = `${step},${timestamp},"${description}","${files}",${status}`;
    
    // In a real application, this would write to the actual CSV file
    // For demo purposes, we'll store in state
    setLogEntries(prev => [...prev, csvEntry]);
    console.log('Project Step Logged:', csvEntry);
  };

  useEffect(() => {
    // Log the initial page load
    logProjectStep(9, 'Removed More Projects Coming Soon section and Learn More buttons', 'Index.tsx', 'Complete');
  }, []);

  return { logEntries, logProjectStep };
};
