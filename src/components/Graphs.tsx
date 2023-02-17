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
                    "rgba(123, 62, 50, 0.4)",
                    "rgba(196, 110, 93, 0.4)",
                    "rgba(226, 80, 50, 0.4)",
                    "rgba(187, 147, 138, 0.4)",
                    "rgba(123, 62, 50, 0.4)",
                    "rgba(172, 36, 9, 0.4)",
                    "rgba(123, 62, 50, 0.4)",
                    "rgba(123, 62, 50, 0.4)",
                    "rgba(123, 62, 50, 0.4)",
                    "rgba(123, 62, 50, 0.4)",
                    "rgba(123, 62, 50, 0.4)",
                ],
                hoverOffset: 20,
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