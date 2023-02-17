import React from 'react';
import CountItems from './CountItems';

interface DataProps {
    date: string,
    name: string;
    sector_id: string
}

const Tables = (props: { data: DataProps[] }) => {

    const itemCounts = CountItems(props.data);
  return (
    <div className='Tables' id="tables">
        <div className='tableContainer'>
        <h2>Table 1</h2>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Interaction</th>
                </tr>
            </thead>
            <tbody>
              {Array.from(itemCounts.entries()).map(([key, value]) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
        <div className='tableContainer'>
        <h2>Table 2</h2>
        <table>
            <thead>
                <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Sector</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((insideData: DataProps, index:number) => {
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

export default Tables