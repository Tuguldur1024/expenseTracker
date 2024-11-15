import Logo from "../../public/icons/Logo";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#F3F4F6] px-8 py-4 h-[100px] w-full shadow-md">
      {/* Left Section with Logo and Links */}
      <div className="flex items-center gap-12">
        <Link href="/home" className="flex items-center">
          <Logo className="w-10 h-10" /> {/* Adjust size of logo if needed */}
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link href="/aboutUs">
            <button className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
              About Us
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
          <Link href="/pricing">
            <button className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
              Pricing
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/signIn">
          <button className="px-4 py-2 text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Sign In
          </button>
        </Link>
        <Link href="/signUp">
          <button className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
