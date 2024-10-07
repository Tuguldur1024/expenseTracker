import Navbar from "../components/Navbar";
import Income from "../components/Income";
import ExpenseLogo from "../../public/icons/ExpenseLogo";
import IncomeLogo from "../../public/icons/IncomeLogo";
import { useState, useEffect } from "react";
import axios from "axios";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import OneRecord from "@/components/OneRecord";
import moment from "moment";

const Dashboard = () => {
  let transaction_color = "";
  let userid = 0;
  let icon = <RentIcon />;
  let plusMinusSign = "+";

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  if (typeof window !== "Undefined") {
    userid = localStorage.getItem("userid");
  }

  useEffect(() => {
    axios
      .post("http://localhost:8000/transaction/byuserid", { user_id: userid })
      .then(function (response) {
        const lastRecords = response.data.transactions.slice(0, 5);
        setTransactions(lastRecords);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .post("http://localhost:8000/transaction/getIncome", {
        userid: userid,
      })
      .then(function (response) {
        setIncome(response.data.totalIncome[0].sum);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .post("http://localhost:8000/transaction/getExpense", {
        userid: userid,
      })
      .then(function (response) {
        setExpense(response.data.expense[0].sum);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-[#F3F4F6] flex flex-col gap-8 items-center">
      <Navbar
        dashboardStyle={`font-semibold text-base text-[#0F172A]`}
        recordsStyle={`text-[#0F172A]`}
      />
      <div className="flex flex-col gap-6 w-full px-[120px]">
        <div className="flex gap-6">
          <div className="w-full rounded-[18px] bg-[#0166FF]">
            <img className="w-full h-full" src="/images/Card.png" />
          </div>
          <Income
            color={"#84CC16"}
            title={"Your Income"}
            money={`${income}₮`}
            text={"Your Income Amount"}
            description={"0% from last month"}
            icon={<IncomeLogo />}
          />
          <Income
            color={"#0166FF"}
            title={"Your Expense"}
            money={`-${expense}₮`}
            text={"Your Expense Amount"}
            description={"0% from last month"}
            icon={<ExpenseLogo />}
          />
        </div>
      </div>
      <div className="px-[120px] w-full flex flex-col gap-4">
        <div className="w-full">
          <p className="font-semibold text-base py-4 border-b border-#E2E8F0">
            Last Records
          </p>
        </div>
        {transactions.map((transaction, index) => {
          if (transaction.transaction_type === "INC") {
            transaction_color = "#23E01F";
            icon = <RentIcon />;
            plusMinusSign = "+";
          } else {
            transaction_color = "#F54949";
            icon = <FoodExpense />;
            plusMinusSign = "-";
          }
          return (
            <OneRecord
              key={index}
              text={transaction.name}
              image={icon}
              time={moment(transaction.created_at).format("LLL")}
              color={transaction_color}
              money={plusMinusSign + " " + String(transaction.amount)}
              iconColor={transaction_color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
