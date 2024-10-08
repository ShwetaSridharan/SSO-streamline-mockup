import React from 'react';

const AdminView = ({ unprovisionedUsers }) => {
  return (
    <div>
      <h2>Admin View</h2>
      <h3>Pending SSO Provisioning</h3>
      {unprovisionedUsers.length === 0 ? (
        <p>No users pending provisioning.</p>
      ) : (
        <ul>
          {unprovisionedUsers.map((user) => (
            <li key={user.email}>{user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminView;