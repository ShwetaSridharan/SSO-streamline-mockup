import React, { useState } from 'react';
import { addUser, requestProvisioning, useUserData, fastForward } from './utils/ssoChecker';
import './styles/App.css';

const AddUserForm = ({ onAddUser }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(email);
    setMessage(`User ${email} has been added successfully.`);
    setEmail('');
    setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <button type="submit">Add User</button>
      {message && <p className="success-message">{message}</p>}
    </form>
  );
};

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
          {currentUser.requested && <p style={{color:'black',fontWeight:'bold'}}>SSO Provisioning requested.</p>}
        </>
      ) : (
        <p>Please select a user.</p>
      )}
    </div>
  );
};

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

const App = () => {
  const [view, setView] = useState('add');
  const [currentUser, setCurrentUser] = useState(null);
  const { users, unprovisionedUsers, currentTime } = useUserData();

  const handleAddUser = (email) => {
    addUser(email);
  };

  const handleRequestProvisioning = (email) => {
    requestProvisioning(email);
  };

  const handleFastForward = () => {
    fastForward(24);
  };

  return (
    <div className="asana-layout">
      <nav className="asana-sidebar">
        <button onClick={() => setView('add')}>Add User</button>
        <button onClick={() => setView('user')}>User View</button>
        <button onClick={() => setView('admin')}>Admin View</button>
      </nav>
      <main className="asana-main">
        <div className="asana-card time-control">
          <h3>Simulated Time: {currentTime.toLocaleString()}</h3>
          <button onClick={handleFastForward}>Fast Forward 24h</button>
        </div>
        {view === 'add' && (
          <div className="asana-card">
            <h2>Add New User</h2>
            <AddUserForm onAddUser={handleAddUser} />
          </div>
        )}
        {view === 'user' && (
          <div className="asana-card">
            <UserView currentUser={currentUser} onRequestProvisioning={handleRequestProvisioning} />
            <select onChange={(e) => setCurrentUser(users.find(u => u.email === e.target.value))}>
              <option value="">Select a user</option>
              {users.map((user) => (
                <option key={user.email} value={user.email}>{user.email}</option>
              ))}
            </select>
          </div>
        )}
        {view === 'admin' && (
          <div className="asana-card">
            <AdminView unprovisionedUsers={unprovisionedUsers} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;