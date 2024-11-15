import HomeNavbar from "../components/HomeNavbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <main className="flex-grow bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-lg text-gray-700">
          <h1 className="text-4xl font-bold text-[#0166FF] mb-8">
            Privacy Policy
          </h1>

          <p className="mb-6">
            Welcome to our Privacy Policy page. Your privacy is important to us.
            This policy explains the types of information we collect, how we use
            it, and how we protect it. Please read it carefully.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect personal information when you sign up for our services,
            make transactions, or interact with our platform. This may include:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Personal details (name, email, etc.)</li>
            <li>Transaction history</li>
            <li>Device and usage information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Provide and improve our services</li>
            <li>Analyze usage patterns to enhance the user experience</li>
            <li>Communicate with you regarding updates or offers</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            3. How We Protect Your Information
          </h2>
          <p className="mb-4">
            We take the security of your information seriously. We employ
            industry-standard security measures to protect your data, including
            encryption, firewalls, and secure server infrastructure. However, no
            method of data transmission over the internet is 100% secure, so we
            cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            4. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not share your personal information with third parties unless:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>We have your consent</li>
            <li>We are required to by law</li>
            <li>
              We need to share information to protect our legal rights or comply
              with a judicial proceeding
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            5. Your Rights
          </h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal
            information at any time. If you would like to make any changes,
            please contact us via our support page.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            6. Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page, and the "Last updated" date will be revised
            accordingly.
          </p>

          <h2 className="text-2xl font-semibold text-[#0166FF] mt-10">
            7. Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy,
            please feel free to contact us:
          </p>
          <p className="mb-6">Email: support@geld.com</p>
          <p className="mb-6">Phone: +976 99119911</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
