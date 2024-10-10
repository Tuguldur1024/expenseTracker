import axios from "axios";
import OneRecord from "./OneRecord";
import { useEffect, useState } from "react";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import RentIcon from "../../public/icons/RentIcon";
import moment from "moment";

const LatestFirst = ({ userid, filter, search }) => {
  const [ascendingTransactions, setAscendingTransactions] = useState([]);
  console.log(search);
  useEffect(() => {
    axios
      .post("http://localhost:8000/transaction/getAscendingTransactions", {
        user_id: userid,
        filter: filter,
        search: search,
      })
      .then(function (response) {
        setAscendingTransactions(response.data.transactions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [filter]);

  let transaction_color = "";
  let icon = null;
  let plusMinusSign = "";
  return (
    <div className="flex flex-col gap-3 mb-3">
      {ascendingTransactions?.map((recordToday, index) => {
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
  );
};

export default LatestFirst;
