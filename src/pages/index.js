import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import MyCategories from "@/components/Category";
import PlusSign from "../../public/icons/PlusSign";
import OneRecord from "../components/OneRecord";
import { FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import AddRecord from "@/components/AddRecord";
import axios from "axios";
import moment from "moment";

import AddCategory from "@/components/AddCategory";

const records = [
  [
    {
      color: "#23E01F",
      image: <RentIcon />,
      time: "14:00",
      text: "Lending & Renting",
      money: "+ 1,000₮",
      iconColor: "#0166FF",
    },
  ],
  [
    {
      color: "#F54949",
      image: <FoodExpense />,
      time: "14:00",
      text: "Food & Drinks",
      money: "- 1,000₮",
      iconColor: "#FF4545",
    },
  ],
];
const today = new Date();

let checked = [
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
];
let userId = 0;

const categoryIconMap = {
  food: <FoodExpense />,
};
const Home = () => {
  let transaction_color = "#F54949";
  let icon = <FoodExpense />;
  let plusMinusSign = "+";

  const [mycategories, setMyCategories] = useState([]);
  const [myTransactions, setMyTransactions] = useState([]);
  const transactionsOfToday = myTransactions.filter(
    (trans) =>
      moment(trans.created_at).format("ll") === moment(today).format("ll")
  );
  const transactionOfBefore = myTransactions.filter(
    (trans) =>
      moment(trans.created_at).format("ll") !== moment(today).format("ll")
  );
  if (typeof window !== "undefined") {
    userId = localStorage.getItem("userid");
  }
  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then(function (response) {
        setMyCategories(response.data.categories);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .post("http://localhost:8000/transaction/byuserid", { user_id: userId })
      .then(function (response) {
        setMyTransactions(response.data.transactions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState("All");
  const [myRecords, setRecords] = useState(records);
  const [selectedCategories, setSelectedCategories] = useState(mycategories);
  const [selectedEyes, setSelectedEyes] = useState(checked);
  const [checkedCategories, setCheckedCategories] = useState(mycategories);
  const handleCategory = (input, index) => {
    let myCategories = [...selectedEyes];
    if (input == "true") {
      myCategories[index] = "false";
    } else {
      myCategories[index] = "true";
    }
    setSelectedEyes(myCategories);
  };
  const handleExpense = () => {
    const filtered = records.map((day) =>
      day.filter((oneRecord) => oneRecord.money.includes("-"))
    );
    setRecords(filtered);
  };
  const handleIncome = () => {
    const filtered = records.map((day) =>
      day.filter((oneRecord) => oneRecord.money.includes("+"))
    );
    console.log(filtered);
    setRecords(filtered);
  };
  const handleAll = () => {
    setRecords(records);
  };
  const handleChange = (option) => {
    setSelected(option);
  };

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };
  const addCategory = () => {
    setShowAddCategory(!showAddCategory);
  };
  // const opacity = showAdd === false ? "opacity-100" : "opacity-100";
  return (
    // <div className="flex justify-center items-center flex-col">
    <div>
      {showAddCategory && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddCategory onCloseModal={addCategory} categories={mycategories} />
        </div>
      )}
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord onCloseModal={handleAdd} categories={mycategories} />
        </div>
      )}
      <div
        className={` min-w- bg-[#F3F4F6] flex flex-col gap-8 items-center relative`}
      >
        <Navbar
          dashboardStyle={"text-[#0F172A]"}
          recordsStyle={"font-semibold text-base text-[#0F172A]"}
        />

        <div className="flex gap-6">
          <div className="bg-white flex flex-col px-6 py-4 w-[282px] gap-6 rounded-xl h-fit border border-[#E5E7EB]">
            <div className="flex flex-col gap-6">
              <p> Records </p>
              <button
                onClick={() => handleAdd()}
                className="flex gap-1 w-[225px] bg-[#0166FF] rounded-3xl text-white items-center justify-center"
              >
                <PlusSign color="white" /> Add
              </button>
            </div>
            <input
              placeholder="Search"
              className="border border-[#D1D5DB] rounded-lg px-4 py-1"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base text-[#1F2937] mb-3">
                Types
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"All" === selected}
                  className="checkbox"
                  onChange={() => handleChange("All")}
                  onClick={() => handleAll()}
                />
                All
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"Income" === selected}
                  className="checkbox"
                  onChange={() => handleChange("Income")}
                  onClick={() => handleIncome()}
                />
                Income
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"Expense" === selected}
                  className="checkbox"
                  onChange={() => handleChange("Expense")}
                  onClick={() => handleExpense()}
                />
                Expense
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-semibold text-base">Category</p>
                <p className="font-normal text-base opacity-20"> Clear </p>
              </div>
              <div className="flex flex-col gap-2">
                {mycategories.map((category1, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleCategory(selectedEyes[index], index)}
                    >
                      <MyCategories categoryName={category1.name} />
                    </div>
                  );
                })}
              </div>
              <div
                onClick={addCategory}
                className="flex gap-2 py-1.5 pl-3 items-center"
              >
                <PlusSign color={"#0166FF"} />
                <p>Add category </p>
              </div>
            </div>
          </div>
          <div className="w-[894px] flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <FaChevronLeft />
                </div>
                <p className="font-normal text-base"> Last 30 Days</p>
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <FaAngleRight />
                </div>
              </div>
              <select className="w-[180px] py-3 px-4 rounded-lg font-semibold text-base text-[#1F2937] border border-[#D1D5DB]">
                <option selected>Newest First</option>
                <option> Latest First </option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-base"> Today </p>
              <div className="flex flex-col gap-3 mb-3">
                {transactionsOfToday.map((recordToday, index) => {
                  if (recordToday.transaction_type === "INC") {
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
                      text={recordToday.name}
                      image={icon}
                      time={moment(recordToday.created_at).format("LT")}
                      color={transaction_color}
                      money={plusMinusSign + " " + String(recordToday.amount)}
                      iconColor={transaction_color}
                    />
                  );
                })}
              </div>
              <p className="font-semibold text-base"> Yesterday </p>
              <div className="flex flex-col gap-3">
                {transactionOfBefore.map((recordToday, index) => {
                  if (recordToday.transaction_type === "INC") {
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
                      text={recordToday.name}
                      image={icon}
                      time={moment(recordToday.created_at).format("L")}
                      color={transaction_color}
                      money={plusMinusSign + " " + String(recordToday.amount)}
                      iconColor={transaction_color}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
