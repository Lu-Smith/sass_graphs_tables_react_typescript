import React, { useState, useEffect, useRef  } from 'react';
import Tables from './Tables';
import Graphs from './Graphs';

interface DataProps {
  date: string,
  name: string;
  sector_id: string
}

const Main: React.FC = () => {
  const graphRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  
  const scrollToGraph = () => {
    if (graphRef.current) {
      graphRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTable = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div ref={graphRef}>
        <Graphs data={data} />
      </div>
      <div ref={tableRef}>
        <Tables data={data} />
      </div>
    </div>
  )
}

export default Main