import React, { useState, useEffect } from 'react';

export function GithubUser({ username }){
  const [userData, setUserData] = useState(null);

  useEffect(() => {
   async function fetchUserData(){
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Error fetching user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>Login: {userData.login}</p>
          <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px', height: '100px' }} />
        </div>
      ) : (
        <p>Cargando usuario...</p>
      )}
    </div>
  );
};

export default GithubUser;
