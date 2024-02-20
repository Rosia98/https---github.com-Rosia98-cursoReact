import { useState, useEffect } from 'react'

export function useGithubUser(username){
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUserData(){
      try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (response.ok) {
          const data = await response.json()
          setUserData(data)
          setError(null)
        } else {
          setError('Error fetching user data')
        }
      } catch (error) {
        setError('Error fetching user data')
      }
    };

    if (username) {
      fetchUserData()
    }
  }, [username])

  return { userData, error }
}
