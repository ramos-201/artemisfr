import React, { useState, useEffect } from 'react';
import axios from "axios";

const ConnStatus = () => {
  const [status, setStatus] = useState(null);

  const fetchConnStatus = async () => {
    try {
      const response = await axios.get('http://localhost:8000/conn_status');
      console.log(response.data);
      setStatus('Success');
    } catch (error) {
      console.error('Error fetching connection status:', error);
      setStatus('Failed');
    }
  };

  useEffect(() => {
    fetchConnStatus();
  }, []);
  
  if (status === null) {
    return <h1>Loading...</h1>;
  } else if (status === 'Failed') {
    return <h1>Failed to connect</h1>;
  } else if (status === 'Success') {
    return <h1>Connected Successfully</h1>;
  }
};

export default ConnStatus;
