import axios from "axios";
import { useState } from "react";

export const BarChartMonths = () => {
  const [information, setInformation] = useState([]);
  const getInformation = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/getByMonths`
      );
      setInformation(response);
    } catch (error) {
      console.log(error);
    }
  };
  getInformation();
};

export const BarChartWeek = () => {
  const [information, setInformation] = useState([]);
  const getInformation = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/getByWeeks`
      );
      setInformation(response);
    } catch (error) {
      console.log(error);
    }
  };
  getInformation();
};
