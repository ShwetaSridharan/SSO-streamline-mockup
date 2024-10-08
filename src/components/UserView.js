import React from 'react';

const UserView = ({ currentUser, onRequestProvisioning }) => {
  return (
    <div>
      <h2>User View</h2>
      {currentUser ? (
        <>
          <p>Welcome, {currentUser.email}</p>
          {!currentUser.provisioned && !currentUser.requested && (
            <button onClick={() => onRequestProvisioning(currentUser.email)}>
              Request SSO Provisioning
            </button>
          )}
          {currentUser.requested && <p>SSO Provisioning requested.</p>}
        </>
      ) : (
        <p>Please select a user.</p>
      )}
    </div>
  );
};

export default UserView;