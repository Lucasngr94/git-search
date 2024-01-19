import React, { useState } from 'react';
import Search from '../pages/Search/Search';

const Api = () => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        console.error('Error fetching user data');
        return null;
      }

      const userData = await response.json();
      setData(userData);

      return userData;
    } catch (error) {
      console.error('Error fetching user data', error);
      return null;
    }
  };

  return (
    <>
      <Search userApi={getUser} setUsername={setUsername} />
      {data && (
        <div>
          <h2>User Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Api;
