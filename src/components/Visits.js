import React, { useEffect, useState } from 'react'
import getVisits from '../services/visits';

const Visits = (props) => {
  const { api } = props;
  const [visits, setVisits] = useState('');

  useEffect(() => {
    const url = api + '/visits';
    let data = getVisits(url);
    setVisits(data.visits)

  }, [api])
  return (
    <div className="site-visits">You are visitor #: <span>{ visits }</span></div>
  )
}

export default Visits