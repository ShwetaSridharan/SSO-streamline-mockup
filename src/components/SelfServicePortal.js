import React, { useState } from 'react';

const SelfServicePortal = () => {
  const [message, setMessage] = useState('');

  const handleRequest = () => {
    setMessage('SSO Provisioning request sent. Please check your email for further instructions.');
  };

  return (
    <div className="self-service-portal">
      <h2>Self-Service Portal</h2>
      <button onClick={handleRequest}>Request SSO Provisioning</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SelfServicePortal;