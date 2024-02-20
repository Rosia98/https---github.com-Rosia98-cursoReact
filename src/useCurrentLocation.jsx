import { useState, useEffect } from 'react'
export function useCurrentLocation(){
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      function getLocation(){
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setLoading(false)
          },
          (err) => {
            setError('Error getting location')
            setLoading(false)
          }
        );
      };
  
      if (navigator.geolocation) {
        getLocation();
      } else {
        setError('Geolocation is not supported by your browser')
        setLoading(false)
      }
    }, []);
  
    const getCurrentLocation = () => {
      setLoading(true)
      setError(null)
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          setLoading(false)
        },
        (err) => {
          setError('Error getting location')
          setLoading(false)
        }
      )
    }
  
    return { location, error, loading, getCurrentLocation }
}