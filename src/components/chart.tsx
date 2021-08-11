import React, { useState } from "react";
import { Line } from "react-chartjs-2";

interface ChartProps {
    data: Array<DataArray>;
    label: string;
    minValue: number;
    maxValue: number;
    height?: number;
    pointStyle?: string;
}

interface DataArray {
    date: string | null;
    label: string | null;
    value: number | null;
}

const Chart: React.FC<ChartProps> = ({
    data,
    label,
    minValue,
    maxValue,
    height = 600,
    pointStyle = "circle",
}) => {
    const prepareData = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "rgba(118, 104, 203, 0.2)");
        gradient.addColorStop(1, "rgba(22, 18, 46, 0.05)");

        return {
            labels: data.map((d) => d.label),
            datasets: [
                {
                    label: label,
                    backgroundColor: gradient, // Put the gradient here as a fill color
                    borderColor: "#7668CB",
                    borderWidth: 2,
                    pointBackgroundColor: "rgba(255, 255, 255, 1)",
                    pointBorderColor: "#7668CB",
                    pointRadius: pointStyle === "circle" ? 3 : 0,
                    fill: true,
                    data: data.map((d) => d.value),
                },
            ],
        };
    };

    return (
        <div className="">
            <div className="">
                <Line
                    type
                    data={prepareData}
                    height={height}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                            datalabels: {
                                color: "white",
                            },
                        },
                        legend: false,
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [
                                {
                                    gridLines: {
                                        color: "#24252F",
                                    },
                                    ticks: {
                                        fontColor: "#B5BBC9",
                                    },
                                },
                            ],
                            yAxes: [
                                {
                                    gridLines: {
                                        color: "#1A1C24",
                                        borderDash: [2, 4],
                                    },
                                    ticks: {
                                        fontColor: "#B5BBC9",
                                        min: minValue,
                                        max: maxValue,
                                    },
                                },
                            ],
                        },
                    }}
                ></Line>
            </div>
        </div>
    );
};
export default Chart;
