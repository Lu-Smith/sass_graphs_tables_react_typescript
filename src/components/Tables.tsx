import React from 'react';

interface DataProps {
    date: string,
    name: string;
    sector_id: string
}

const Tables = (props: { data: DataProps[] }) => {
  return (
    <div className='Tables'>
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
  )
}

export default Tables