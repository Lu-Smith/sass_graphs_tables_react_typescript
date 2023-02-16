import React, { useState, useEffect } from 'react';

interface DataProps {
  date: string,
  name: string;
  sector_id: string

}

const Main: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://substantiveresearch.pythonanywhere.com/')
      .then(response => response.json())
      .then(data => setData(data));
      console.log(data);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Main'>
      <h2>Graph 1</h2>
      {data.map((insideData: DataProps, index:number) => {
        return (
          <div key={index}>
            <p>{insideData.date}</p>
            <p>{insideData.name}</p>
            <p>{insideData.sector_id}</p>
            </div>
        )
      })}

    </div>
  )
}

export default Main