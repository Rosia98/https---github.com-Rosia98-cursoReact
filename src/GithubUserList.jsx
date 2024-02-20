import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GiuthubUserList(){
    const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers(){
      try {
        const response = await fetch('https://api.github.com/users')
        if (response.ok) {
          const data = await response.json()
          setUsers(data);
        } else {
          console.error('Error fetching GitHub users')
        }
      } catch (error) {
        console.error('Error fetching GitHub users', error)
      }
    }

    fetchUsers();
  }, [])

  return (
    <div>
      <h2>Github User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}