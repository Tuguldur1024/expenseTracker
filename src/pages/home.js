import HomeNavbar from "../components/HomeNavbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signUp");
  };

  const handleLearnMore = () => {
    router.push("/features");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HomeNavbar />

      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center pt-36 pb-24 bg-no-repeat bg-cover bg-center h-[80vh] w-full"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/00/56/71/00/360_F_56710032_HM18W4DqNYH3pHTzQrzE0LIKCswvS1Va.jpg')",
        }}
      >
        <div className="w-[600px] h-[400px] p-4 border-4 rounded-2xl border-slate-400 backdrop-blur-3xl flex flex-col items-center justify-center text-center gap-6">
          <p className="font-semibold text-5xl text-black">
            Track Your Financial Journey with Ease
          </p>
          <p className="text-lg text-gray-700">
            Welcome! Our platform provides an intuitive way to enter and track
            your daily transactions, gain insights into your spending habits,
            and manage your finances more effectively.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleSignUp}
              className="rounded-xl w-[230px] text-2xl hover:text-3xl hover:rounded-3xl py-4 px-6 bg-[#0166FF] text-white font-semibold"
            >
              Get Started
            </button>
            <button
              onClick={handleLearnMore}
              className="rounded-xl w-[230px] text-2xl hover:text-3xl hover:rounded-3xl py-4 px-6 bg-gray-700 text-white font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-center mt-16 p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Our Key Features
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8 max-w-4xl">
          <div className="w-[260px] p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">
              Transaction Tracking
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Record and categorize daily transactions effortlessly.
            </p>
          </div>
          <div className="w-[260px] p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">
              Real-Time Balance
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Keep your balance updated automatically with every entry.
            </p>
          </div>
          <div className="w-[260px] p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">
              Analytics & Insights
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Visualize spending patterns and make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center mt-16 p-8 bg-[#F3F4F6] w-full">
        <h2 className="text-3xl font-semibold text-gray-800">
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8 max-w-4xl">
          <div className="w-full md:w-[45%] bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg italic text-gray-700">
              This app has transformed how I manage my money. I can see all my
              expenses in one place!
            </p>
            <p className="text-right mt-4 font-bold">– Alex J.</p>
          </div>
          <div className="w-full md:w-[45%] bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg italic text-gray-700">
              Simple and effective! It is now so easy to keep track of my
              finances.
            </p>
            <p className="text-right mt-4 font-bold">– Sarah M.</p>
          </div>
        </div>
        <Link href="/response">
          <button className="mt-8 py-3 px-8 bg-[#0166FF] text-white font-semibold rounded-xl hover:bg-[#014a9d]">
            See More Responses
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
