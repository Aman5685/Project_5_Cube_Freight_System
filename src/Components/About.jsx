import image1 from "../../public/Images/About_Image_1.jpg";
import image2 from "../../public/Images/About_Image_2.jpg";
import image3 from "../../public/Images/About_Image_3.jpg";
import image4 from "../../public/Images/About_Image_4.jpg";
import image5 from "../../public/Images/About_Image_5.jpg";
import image6 from "../../public/Images/About_Image_6.jpg";
function About() {
  return (
    <>
      <header name="About us" className="container max-w-screen-2xl mx-auto">
        <section className="bg-[#2B6BE7]">
          <div className="flex flex-col items-center mt-10">
            <h1 className="md:text-3xl text-xl text-white font-bold mt-10">
              Streamlined Logistics
            </h1>
            <p className="md:text-5xl text-2xl text-white mt-4">
              Efficient Logistics Solutions
            </p>
          </div>
          {/* Six Cards */}
          <div className="flex flex-wrap px-2 items-center justify-center mt-10 w-full space-x-4 space-y-7">
            {/* Cards_1 */}
            <figure className="border-2 border-white p-2 md:w-3/10 space-y-2">
              <img className="w-90 h-50" src={image1} alt="" />
              <h1 className="text-xl md:px-2 text-white">
                Comprehensive Logistics Solutions
              </h1>
              <p className="text-[18px] md:px-2 text-white">
                Streamline your supply chain with our efficient and reliable
                logictics servives in New Delhi.
              </p>
              <button className="px-4 py-3 cursor-pointer text-white text-xl border-1 border-white hover:bg-white hover:text-black duration-500 transition-all">
                More Info
              </button>
            </figure>
            {/* Cards_2 */}
            <figure className="border-2 border-white p-2 md:w-3/10 space-y-2">
              <img className="w-90 h-50" src={image2} alt="" />
              <h1 className="text-xl md:px-2 text-white">
                Reliable Metal Trading Services
              </h1>
              <p className="text-[18px] md:px-2 text-white">
                Connect with global markets through our trusted and transparent
                metal trading platform.
              </p>
              <button className="px-4 py-3 cursor-pointer text-white text-xl border-1 border-white hover:bg-white hover:text-black duration-500 transition-all">
                More Info
              </button>
            </figure>
            {/* Cards_3 */}
            <figure className="border-2 border-white p-2 md:w-3/10 space-y-2">
              <img className="w-90 h-50" src={image3} alt="" />
              <h1 className="text-xl md:px-2 text-white">
                Advanced Inventory Management
              </h1>
              <p className="text-[18px] md:px-2 text-white">
                Optimize stock levels and reduce costs with our cutting-edge
                inventory management system.
              </p>
              <button className="px-4 py-3 cursor-pointer text-white text-xl border-1 border-white hover:bg-white hover:text-black duration-500 transition-all">
                More Info
              </button>
            </figure>
            {/* Cards_4 */}
            <figure className="border-2 border-white p-2 md:w-3/10 space-y-2">
              <img className="w-90 h-50" src={image4} alt="" />
              <h1 className="text-xl md:px-2 text-white">
                Customs Clearance Expertise
              </h1>
              <p className="text-[18px] md:px-2 text-white">
                Ensure smooth import/export operations with our professional
                customs clearance solutions.
              </p>
              <button className="px-4 py-3 cursor-pointer text-white text-xl border-1 border-white hover:bg-white hover:text-black duration-500 transition-all">
                More Info
              </button>
            </figure>
            {/* Cards_5 */}
            <figure className="border-2 border-white p-2 md:w-3/10 space-y-2">
              <img className="w-90 h-50" src={image5} alt="" />
              <h1 className="text-xl md:px-2 text-white">
                Efficient Freight Forwarding
              </h1>
              <p className="text-[18px] md:px-2 text-white">
                Experience seamless shipment handling across air, sea, and land
                with our expert freight forwarding.
              </p>
              <button className="px-4 py-3 cursor-pointer text-white text-xl border-1 border-white hover:bg-white hover:text-black duration-500 transition-all">
                More Info
              </button>
            </figure>
            {/* Card_6 */}
            <figure className="border-2 border-white p-2 md:w-3/10 space-y-2">
              <img className="w-90 h-50" src={image6} alt="" />
              <h1 className="text-xl md:px-2 text-white">
                Strategic Warehousing Solutions
              </h1>
              <p className="text-[18px] md:px-2 text-white">
                Maximize space and improve logistics flow with our strategic
                warehousing and storage options.
              </p>
              <button className="px-4 py-3 cursor-pointer text-white text-xl border-1 border-white hover:bg-white hover:text-black duration-500 transition-all">
                More Info
              </button>
            </figure>
            <div></div>
          </div>
        </section>
      </header>
    </>
  );
}

export default About;
