import React, { useEffect, useState } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from "react-chartjs-2";
ChartJS.register (
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

interface DataProps {
    date: string,
    name: string,
    sector_id: string,
};

interface DataSetsProps {
    label: string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
};

const Graphs = (props: { data: DataProps[] }) => {
    const [chartData, setChartData] = useState<{labels: string[]; datasets: DataSetsProps[]}>({
        labels: [], datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:  ["John", "Kevin", "Luna", "Ali", "ALice"],
            datasets: [{
                label: "I am here",
                data: [12, 55, 66, 20, 10],
                borderColor: "rgb(53, 162, 250)",
                backgroundColor: "rgba(123, 62, 50, 0.4)",
            }
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Who is here?"
                }
            }
        })
    }, []);



  return (
    <div className='Graphs'>
        <Bar options={chartOptions} data={chartData} />
    </div>
  )

  
}

export default Graphs