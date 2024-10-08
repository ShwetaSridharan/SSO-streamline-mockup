import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(email);
    setMessage(`User ${email} has been added successfully.`);
    setEmail('');
    setTimeout(() => setMessage(''), 3000);
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

export default AddUserForm;