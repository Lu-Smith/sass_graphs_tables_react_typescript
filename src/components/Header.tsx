import React from 'react';

interface HeaderProps {
  scrollToGraph: () => void;
  scrollToTable: () => void;
}


const Header: React.FC<HeaderProps> = ({ scrollToGraph, scrollToTable }) => {

  return (
    <div className='Header'>
        <h1>Fun with graphs, tables with SASS</h1>
        <ul>
            <li><button onClick={scrollToGraph}>GRAPHS</button></li>
            <li><button onClick={scrollToTable}>TABLES</button></li>
        </ul>
    </div>
  )
}

export default Header