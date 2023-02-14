import React, { useState, useEffect } from 'react';

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
    </div>
  )
}

export default Main