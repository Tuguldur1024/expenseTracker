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
  if (typeof window !== "undefined") {
    userid = localStorage.getItem("userid");
  }
  const { onCloseModal, categories } = props;
  const [incomeExpense, setIncomeExpense] = useState("Expense");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  console.log(categories);
  const handleIncomeOrExpense = (props) => {
    const { name } = props;
    setIncomeExpense(name);
    if (incomeExpense === "Expense") {
      setIncomeExpense("INCOME");
    } else {
      setIncomeExpense("EXPENSE");
    }
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAdd = async () => {
    await axios
      .post("http://localhost:8000/transaction", {
        user_id: userid,
        name: "",
        amount: amount,
        transaction_type: incomeExpense.substring(0, 3),
        description: description,
        category_id: selectedCategory,
      })
      .then(function (response) {
        setAmount(0);
        setIncomeExpense("EXPENSE");
        setDescription("");
        setSelectedCategory("");
        console.log(response);
      })
      .catch(function (error) {
        setAmount(0);
        setIncomeExpense("EXPENSE");
        setDescription("");
        setSelectedCategory("");
        console.log(error);
      });
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const Expensebackground = incomeExpense === "Expense" ? "#0166FF" : "#F3F4F6";
  const Incomebackground = incomeExpense === "Income" ? "#16A34A" : "#F3F4F6";
  const buttonColor = incomeExpense === "Income" ? "#16A34A" : "#0166FF";
  const textColorIncome =
    incomeExpense === "Income" ? "text-white" : "text-base";
  const textColorExpense =
    incomeExpense === "Expense" ? "text-white" : "text-base";

  const today = new Date();
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
              onClick={() => handleIncomeOrExpense("Expense")}
              className={`py-2 px-[55.5px] ${textColorExpense} font-normal text-base rounded-3xl bg-[${Expensebackground}]`}
              style={{ backgroundColor: Expensebackground }}
            >
              Expense
            </div>
            <div
              onClick={() => handleIncomeOrExpense("Income")}
              className={`py-2 px-[55.5px] ${textColorIncome} font-normal text-base rounded-3xl bg-[${Incomebackground}]`}
              style={{ backgroundColor: Incomebackground }}
            >
              Income
            </div>
          </div>
          <div className="flex flex-col mb-3 gap-[22px]">
            <div className="flex flex-col py-3 px-4 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl">
              <p className="font-normal text-base"> Amount </p>
              <input
                value={amount}
                onChange={handleAmount}
                type="number"
                placeholder="₮ 000.00"
                className="font-normal text-xl bg-[#F3F4F6]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p> Category </p>
              <select
                onChange={handleSelectChange}
                value={selectedCategory}
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
