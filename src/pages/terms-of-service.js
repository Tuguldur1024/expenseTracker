import HomeNavbar from "../components/HomeNavbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <main className="flex-grow bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <h1 className="text-4xl font-bold text-[#0166FF] mb-8">
            Terms of Service
          </h1>

          <p className="mb-6">
            Welcome to our Terms of Service page. These Terms govern your use of
            our platform, products, and services. By accessing or using our
            services, you agree to comply with these terms. Please read them
            carefully.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing and using our platform, you agree to be bound by these
            Terms of Service and any future modifications. If you do not agree
            with these terms, you are prohibited from using our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            2. Services We Provide
          </h2>
          <p className="mb-4">
            Our platform allows you to track your daily financial transactions,
            gain insights into your spending habits, and manage your finances
            more effectively. We may offer additional features and services as
            described in our website.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            3. User Responsibilities
          </h2>
          <p className="mb-4">As a user, you agree to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>
              Provide accurate and up-to-date information when registering and
              using our services.
            </li>
            <li>Keep your account credentials confidential and secure.</li>
            <li>Comply with all applicable laws while using our platform.</li>
            <li>
              Not engage in any activity that could harm or disrupt our services
              or other users.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            4. Account Termination
          </h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your account if you
            violate any of these Terms. If your account is terminated, you may
            lose access to your data, and any fees or payments made are
            non-refundable.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            5. Privacy and Data Collection
          </h2>
          <p className="mb-4">
            Our Privacy Policy governs the collection and use of your personal
            information. By using our platform, you consent to our privacy
            practices as described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            6. Limitations of Liability
          </h2>
          <p className="mb-4">
            Our platform is provided as is and we do not guarantee the accuracy,
            completeness, or reliability of any information or services
            provided. We are not liable for any loss, damage, or inconvenience
            arising from your use of our platform.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            7. Changes to Terms
          </h2>
          <p className="mb-4">
            We may modify or update these Terms of Service from time to time.
            Any changes will be posted on this page, and the Last updated date
            will be revised accordingly. We encourage you to review these Terms
            periodically.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            8. Governing Law
          </h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which our company is located,
            without regard to its conflict of law principles.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            9. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about these Terms of Service,
            please contact us at:
          </p>
          <p className="mb-6">Email: support@geld.com</p>
          <p className="mb-6">Phone: +976 99119911</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
