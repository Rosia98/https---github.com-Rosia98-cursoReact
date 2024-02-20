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
  const apiUrl = `https://api.github.com/users/${username}`;
  const { data, error } = useSWR(apiUrl, fetcher);

  return { userData, error }
}
