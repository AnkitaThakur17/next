import Image from "next/image";

export default function Home() {
  const serviceCards = [
    "Mobile App Development",
    "Web Development",
    "Quality Assurance",
    "DevOps",
    "UI/UX Development",
    "eCommerce Development",
    "Networking Solution",
    "SEO & Digital Marketing",
  ];

  const techList = [
    "Node JS",
    "CodeIgniter",
    "Laravel",
    "Bootstrap",
    "Cake PHP",
    "Angular",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Swift",
    "Java",
    "Python",
    "Django",
    "React.js",
    "Objective C",
    "Kotlin",
    "Flutter",
    "SQl",
    "MySql",
    "MongoDB",
    "PostgreSql",
    "WordPress",
    "View Js",
    "AI/ML",
    "Power BI",
    "Salesforce",
    "Next js",
    "Azure",
  ];

  const industryList = [
    "Healthcare & Fitness",
    "Education & eLearning",
    "Government",
    "On-Demand Solution",
    "Information Services",
    "Insurance",
    "Food & Restaurant",
    "B2B Solutions",
    "Tracking Systems",
    "Social Networking",
    "Shopping App",
    "Manufacturing",
    "Logistics",
    "Smart City",
    "Non Profits",
    "E-commerce & Retail",
    "Music & Entertainment",
    "Telecom",
    "Events and Ticketing",
    "Travel & Hospitality",
    "Booking Application",
    "Real State & Property",
    "Fintech",
    "Power and Renewal Energy",
    "Beauty & Wellness",
    "Enterprise Mobiity",
    "CRM Solution",
    "Transportation",
    "Specialities And Services",
    "Auction System",
  ];
  return (
    <>
      {/* HERO SECTION */}
      <main className="flex flex-col items-start p-20 min-h-screen bg-[#0D0B2D]">
        <p className="mb-4 text-white font-bold mt-30 px-40">A trusted IT partner</p>
        <h1 className="mb-6 text-white text-5xl leading-tight font-bold px-40">
          The best place for your all <br />
          <em className="text-red-600 not-italic ">Software development</em> and
          IT <br />
          Solutions.
        </h1>
        <p className="text-white font-bold px-40">
          MINDIII is a leading information technology (IT) company in India,
          Canada,
          <br /> Australia, Europe, UK and USA for IT Solutions & software
          services, deals in Web
          <br /> and Mobile Apps Development.
        </p>
      </main>

      {/* SERVICES SECTION */}
      <div className="bg-white flex flex-col items-center py-16 px-6">
        <h1 className="text-red-600 text-4xl font-bold mb-4">Services</h1>
        <p className="text-gray-800 text-center mb-12">
          We work on the latest Software Development Coding Technology services
          <br />
          MINDIII deals in Native and Hybrid Mobile App Development like React
          Native, Flutter etc, Web Development, Progressive Web App,
          <br /> UI/UX Development, CRM & CMS portals, Wearable Device Apps etc.
        </p>

        {/* Services Section */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between w-full max-w-6xl">
          {/* LEFT LIST */}
          <div className="flex-1">
            <h1 className="text-red-600 font-bold text-3xl mb-4">
              Services We Are Providing
            </h1>
            <ul className="text-gray-900 font-semibold text-lg space-y-2">
              <li className="hover:text-[#FF2D55] transition-colors duration-200">
                Android App Development
              </li>
              <li className="hover:text-[#FF2D55] transition-colors duration-200">
                PHP Development
              </li>
              <li className="hover:text-[#FF2D55] transition-colors duration-200">
                Angular JS Website Development
              </li>
              <li className="hover:text-[#FF2D55] transition-colors duration-200">
                React JS Website Development
              </li>
              <li className="hover:text-[#FF2D55] transition-colors duration-200">
                WordPress Website Development
              </li>
              <li className="hover:text-[#FF2D55] transition-colors duration-200">
                React Native Development
              </li>
              <li className="hover:text-[#FF2D55] transition-colors duration-200">
                Node JS Development
              </li>
            </ul>
          </div>

          {/* RIGHT GRID CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {serviceCards.map((service, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition bg-white text-center"
              >
                <div className="text-3xl mb-3 text-red-500">🎯</div>
                <h4 className="font-semibold text-[#001F3F]">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#0D0B2D] py-16 px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#FF2D55] mb-2">Technologies</h2>
        <p className="text-gray-300 mb-2 font-bold ">We Serve Technologies</p>
        <p className="text-gray-400 max-w-3xl font-bold mx-auto mb-12 text-sm">
          Looking for the best software development company? We work with the
          latest technologies like Angular.js, React.js, Node.js, Python, Swift,
          Kotlin, Flutter, Objective-C, Core Java, PHP and more.
        </p>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techList.map((tech, i) => (
            <div
              key={i}
              className="bg-white text-[#0D0B2D] font-semibold rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white py-16 text-center">
        {/* Headin */}
        <h2 className="text-4xl font-bold mb-2 text-[#FF2D55] ">Industries</h2>
        <h6 className="text-gray-800 font-bold">
          We as MINDIII, provide on-demand IT and Software solutions for all
          leading industries
        </h6>
        <p className="text-center text-gray-600 font-bold mt-5">
          MINDIII team provides the best IT and Software solutions for all major
          industries like health care, hospitality, logistics, power, <br />{" "}
          renewable, E-commerce, Education & learning, information services,
          transportation, communication, and all on-demand software <br />
          needs.
        </p>
        {/* Tech Grid */}
        <div className="grid grid-cols-3 grid-rows-10 gap-4 p-5 px-40 ">
          {industryList.map((ind, i) => (
            <div
              key={i}
              className="bg-[#0D0B2D] font-semibold rounded-4xl p-4 hover:text-[#FF2D55] mt-5"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="bg-white py-16 px-8 md:px-20 flex flex-col md:flex-row gap-10 border-4 border-gray-800  border-t-[#0D0B2D]  rounded-2xl">
        {/* Left Side – Contact Form */}
        <div className="border border-gray-200 p-8 rounded-2xl shadow-sm flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Connect with Us today and get the best IT & <br />
            Software solutions |{" "}
            <em className="text-[#FF2D55] not-italic">MINDIII</em>
          </h2>

          <p className="text-gray-600 font-semibold mb-8">
            Feel free to contact us via email, phone, Skype & WhatsApp. We'll be
            pleased to assist you with all your software consulting needs.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF2D55] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF2D55] outline-none"
              />
            </div>

            {/* Contact No */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Contact No
              </label>
              <input
                type="text"
                placeholder="Enter Contact Number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF2D55] outline-none"
              />
            </div>

            {/* Teams ID / WhatsApp */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Teams ID / WhatsApp
              </label>
              <input
                type="text"
                placeholder="Enter Teams ID / WhatsApp"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF2D55] outline-none"
              />
            </div>

            {/* About Project */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                About Project*
              </label>
              <textarea
                rows="4"
                placeholder="About Project"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF2D55] outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-start">
              <button
                type="submit"
                className="bg-[#FF2D55] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#e5264b] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side – Contact Info */}
        <div className="bg-[#0D0B2D] text-white rounded-2xl p-8 flex-1 flex flex-col justify-between w-half">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6 text-lg font-semibold">
              We'd love to resolve your queries with<br/> personalized assistance.
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-bold text-xl text-gray-400">
                  Chat with us
                </span>
                <br />
                <span className="text-white font-bold text-lg">contact@mindiii.com</span>
              </p>

              <p>
                <span className="font-bold text-xl text-gray-400">
                  Let's discuss via call
                </span>
                <br/>
                <span className="text-white font-bold text-lg">+91-9165613316</span>
              </p>
              <p>

                <span className="font-bold text-xl text-gray-400">
                  Chat with Us
                </span>
                <br/>
                <span className="text-white font-bold text-lg">MINDIII5</span>
              </p>
            </div>
            <div className="py-4 mt-70">
              <hr className="border-t-2 border-gray-400" />
            </div>
            <div className="flex flex-row gap-5 ">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={40}
                height={20}
                priority
                className="object-contain border rounded-full"
              />

              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={40}
                height={20}
                priority
                className="object-contain border rounded-full"
              />

              <Image
                src="/insta.jpeg"
                alt="Instagram"
                width={40}
                height={20}
                priority
                className="object-contain border rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0B0133] p-10">
        <div className="flex justify-between  px-5">
          <h1 className="text-2xl font-semibold">
            “Enabling Business Make Business”
          </h1>
          <Image
            alt="logo"
            src="/mindiii.webp"
            width={180}
            height={40}
            priority
            className="object-contain mr-20"
          />
        </div>
        <div className="p-5 flex felx-row items-center justify-between mt-10">
          <ul>
            <li className="font-semibold text-xl">Quick Links</li>
            <div className="h-[3px] bg-[#FF2D55] w-1/2 mt-1 rounded"></div>

            <li className="hover:text-[#FF2D55] mt-5">Career</li>
            <li className="hover:text-[#FF2D55]">About Us</li>
            <li className="hover:text-[#FF2D55]">Contact Us</li>
          </ul>

          <ul>
            <li className="font-semibold text-xl">Sevices</li>
             <div className="h-[3px] bg-[#FF2D55] w-1/4 mt-1 rounded"></div>
            <li className="hover:text-[#FF2D55] mt-5">
              Mobile App design & Development
            </li>
            <li className="hover:text-[#FF2D55]">Web Development</li>
            <li className="hover:text-[#FF2D55]">UI/UX Development</li>
            <li className="hover:text-[#FF2D55]">Ecommerce Development</li>
            <li className="hover:text-[#FF2D55]">Quality Assurance</li>
          </ul>

          <ul>
            <li className="font-semibold text-xl">Contact Us</li>
            <div className="h-[3px] bg-[#FF2D55] w-1/4 mt-1 rounded"></div>
            <li className="mt-5">
              501,504 Krishna Tower, Main
              <br /> Rd, above ICICI Bank,
              <br /> Pipliyahana, Indore, Madhya
              <br /> Pradesh 452016
            </li>
            <li>+91-916563316</li>
            <li>contact@mindiii.com</li>
          </ul>
        </div>

        <div className="flex justify-between items-start flex-wrap gap-2 p-5">
          <div className="font-bold flex flex-row flex-wrap gap-2">
            <Image
              src="/can.png"
              alt="can"
              width={40}
              height={50}
              priority
              className="object-contain"
            />
            <h1>Canada |</h1>

            <Image
              src="/india.png"
              alt="Ind"
              width={40}
              height={50}
              priority
              className="object-contain"
            />
            <h1>India |</h1>

            <Image
              src="/spain.png"
              alt="Spain"
              width={40}
              height={50}
              priority
              className="object-contain"
            />
            <h1>Spain |</h1>

            <div className="w-full"></div>

            <Image
              src="/uk.png"
              alt="UK"
              width={40}
              height={50}
              priority
              className="object-contain"
            />
            <h1>UK |</h1>

            <Image
              src="/aus.png"
              alt="Aus"
              width={40}
              height={50}
              priority
              className="object-contain"
            />
            <h1>Australia |</h1>
          </div>

          <div className="flex flex-row gap-5 mt-2">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="/aws.png"
                alt="aws"
                width={100}
                height={100}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="/cloud.png"
                alt="cloud"
                width={100}
                height={100}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="/Azure.png"
                alt="Azure"
                width={100}
                height={100}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="/GDPR.png"
                alt="GDPR"
                width={100}
                height={100}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center justify-center">
          <Image
            src="/facebook.png"
            alt="facebook"
            width={40}
            height={20}
            priority
            className="object-contain border rounded-full"
          />

          <Image
            src="/linkedin.png"
            alt="linkedin"
            width={40}
            height={20}
            priority
            className="object-contain border rounded-full"
          />

          <Image
            src="/insta.jpeg"
            alt="Instagram"
            width={40}
            height={20}
            priority
            className="object-contain border rounded-full"
          />
        </div>

        <div className="py-4 px-10">
          <hr className="border-t-2 border-gray-300" />
        </div>
        <p className="text-center">
          Copyright © MINDIII Systems Pvt. Ltd. 2024 | All rights reserved.
        </p>
      </footer>
    </>
  );
}
