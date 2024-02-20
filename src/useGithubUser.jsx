import { useState, useEffect } from 'react'
import useSWR from 'swr';

async function fetcher(url){
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
};
export function useGithubUser(username){
  const apiUrl =  username ? `https://api.github.com/users/${username}` : null
  const { data, error } = useSWR(apiUrl, fetcher)

  return {  
    user: data,
    isLoading: !error && !data,
    isError: error }
}
