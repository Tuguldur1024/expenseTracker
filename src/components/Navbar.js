import { useState } from "react";
import Logo from "../../public/icons/Logo";
import { useRouter } from "next/router";

const Navbar = (props) => {
  const router = useRouter();
  const { onCloseModal, dashboardStyle, recordsStyle, imgurl } = props;

  const goDashboard = () => {
    router.push("/dashboard");
  };

  const goRecords = () => {
    router.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("image");
    router.push("/home");
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full px-[120px] py-4 flex justify-between max-w-screen-2xl mx-auto">
        <div className="flex gap-6 items-center">
          <Logo onClick={goDashboard} />
          <p onClick={goDashboard} className={`${dashboardStyle}`}>
            Dashboard
          </p>
          <p onClick={goRecords} className={`${recordsStyle}`}>
            Records
          </p>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={onCloseModal}
            className="bg-[#0166FF] py-1.5 px-3 text-white rounded-3xl text-base"
          >
            + Record
          </button>
          <div
            style={{
              backgroundImage: `url(${imgurl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`rounded-full w-10 h-10`}
          ></div>
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="bg-red-600 py-1.5 px-3 text-white rounded-3xl text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
