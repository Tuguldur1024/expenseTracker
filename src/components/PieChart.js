import axios from "axios";
import { useState, useEffect } from "react";
import { subDays } from "date-fns";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const monthNames = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const today = new Date();
const year = today.getFullYear();
const month = monthNames[today.getMonth() + 1];
const day = today.getDate();
export const IncomePie = (props) => {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);

  const lastRecords = subDays(year + month + String(day), 90);
  const month2 = monthNames[lastRecords.getMonth() + 1];
  const day2 = lastRecords.getDate();
  useEffect(() => {
    const getCategoryIncome = async () => {
      try {
        const data = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/categoryIncome`,
          { userid: 1 }
        );
        setData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        let tempSum = 0;
        data.data?.map((category) => (tempSum += category.sum));

        setSum(tempSum);
      }
    };
    getCategoryIncome();
  }, []);

  const generateColors = (length) => {
    const colors = [];
    const colorPalette = [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8042",
      "#FF6384",
      "#36A2EB",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40",
    ];
    for (let i = 0; i < length; i++) {
      colors.push(colorPalette[i % colorPalette.length]);
    }
    return colors;
  };

  const totalSum = data.reduce((sum, item) => sum + item.sum, 0);

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.sum),
        backgroundColor: generateColors(data.length),
        hoverOffset: 4,
      },
    ],
  };

  const legendLabels = data.map((item) => {
    const percentage = ((item.sum / totalSum) * 100).toFixed(2);
    return `${item.name}: ₮${item.sum} (${percentage}%)`;
  });

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          generateLabels: (chart) => {
            return legendLabels.map((label, index) => ({
              text: label,
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              hidden: false,
              lineWidth: 1,
            }));
          },
        },
      },
    },
  };

  return (
    <div className="px-6 py-4 flex flex-col rounded-xl w-full bg-white">
      <div className="flex justify-between border-b  border-b-[#E2E8F0] ">
        <p className="font-semibold text-[#0F172A]">Income Pie Chart</p>
        <p>{month2 + " " + day2 + " - " + month + " " + day} </p>
      </div>
      <div className="w-full">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};

export const ExpensePie = (props) => {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);

  const lastRecords = subDays(year + month + String(day), 90);
  const month2 = monthNames[lastRecords.getMonth() + 1];
  const day2 = lastRecords.getDate();
  useEffect(() => {
    const getCategoryIncome = async () => {
      try {
        const data = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/categoryExpense`,
          { userid: 1 }
        );
        setData(data.data);
      } catch (error) {
        console.log(error);
      } finally {
        let tempSum = 0;
        data.data?.map((category) => (tempSum += category.sum));

        setSum(tempSum);
      }
    };
    getCategoryIncome();
  }, []);

  const generateColors = (length) => {
    const colors = [];
    const colorPalette = [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8042",
      "#FF6384",
      "#36A2EB",
      "#4BC0C0",
      "#9966FF",
      "#FF9F40",
    ];
    for (let i = 0; i < length; i++) {
      colors.push(colorPalette[i % colorPalette.length]);
    }
    return colors;
  };

  const totalSum = data.reduce((sum, item) => sum + item.sum, 0);

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.sum),
        backgroundColor: generateColors(data.length),
        hoverOffset: 4,
      },
    ],
  };

  const legendLabels = data.map((item) => {
    const percentage = ((item.sum / totalSum) * 100).toFixed(2);
    return `${item.name}: ₮${item.sum} (${percentage}%)`;
  });

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          generateLabels: (chart) => {
            return legendLabels.map((label, index) => ({
              text: label,
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              hidden: false,
              lineWidth: 1,
            }));
          },
        },
      },
    },
  };

  return (
    <div className="px-6 py-4 flex flex-col rounded-xl w-full bg-white">
      <div className="flex justify-between border-b  border-b-[#E2E8F0] ">
        <p className="font-semibold text-[#0F172A]">Expense Pie Chart</p>
        <p>{month2 + " " + day2 + " - " + month + " " + day} </p>
      </div>

      <div className="w-full">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
};
