import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import Drink from "../../public/icons/Drink";
import Gift from "../../public/icons/Gift";
import Shopping from "../../public/icons/Shopping";
import Taxi from "../../public/icons/Taxi";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import axios from "axios";

let userid = 0;

const AddRecord = (props) => {
  const today = new Date();
  const hour = String(today.getHours());
  const minutes = String(today.getMinutes());
  const year = String(today.getFullYear());
  const month = String(today.getMonth());
  const day = String(today.getDate());
  if (typeof window !== "undefined") {
    userid = localStorage.getItem("userid");
  }
  const { onCloseModal, categories } = props;
  const [incomeExpense, setIncomeExpense] = useState("EXPENSE");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [message, setMessage] = useState("");
  const [amountBorder, setAmountBorder] = useState("#D1D5DB");
  const [categoryBorder, setCategoryBorder] = useState("#D1D5DB");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleIncomeOrExpense = (props) => {
    const { name } = props;
    setIncomeExpense(name);
    if (incomeExpense === "EXPENSE") {
      setIncomeExpense("INCOME");
    } else {
      setIncomeExpense("EXPENSE");
    }
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAdd = async () => {
    if (amount === 0) {
      setMessage("Please fill the amount");
      setAmountBorder("#F54949");
      setCategoryBorder("#D1D5DB");
    } else if (selectedCategory == "") {
      setMessage("Please select your category");
      setCategoryBorder("#F54949");
      setAmountBorder("#D1D5DB");
    } else {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction`, {
          user_id: userid,
          name: "",
          amount: amount,
          transaction_type: incomeExpense.substring(0, 3),
          description: description,
          category_id: selectedCategory,
          created_at: `${date} ${time}`,
        })
        .then(function (response) {
          setAmount(0);
          setIncomeExpense("EXPENSE");
          setDescription("");
          setSelectedCategory("");
          onCloseModal();
          console.log(response);
        })
        .catch(function (error) {
          setAmount(0);
          setIncomeExpense("EXPENSE");
          setDescription("");
          setSelectedCategory("");
          console.log(error);
        });
    }
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const Expensebackground = incomeExpense === "EXPENSE" ? "#0166FF" : "#F3F4F6";
  const Incomebackground = incomeExpense === "INCOME" ? "#16A34A" : "#F3F4F6";
  const buttonColor = incomeExpense === "INCOME" ? "#16A34A" : "#0166FF";
  const textColorIncome =
    incomeExpense === "INCOME" ? "text-white" : "text-base";
  const textColorExpense =
    incomeExpense === "EXPENSE" ? "text-white" : "text-base";

  return (
    <div className="w-[792px] flex flex-col rounded-xl  border-b border-[#E2E8F0] bg-slate-200">
      <div className="py-5 px-6 flex justify-between">
        <p className="font-semibold text-xl">Add Record</p>
        <IoClose size={24} onClick={onCloseModal} />
      </div>
      <div className="flex w-full">
        <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
          <div className="rounded-[100px] bg-[#F3F4F6] flex gap-1">
            <div
              onClick={() => handleIncomeOrExpense("EXPENSE")}
              className={`py-2 px-[55.5px] ${textColorExpense} font-normal text-base rounded-3xl bg-[${Expensebackground}]`}
              style={{ backgroundColor: Expensebackground }}
            >
              Expense
            </div>
            <div
              onClick={() => handleIncomeOrExpense("INCOME")}
              className={`py-2 px-[55.5px] ${textColorIncome} font-normal text-base rounded-3xl bg-[${Incomebackground}]`}
              style={{ backgroundColor: Incomebackground }}
            >
              Income
            </div>
          </div>
          <div className="flex flex-col mb-3 gap-[22px]">
            <div
              style={{ border: `2px solid ${amountBorder}` }}
              className="flex flex-col py-3 px-4 bg-[#F3F4F6] border` rounded-xl"
            >
              <p className="font-normal text-base"> Amount </p>
              <input
                value={amount}
                onChange={handleAmount}
                type="number"
                placeholder="₮ 000.00"
                className="font-normal text-xl bg-[#F3F4F6]"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col gap-2 w-full">
                <p>Date</p>
                <input
                  value={date}
                  type="date"
                  onChange={handleDate}
                  defaultValue={`${year}-${month}-${day}`}
                  className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>Time</p>
                <input
                  value={time}
                  onChange={handleTime}
                  type="time"
                  defaultValue={`${hour}:${minutes}`}
                  className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p> Category </p>
              <select
                onChange={handleSelectChange}
                value={selectedCategory}
                style={{ border: `2px solid ${categoryBorder}` }}
                className="bg-[#F9FAFB] py-3 px-4 text-base font-normal border border-[#D1D5DB] rounded-lg"
              >
                <option defaultChecked> Find or choose category</option>
                {categories.map((category, index) => {
                  return (
                    <option value={category.id} key={index}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <p className="text-[#F54949]">{message}</p>
          <button
            onClick={() => handleAdd()}
            className={`bg-[${buttonColor}] flex items-center justify-center py-2 rounded-3xl text-white`}
            style={{ backgroundColor: buttonColor }}
          >
            Add Record
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pb-6 pt-[18px] w-full ">
          <p className="text-[#1F2937]">Description</p>
          <textarea
            onChange={handleDescription}
            value={description}
            placeholder="Write here"
            className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default AddRecord;
