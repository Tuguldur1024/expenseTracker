import Link from "next/link";
import Logo from "../../public/icons/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[#0166FF] text-white py-10 px-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 w-full max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <Link href="/aboutUs" className="hover:underline">
            About Us
          </Link>
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p>Email: tracker@example.com</p>
          <p>Phone: +976 99119911</p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <Link href="/home" className="flex items-center gap-2">
            <div className="rounded-full bg-white">
              <Logo />
            </div>

            <span className="text-2xl font-semibold">Geld</span>
          </Link>
          <p className="mt-4 text-sm text-gray-200">
            YourApp provides an easy and efficient way to track and analyze your
            finances. Join us to manage your financial journey effortlessly.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-blue-300 mt-8 pt-6 text-gray-200 text-sm">
        <p>© 2024 Geld. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
