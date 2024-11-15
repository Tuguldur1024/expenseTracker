import HomeNavbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const ResponsePage = () => {
  // Example static responses - replace with dynamic data in a real app
  const responses = [
    {
      name: "Alex J.",
      message:
        "This app has transformed how I manage my money. I can see all my expenses in one place!",
    },
    {
      name: "Sarah M.",
      message:
        "Simple and effective! It's now so easy to keep track of my finances.",
    },
    {
      name: "John D.",
      message:
        "I love the features! It's exactly what I needed to track my spending and budget better.",
    },
    {
      name: "Emily W.",
      message:
        "Amazing tool for organizing my finances, it really helps with budgeting and saving.",
    },
    {
      name: "Tom K.",
      message:
        "Great app! I’ve seen an improvement in managing my financial goals.",
    },
  ];

  return (
    <div className="flex flex-col">
      <HomeNavbar />
      <div className="bg-[#0166FF] text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">User Responses</h1>
          <p className="mt-4 text-lg">
            Read what our users have to say about our platform!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center py-12 px-8 bg-[#F3F4F6]">
        <div className="max-w-4xl w-full">
          {responses.map((response, index) => (
            <div
              key={index}
              className="bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg italic text-gray-700">{`"${response.message}"`}</p>
              <p className="text-right mt-4 font-bold">– {response.name}</p>
            </div>
          ))}
        </div>
        <Link href="/contact">
          <div className="mt-8 text-center">
            <button className="py-3 px-8 bg-[#0166FF] text-white font-semibold rounded-xl hover:bg-[#014a9d]">
              Leave Your Feedback
            </button>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ResponsePage;
