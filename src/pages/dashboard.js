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
import Image from "next/image";
import AddRecord from "@/components/AddRecord";
import Router, { useRouter } from "next/router";
import IsDelete from "@/components/IsDelete";

const Dashboard = () => {
  const router = useRouter();
  let transaction_color = "";
  let icon = <RentIcon />;
  let plusMinusSign = "+";

  const [transactions, setTransactions] = useState([]);
  const [mycategories, setMyCategories] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [image, setImage] = useState("");

  const [userid, setUserId] = useState(0);
  useEffect(() => {
    const savedid = window.localStorage.getItem("userid");
    const image = window.localStorage.getItem("image");
    if (!savedid) {
      router.push("/signIn");
    }
    setUserId(savedid);
    setImage(image);
  }, []);

  console.log(image);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategory = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/category`
        );
        const responseTransaction = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/byuserid`,
          { user_id: userid }
        );
        const lastRecords = responseTransaction.data.transactions?.slice(0, 5);
        setTransactions(lastRecords);
        setMyCategories(responseCategory.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userid]);

  const handleAdd = () => {
    setShowAdd(!showAdd);
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
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord onCloseModal={handleAdd} categories={mycategories} />
        </div>
      )}
      <div className="bg-[#F3F4F6] flex flex-col gap-8 items-center min-h-screen  mx-auto">
        <Navbar
          onCloseModal={handleAdd}
          categories={mycategories}
          dashboardStyle={`font-semibold text-base text-[#0F172A]`}
          recordsStyle={`text-[#0F172A]`}
          imgurl={image}
        />
        <div className="flex flex-col gap-6 w-full px-[120px] max-w-screen-2xl">
          <div className="flex gap-6">
            <div className="w-full rounded-[18px] bg-[#0166FF]">
              <img className="w-full h-full" src="/images/Card.png" />
            </div>
            <Income
              userid={userid}
              url={`${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/getIncome`}
              color={"#84CC16"}
              title={"Your Income"}
              text={"Your Income Amount"}
              description={"0% from last month"}
              icon={<IncomeLogo />}
            />
            <Income
              userid={userid}
              url={`${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/getExpense`}
              color={"#0166FF"}
              title={"Your Expense"}
              text={"Your Expense Amount"}
              description={"0% from last month"}
              icon={<ExpenseLogo />}
            />
          </div>
        </div>
        <div className="px-[120px] w-full flex flex-col gap-4 max-w-screen-2xl">
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
                deleteModal={() => deleteModal(transaction.id)}
                id={transaction.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
