import React from 'react';

const InstructionsCard = () => {
  return (
    <div className="asana-card instructions-card">
      <h2>How to Test SSO Streamline Mock-up</h2>
      <ol style={{paddingLeft:'1.5rem'}}>
        <li>Add a new user in the "Add User" view.</li>
        <li>Switch to "User View" and select the newly added user.</li>
        <li>Request SSO provisioning for the user.</li>
        <li>Go to "Admin View" to see pending provisioning requests.</li>
        <li>Click the "Fast Forward 24h" button TWICE to simulate time passing.</li>
        <li>Check "Admin View" again to see updated provisioning status.</li>
      </ol>
      <p>Note: The system considers users for provisioning 24-48 hours after they're added.</p>
    </div>
  );
};

export default InstructionsCard;