import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import AdminView from './components/AdminView';
import InstructionsCard from './components/InstructionsCard';
import UserView from './components/UserView';
import TimeControl from './components/TimeControl';
import { addUser, requestProvisioning, useUserData, fastForward } from './utils/ssoChecker';
import './styles/App.css';

const App = () => {
  const [view, setView] = useState('instructions');
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
        <button onClick={() => setView('instructions')}>Instructions</button>
        <button onClick={() => setView('add')}>Add User</button>
        <button onClick={() => setView('user')}>User View</button>
        <button onClick={() => setView('admin')}>Admin View</button>
      </nav>
      <main className="asana-main">
        <TimeControl currentTime={currentTime} onFastForward={handleFastForward} />
        {view === 'instructions' && <InstructionsCard />}
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