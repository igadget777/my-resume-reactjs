import React, { useEffect, useState } from 'react'
import API from '../invoke-url';

const Visits = () => {
  const [visits, setVisits] = useState('');

  useEffect(() => {    
    const url = API + '/visits';

    const getVisits = async (url) => {
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      try {
        let response = await fetch(url, options);
        if (response.ok) {
          if (response.status === 200) {
            let json = await response.json();
            setVisits(json.visits)
          }
        }
      } catch (error) {
        console.error(`HTTP-Error: ${error.message}`)
      }
    }
    
    getVisits(url);   

  }, [])
  return (
    <div className="site-visits">You are visitor #: <span>{ visits }</span></div>
  )
}

export default Visits