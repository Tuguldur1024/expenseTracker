import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import MyCategories from "@/components/Category";
import PlusSign from "../../public/icons/PlusSign";
import OneRecord from "../components/OneRecord";
import { FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import LatestFirst from "@/components/LatestFirst";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import AddRecord from "@/components/AddRecord";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";
import IsDelete from "@/components/IsDelete";
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

const Home = () => {
  const router = useRouter();
  const [userId, setUserId] = useState(0);
  const [image, setImage] = useState("");
  useEffect(() => {
    const image = window.localStorage.getItem("image");
    const savedId = window.localStorage.getItem("userid");
    if (!savedId) {
      router.push("/home");
    }
    setImage(image);
    setUserId(savedId);
  }, []);

  let transaction_color = "#F54949";
  let icon = <FoodExpense />;
  let plusMinusSign = "+";

  const [mycategories, setMyCategories] = useState([]);
  const [myTransactions, setMyTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] = useState("All");
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState("All");
  const [myRecords, setRecords] = useState(records);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const [condition, setCondition] = useState("DESC");
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/byuserid`, {
        user_id: userId,
        filter: filterTransactions,
        search: searchValue,
        categories: filteredCategories,
      })
      .then(function (response) {
        setMyTransactions(response.data.transactions);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const lastestNewest = () => {
    if (condition === "DESC") {
      setCondition("ASC");
    } else {
      setCondition("DESC");
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`)
      .then(function (response) {
        setFilteredCategories(response.data.categories);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`)
      .then(function (response) {
        setMyCategories(response.data.categories);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/byuserid`, {
        user_id: userId,
        filter: filterTransactions,
        search: search,
        categories: filteredCategories,
      })
      .then(function (response) {
        console.log(response);
        setMyTransactions(response.data.transactions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [filterTransactions, filteredCategories.length]);

  const transactionsOfToday = myTransactions.filter(
    (trans) =>
      moment(trans.created_at).format("ll") === moment(today).format("ll")
  );
  const transactionOfBefore = myTransactions.filter(
    (trans) =>
      moment(trans.created_at).format("ll") !== moment(today).format("ll")
  );

  const handleCategory = (category) => {
    const bool = filteredCategories.filter(
      (oneTrans) => oneTrans.id === category.id
    );
    let newFilter = [...filteredCategories];
    if (bool.length == 1) {
      newFilter = newFilter.filter((item) => item.id !== category.id);
    } else {
      newFilter.push(category);
    }
    setFilteredCategories(newFilter);
  };

  const handleExpense = () => {
    setFilterTransactions("Expense");
  };
  const handleIncome = () => {
    setFilterTransactions("Income");
  };
  const handleAll = () => {
    setFilterTransactions("All");
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
  const [deleteId, setDeleteId] = useState(0);
  const [showDelete, setShowDelete] = useState(false);
  const deleteModal = (id) => {
    setShowDelete(!showDelete);
    setDeleteId(id);
  };

  return (
    <div>
      {showDelete && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <IsDelete deleteModal={deleteModal} id={deleteId} />
        </div>
      )}
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
        className={` min-h-screen bg-[#F3F4F6] flex flex-col gap-8 items-center relative pb-6`}
      >
        <Navbar
          onCloseModal={handleAdd}
          categories={mycategories}
          dashboardStyle={"text-[#0F172A]"}
          recordsStyle={"font-semibold text-base text-[#0F172A]"}
          imgurl={image}
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
              value={search}
              onChange={handleSearch}
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
                    <div key={index} onClick={() => handleCategory(category1)}>
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
              <select
                onChange={lastestNewest}
                className="w-[180px] py-3 px-4 rounded-lg font-semibold text-base text-[#1F2937] border border-[#D1D5DB]"
              >
                <option selected>Newest First</option>
                <option> Latest First </option>
              </select>
            </div>
            {condition === "ASC" && (
              <LatestFirst
                filter={filterTransactions}
                userid={userId}
                search={search}
                categories={filteredCategories}
              />
            )}
            {condition === "DESC" && (
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
                        deleteModal={() => deleteModal(recordToday.id)}
                        id={recordToday.id}
                      />
                    );
                  })}
                </div>
                <p className="font-semibold text-base"> Before </p>
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
                        id={recordToday.id}
                        key={index}
                        text={recordToday.name}
                        image={icon}
                        time={moment(recordToday.created_at).format("L")}
                        color={transaction_color}
                        money={plusMinusSign + " " + String(recordToday.amount)}
                        iconColor={transaction_color}
                        deleteModal={() => deleteModal(recordToday.id)}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
