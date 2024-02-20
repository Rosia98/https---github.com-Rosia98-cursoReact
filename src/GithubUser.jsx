import React, { useState, useEffect } from 'react';

export function GithubUser(){
    const [searchInput, setSearchInput] = useState('');
    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState(null);

    function handleSearchInputChange(e){
        setSearchInput(e.target.value);
      };
    
      async function handleSearchSubmit(e){
        e.preventDefault();

        try {
            const response = await fetch(`https://api.github.com/search/users?q=${searchInput}`);
            if (response.ok) {
              const data = await response.json();
              setUsers(data.items);
              setError(null);
            } else {
              setError('Error searching for users');
            }
          } catch (error) {
            setError('Error searching for users');
          }
    };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="searchInput">Search Github Users:</label>
        <input
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <GithubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
};

