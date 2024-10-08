import React from 'react';

const SSOProvisioningNotification = ({ users }) => {
  return (
    <div className="sso-notification">
      <h2>Pending SSO Provisioning</h2>
      {users.length === 0 ? (
        <p>No users pending provisioning.</p>
      ) : (
        <ul>
          {users.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SSOProvisioningNotification;