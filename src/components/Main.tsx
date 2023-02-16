import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
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
      console.log(data);
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Main'>
      <h2>Graph 1</h2>
      <Graphs data={data} />
      <h2>Table 1</h2>
      <Tables data={data} />
    </div>
  )
}

export default Main