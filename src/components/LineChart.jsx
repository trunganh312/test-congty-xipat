import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Số lượng người đăng ký trong 7 ngày gần nhất",
    },
  },
};

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const labels = [];
let a = "";
for (let i = day; i > day - 7; i--) {
  console.log(i);
  if (i < 1) {
    a = `${31 + i}/${month}`;
    labels.push(a);
  } else if (i > 1) {
    a = `${i}/${month + 1}`;
    labels.push(a);
  }
}
export const data = {
  labels,
  datasets: [
    {
      label: "Hight 2013",
      data: labels.map(() => faker.datatype.number({ min: 5, max: 40 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Low 2013",
      data: labels.map(() => faker.datatype.number({ min: 5, max: 40 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
