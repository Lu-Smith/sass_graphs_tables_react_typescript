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
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Main'>
      <h2>Graph 1</h2>
          <div >
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Sector</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((insideData: DataProps, index:number) => {
                    return (
                        <tr key={index}>
                          <td>{insideData.date}</td>
                          <td>{insideData.name}</td>
                          <td>{insideData.sector_id}</td>
                          </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default Main