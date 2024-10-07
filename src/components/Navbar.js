import { useState } from "react";
import Logo from "../../public/icons/Logo";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  const { onClick, dashboardStyle, recordsStyle } = props;

  const goDashboard = () => {
    router.push("/dashboard");
  };
  const goRecords = () => {
    router.push("/");
  };

  return (
    <div className="bg-white w-full px-[120px] py-4 flex justify-between max-w-screen-xl">
      <div className="flex gap-6 items-center">
        <Logo />
        <p onClick={goDashboard} className={`${dashboardStyle}`}>
          Dashboard
        </p>
        <p onClick={goRecords} className={`${recordsStyle}`}>
          Records
        </p>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={onClick}
          className="bg-[#0166FF] py-1.5 px-3 text-white rounded-3xl text-base"
        >
          + Record
        </button>
        <div className="rounded-full w-10 h-10 bg-[url('/images/Profile.jpeg')]"></div>
      </div>
    </div>
  );
};

export default Navbar;
