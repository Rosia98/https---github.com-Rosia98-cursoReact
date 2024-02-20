import React, { useState, useEffect } from 'react'
import { useGithubUser } from './useGithubUser'

export function GithubUser(){
    const { userData, error } = useGithubUser(username)

    return (
        <div>
        {error && <p>{error}</p>}

        {userData && (
            <div>
              <h2>{userData.name}</h2>
             <p>Login: {userData.login}</p>
             <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px', height: '100px' }} />
            </div>
          )}
        </div>
  )
}

