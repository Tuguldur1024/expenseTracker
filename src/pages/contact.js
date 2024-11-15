import HomeNavbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or email
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col">
      <HomeNavbar />
      <div className="bg-[#0166FF] text-white py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">We would love to hear from you!</p>
        </div>
      </div>

      <div className="flex justify-center py-12 px-8">
        <div className="max-w-2xl w-full bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-center mb-8 text-[#0166FF]">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0166FF]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0166FF]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0166FF]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#0166FF] text-white font-semibold text-lg rounded-lg hover:bg-[#014a9d] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#f9f9f9] py-12">
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#0166FF]">
              Our Location
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              BZD , Peace Mall market
            </p>
            <p className="mt-2 text-lg text-gray-600">Ulaanbaatar, Mongolia</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#0166FF]">Phone</h3>
            <p className="mt-4 text-lg text-gray-600">+976 99119911</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-[#0166FF]">Email</h3>
            <p className="mt-4 text-lg text-gray-600">geld@gmail.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
