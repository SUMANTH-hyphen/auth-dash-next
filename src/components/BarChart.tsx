import React, { FC } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart: FC<{ graphData: bargraph }> = ({ graphData }) => {

    const options = {
        responsive: true,
        layout: {

        },
        plugins: {
            legend: {
                position: 'right' as const,
                labels: {
                    font: {
                        size: 6
                    }
                }
            },
            title: {
                display: true,
                text: 'Types of Dogs in Year',
                font: {
                    size: 12
                }
            },
        },
    };

    const labels = ["2020", "2021", "2022", "2023"];

    const datasets = graphData.data.map((data, index) => ({
        label: graphData.labels[index],
        data: data,
        backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
    }));

    const Customdata = {
        labels: labels,
        datasets: datasets,
    };

    return <Bar options={options} data={Customdata}/>;
}

export default BarChart