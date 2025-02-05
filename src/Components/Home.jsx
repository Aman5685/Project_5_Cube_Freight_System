import homeImages from "../../public/Images/Home_Images.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";

function Home() {
  return (
    <>
      <header name="Home" className="max-w-screen-2xl container mx-auto">
        <div>
          <img
            className="w-full h-100 md:w-full md:h-full"
            src={homeImages}
            alt=""
          />
        </div>
        <section className="absolute md:top-50 top-20 md:w-8/10 px-5">
          <h1 className="md:text-6xl text-3xl text-white font-semibold">
            <span className="text-[#ff8a00]">Reliable Freight</span> and
            Logistics solution
          </h1>
          <p className="text-2xl text-white hidden md:block">
            Innovative Logistics and Metal Trading: Ensuring Seamless Delivery
            and Reliable Solutions for Your Business Needs in New Delhi
          </p>
          <div className="space-x-4 mt-4">
            <button className="px-4 py-4 cursor-pointer text-white text-xl bg-blue-600 hover:bg-blue-700">
              Explore Our Service
            </button>{" "}
            <button className="max-md:mt-4 px-4 py-3 cursor-pointer text-white text-xl border-1 hover:bg-[#ff8a00] duration-500 transition-all">
              Read More
            </button>
          </div>
        </section>
        <figure className="md:flex mt-10 px-2 md:space-x-2 max-md:space-y-5">
          {/* Figure_1 */}
          <div className="flex flex-col items-center justify-center hover:border-2 rounded-md cursor-pointer duration-150 transition-all">
            <IoStarSharp size={80} />
            <h1 className="text-xl font-bold">
              Comprehensive Logistics Solutions
            </h1>
            <p className="text-[18px] font-sans md:px-10">
              Streamline your supply chain with our efficient and reliable
              logictics servives in New Delhi.
            </p>
          </div>
          {/* Figure_2 */}
          <div className="flex flex-col items-center justify-center space-y-1 hover:border-2 rounded-md cursor-pointer duration-150 transition-all">
            <FaAward size={80} />
            <h2 className="text-xl font-bold">Expert Metal Trading Services</h2>
            <p className="text-[18px] font-sans md:px-10">
              Navigate the metals market with confidence through our expert
              trading services tailored for success.
            </p>
          </div>
          {/* Figure_3 */}
          <div className="flex flex-col items-center justify-center space-y-1 hover:border-2 rounded-md cursor-pointer duration-150 transition-all">
            <FaThumbsUp size={80} />
            <h3 className="text-xl font-bold">
              Integrated Supply chain Management
            </h3>
            <p className="text-[18px] font-sans md:px-5">
              Enhance operational efficiency with our integrated approach to
              supply chain management.
            </p>
          </div>
        </figure>
      </header>
    </>
  );
}
export default Home;
