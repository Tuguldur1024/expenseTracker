import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

const Features = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signUp");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />

      <div className="flex flex-col items-center px-6 py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-12 text-center text-blue-600">
          Explore Our Key Features
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl">
          <img
            src="/icons/transaction-icon.svg"
            alt="Transaction Tracking Icon"
            className="w-20 h-20"
          />
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800">
              Transaction Tracking
            </h2>
            <p className="text-gray-600 mt-4">
              Record and categorize daily transactions effortlessly. Our
              platform makes it easy to add, organize, and view each
              transaction, so you always know where your money goes.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl">
          <img
            src="/icons/balance-icon.svg"
            alt="Real-Time Balance Icon"
            className="w-20 h-20"
          />
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800">
              Real-Time Balance
            </h2>
            <p className="text-gray-600 mt-4">
              Keep your balance updated automatically with every entry.
              Instantly see your financial status without complicated
              calculations or delays.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl">
          <img
            src="/icons/analytics-icon.svg"
            alt="Analytics Icon"
            className="w-20 h-20"
          />
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800">
              Analytics & Insights
            </h2>
            <p className="text-gray-600 mt-4">
              Visualize spending patterns, set financial goals, and make
              informed decisions based on easy-to-read analytics. Our dashboard
              provides clear insights to guide your financial journey.
            </p>
          </div>
        </div>

        <button
          onClick={handleSignUp}
          className="mt-12 px-10 py-4 bg-blue-500 text-white text-2xl font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
