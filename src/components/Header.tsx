import React from 'react';

const Header: React.FC = () => {

  const handleGraphsClick = () => {
    const graphs = document.getElementById('graphs');
    if (graphs) {
      graphs.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTablesClick = () => {
    const tables = document.getElementById('tables');
    if (tables) {
      tables.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='Header'>
        <h1>Fun with graphs, tables with SASS</h1>
        <ul>
            <li>
            <button onClick={handleGraphsClick}>Graphs</button> 
            </li>
            <li>
            <button onClick={handleTablesClick}>Tables</button>
            </li>
        </ul>
    </div>
  )
}

export default Header