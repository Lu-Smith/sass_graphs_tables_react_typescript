import React, { useState, useEffect } from 'react';
import Tables from './Tables';
import Graphs from './Graphs';

interface DataProps {
  date: string,
  name: string;
  sector_id: string
}

const Main: React.FC = () => {
  const [data, setData] = useState<DataProps[] | null>(null);

  useEffect(() => {
    fetch('http://substantiveresearch.pythonanywhere.com/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Main'>
      <Graphs data={data} />
      <Tables data={data} />
    </div>
  )
}

export default Main