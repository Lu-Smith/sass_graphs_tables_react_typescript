import React from 'react';

interface DataProps {
    date: string,
    name: string;
    sector_id: string
}

const Graphs = (props: { data: DataProps[] }) => {
  return (
    <div>Graphs</div>
  )
}

export default Graphs