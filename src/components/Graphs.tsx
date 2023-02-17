import React, { useEffect, useState } from 'react';
import {Chart as ChartJS, ArcElement, LineElement, BarElement, PointElement, BarController, LineController, CategoryScale, LinearScale, Tooltip, Title, Legend} from 'chart.js';
import {Bar, Pie} from "react-chartjs-2";
import CountItems from './CountItems';
ChartJS.register (
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement, BarController, LineController, CategoryScale
)

interface DataProps {
    date: string,
    name: string,
    sector_id: string,
};

interface DataSetsBar {
    label: string,
    data: number[],
    borderColor: string,
    backgroundColor: string,
};

interface DataSetsPie {
    label: string,
    data: number[],
    backgroundColor: string[],
    hoverOffset: number,
};

const Graphs = (props: { data: DataProps[] }) => {
    const [chartDataBar, setChartDataBar] = useState<{labels: string[]; datasets: DataSetsBar[]}>({
        labels: [], datasets: [],
    });

    const [chartDataPie, setChartDataPie] = useState<{labels: string[]; datasets: DataSetsPie[]}>({
        labels: [], datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});
    const itemCounts = CountItems(props.data);

    const keysArray = Array.from(itemCounts.keys());
    const valuesArray = Array.from(itemCounts.values());

    console.log(keysArray);


    useEffect(() => {
        setChartDataBar({
            labels: keysArray,
            datasets: [{
                label: "Interactions",
                data: valuesArray,
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
                    text: "A client interaction with a sector."
                }
            }
        });
        setChartDataPie({
            labels: keysArray,
            datasets: [{
                label: "Interactions",
                data: valuesArray,
                backgroundColor: [
                    "rgb(189, 117, 103)",
                    "rgb(41, 172, 51)",
                    "rgb(206, 42, 165)",
                    "rgb(38, 138, 108)",
                    "rgb(238, 235, 71)",
                    "rgb(86, 14, 88)",
                    "rgb(16, 75, 23)",
                    "rgb(243, 136, 13)",
                    "rgb(20, 225, 240)",
                    "rgb(245, 12, 32)",
                    "rgb(13, 63, 82)",
                    
                ],
                hoverOffset: 10,
            }
            ],
        });
    }, [keysArray, valuesArray]);

   
 



  return (
    <div className='Graphs'>
        <Bar options={chartOptions} data={chartDataBar} />
        <Pie data={chartDataPie} />
    </div>
  )

  
}

export default Graphs