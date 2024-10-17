import axios from "axios";
import { useState, useEffect } from "react";
import { subDays } from "date-fns";
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
  console.log(data);

  return (
    <div className="px-6 py-4 flex flex-col rounded-xl">
      <div className="flex justify-between border-b  border-b-[#E2E8F0] ">
        <p className="font-semibold text-[#0F172A]">Income Pie Chart</p>
        <p>{month2 + " " + day2 + " - " + month + " " + day} </p>
      </div>
      <div className="py-8 px-6 flex gap-11">
        <div className="w-1/2">sgjdhf</div>
        <div className="w-full flex flex-col gap-4">
          {data.map((oneCategory) => {
            return (
              <div className="flex justify-between gap-4">
                <p className="w-[150px]">{oneCategory.name}</p>
                <p> {oneCategory.sum}₮</p>
                <p></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
