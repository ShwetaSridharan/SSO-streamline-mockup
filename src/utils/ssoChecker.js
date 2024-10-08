import { useState, useEffect } from 'react';

let users = [];
let simulatedTime = new Date();

export const addUser = (email) => {
  const user = { email, invited_at: simulatedTime, provisioned: false };
  users.push(user);
};

export const requestProvisioning = (email) => {
  const user = users.find(u => u.email === email);
  if (user) {
    user.requested = true;
  }
};

export const getUnprovisionedUsers = () => {
  const threshold = new Date(simulatedTime.getTime() - 24 * 60 * 60 * 1000);
  return users.filter(user => !user.provisioned && user.invited_at < threshold);
};

export const fastForward = (hours) => {
  simulatedTime = new Date(simulatedTime.getTime() + hours * 60 * 60 * 1000);
};

export const useUserData = () => {
  const [userData, setUserData] = useState({ users: [], unprovisionedUsers: [], currentTime: simulatedTime });

  useEffect(() => {
    const interval = setInterval(() => {
      setUserData({
        users: users,
        unprovisionedUsers: getUnprovisionedUsers(),
        currentTime: simulatedTime
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return userData;
};