import HomeNavbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8 min-h-screen bg-gray-50">
      <HomeNavbar />

      {/* Header Section */}
      <div className="bg-[#0166FF] text-white text-center py-20">
        <h1 className="text-5xl font-extrabold">About Us</h1>
        <p className="text-lg mt-4">
          Meet the team behind our innovative platform
        </p>
      </div>

      {/* CEO Section */}
      <div className="flex flex-col items-center mt-10 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-[#0166FF]">
          CEO of Our Company
        </h2>
        <p className="text-xl font-medium text-gray-800 mt-4">Henry George</p>
        <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 leading-relaxed">
              Henry George (born October 28, 1955) is an American businessman
              and philanthropist best known for his roles at Microsoft
              Corporation. He co-founded the software company with his childhood
              friend Paul Allen and later held the positions of chairman, chief
              executive officer (CEO), president, and chief software architect.
              He was also its largest individual shareholder until May 2014.
              Henry was a pioneer of the microcomputer revolution of the 1970s
              and 1980s. In addition to his business career, he has dedicated
              much of his time to philanthropy, focusing on global health,
              education, and environmental issues.
            </p>
          </div>
          <Image
            src="/images/Prof.jpg"
            alt="Henry George - CEO"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#0166FF]"
          />
        </div>
      </div>

      {/* Executive Director Section */}
      <div className="flex flex-col items-center mt-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-[#0166FF]">
          Executive Director of Our Company
        </h2>
        <p className="text-xl font-medium text-gray-800 mt-4">
          Quinton Jackson
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 leading-relaxed">
              Quinton Jackson is an experienced leader with a background in both
              technology and business strategy. He has worked in various roles,
              guiding companies through growth phases and helping shape their
              strategic direction. Before joining our company, Quinton was a
              senior executive at a leading tech firm, where he focused on
              expanding global operations and innovation. In his current role as
              Executive Director, Quinton is committed to overseeing the daily
              operations and ensuring the company’s vision is effectively
              implemented.
            </p>
          </div>
          <Image
            src="/images/profileImage.jpg"
            alt="Quinton Jackson - Executive Director"
            width={300}
            height={300}
            className="rounded-full border-4 border-[#0166FF]"
          />
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="bg-[#F3F4F6] py-16">
        <div className="text-center px-8 md:px-32">
          <h2 className="text-3xl font-bold text-[#0166FF]">Our Mission</h2>
          <p className="text-xl text-gray-800 mt-4">
            Our mission is to simplify personal finance management by providing
            tools that make it easier for individuals to track, analyze, and
            optimize their spending habits. We believe in financial empowerment
            through technology, offering accessible solutions for everyone.
          </p>
        </div>

        <div className="text-center px-8 md:px-32 mt-12">
          <h2 className="text-3xl font-bold text-[#0166FF]">Our Vision</h2>
          <p className="text-xl text-gray-800 mt-4">
            We envision a world where everyone has control over their financial
            future, using data-driven insights to make smarter choices. Our goal
            is to build a community of financially aware individuals who can
            take charge of their economic well-being.
          </p>
        </div>
      </div>

      {/* Key Team Members Section */}
      <div className="text-center py-16 px-8">
        <h2 className="text-3xl font-bold text-[#0166FF]">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-xs">
            <Image
              src="/images/team_member_1.jpg"
              alt="Team Member 1"
              width={200}
              height={200}
              className="rounded-full border-4 border-[#0166FF]"
            />
            <p className="font-semibold text-xl mt-4">Alice Williams</p>
            <p className="text-gray-600">Chief Technology Officer</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-xs">
            <Image
              src="/images/team_member_2.jpg"
              alt="Team Member 2"
              width={200}
              height={200}
              className="rounded-full border-4 border-[#0166FF]"
            />
            <p className="font-semibold text-xl mt-4">John Doe</p>
            <p className="text-gray-600">Lead Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-xs">
            <Image
              src="/images/team_member_4.jpg"
              alt="Team Member 3"
              width={200}
              height={200}
              className="rounded-full border-4 border-[#0166FF]"
            />
            <p className="font-semibold text-xl mt-4">Jessica Lee</p>
            <p className="text-gray-600">Marketing Director</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-[#F3F4F6] py-16">
        <div className="text-center px-8 md:px-32">
          <h2 className="text-3xl font-bold text-[#0166FF]">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Achievement 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-[#0166FF]">
                500+ Clients
              </h3>
              <p className="text-gray-600 mt-4">
                We’ve successfully helped over 500 individuals manage their
                finances.
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-[#0166FF]">
                Global Reach
              </h3>
              <p className="text-gray-600 mt-4">
                Our platform is used by clients in over 30 countries worldwide.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-[#0166FF]">
                Award-Winning App
              </h3>
              <p className="text-gray-600 mt-4">
                We’ve won multiple awards for innovation in personal finance
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
