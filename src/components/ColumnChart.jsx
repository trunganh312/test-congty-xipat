import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Doanh thu từng tháng trong năm",
    },
  },
};

const date = new Date();
const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const data = {
  labels,
  datasets: [
    {
      label: date.getFullYear(),
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function ColumnChart() {
  return <Bar options={options} data={data} />;
}
