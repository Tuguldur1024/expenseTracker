import HomeNavbar from "../components/HomeNavbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <main className="flex-grow bg-gray-50 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#0166FF]">
            Affordable Pricing Plans
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Choose the plan that works best for you and start managing your
            finances effectively.
          </p>
        </div>

        {/* Pricing Plans Section */}
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {/* Basic Plan */}
          <div className="w-full md:w-[300px] bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800">Basic</h3>
            <p className="text-5xl font-extrabold text-[#0166FF] mt-4">$0</p>
            <p className="mt-2 text-gray-600">Forever Free</p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ Track daily transactions</li>
              <li>✔ Basic analytics</li>
              <li>✔ Up to 10 transactions per day</li>
            </ul>
            <button className="mt-8 px-6 py-3 rounded-xl bg-[#0166FF] text-white font-semibold hover:scale-105 hover:bg-[#014bbf] transition-transform">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="w-full md:w-[300px] bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#0166FF]">
            <h3 className="text-2xl font-bold text-gray-800">Premium</h3>
            <p className="text-5xl font-extrabold text-[#0166FF] mt-4">$9.99</p>
            <p className="mt-2 text-gray-600">Per Month</p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ Unlimited transactions</li>
              <li>✔ Advanced analytics & insights</li>
              <li>✔ Real-time balance updates</li>
              <li>✔ Priority customer support</li>
            </ul>
            <button className="mt-8 px-6 py-3 rounded-xl bg-[#0166FF] text-white font-semibold hover:scale-105 hover:bg-[#014bbf] transition-transform">
              Upgrade Now
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="w-full md:w-[300px] bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800">Enterprise</h3>
            <p className="text-5xl font-extrabold text-[#0166FF] mt-4">
              Custom
            </p>
            <p className="mt-2 text-gray-600">Tailored for Businesses</p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ Team account management</li>
              <li>✔ Detailed financial reports</li>
              <li>✔ Integration with accounting tools</li>
              <li>✔ Dedicated account manager</li>
            </ul>
            <button className="mt-8 px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:scale-105 hover:bg-gray-700 transition-transform">
              Contact Us
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
