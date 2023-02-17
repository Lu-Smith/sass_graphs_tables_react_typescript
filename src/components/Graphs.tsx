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
    borderColor: string[],
    backgroundColor: string[],
    borderWidth: number,
    borderRadius: number,
};

interface DataSetsPie {
    label: string,
    data: number[],
    backgroundColor: string[],
    hoverOffset: number,
    borderColor: string[],
};

const Graphs = (props: { data: DataProps[] }) => {
    const [chartDataBar, setChartDataBar] = useState<{labels: string[]; datasets: DataSetsBar[]}>({
        labels: [], datasets: [],
    });

    const [chartDataPie, setChartDataPie] = useState<{labels: string[]; datasets: DataSetsPie[]}>({
        labels: [], datasets: [],
    });

    const [chartOptionsBar, setChartOptionsBar] = useState({});
    const [chartOptionsPie, setChartOptionsPie] = useState({});
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
                borderColor: [
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
                backgroundColor: [
                    "rgba(189, 117, 103, 0.8)",
                    "rgba(41, 172, 51, 0.8)",
                    "rgba(206, 42, 165, 0.8)",
                    "rgba(38, 138, 108, 0.8)",
                    "rgba(238, 235, 71, 0.8)",
                    "rgba(86, 14, 88, 0.8)",
                    "rgba(16, 75, 23, 0.8)",
                    "rgba(243, 136, 13, 0.8)",
                    "rgba(20, 225, 240, 0.8)",
                    "rgba(245, 12, 32, 0.8)",
                    "rgba(13, 63, 82, 0.8)",
                ],
                borderWidth: 2,
                borderRadius: 10,
            }
            ],
        });
        setChartOptionsBar({
            responsive: true,
            plugins: {
                legend: false,
                title: {
                    display: true,
                    text: "A client interaction with a sector.",
                    color: "rgb(13, 63, 82)",
                    padding: 20,
                }  ,  
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
                borderColor: [
                    "rgba(189, 117, 103, 0.5)",
                    "rgba(41, 172, 51, 0.5)",
                    "rgba(206, 42, 165, 0.5)",
                    "rgba(38, 138, 108, 0.5)",
                    "rgba(238, 235, 71, 0.5)",
                    "rgba(86, 14, 88, 0.5)",
                    "rgba(16, 75, 23, 0.5)",
                    "rgba(243, 136, 13, 0.5)",
                    "rgba(20, 225, 240, 0.5)",
                    "rgba(245, 12, 32, 0.5)",
                    "rgba(13, 63, 82, 0.5)",
                ],
                hoverOffset: 30,
            }
            ],
        });
        setChartOptionsPie({
            responsive: true,
            plugins: {
                legend: {
                    position: "left",
                    labels: {
                        padding: 15, 
                        color: "rgb(13, 63, 82)",
                      },
                },
                title: {
                    display: true,
                    text: "A client interaction with a sector.",
                    color: "rgb(13, 63, 82)",
                    padding: 20,
                }
            }
        });
    }, [keysArray, valuesArray]);

   
  return (
    <div className='Graphs'>
        <div className="graphContainer">
            <h2>Graph 1</h2>
            <Bar options={chartOptionsBar} data={chartDataBar} />
        </div>
        <div className="graphContainer">
            <h2>Graph 2</h2>
            <Pie data={chartDataPie} options={chartOptionsPie}/>
        </div>
    </div>
  )

  
}

export default Graphs