import homeImages from "../../public/Images/Home_Images.jpg";
import homeImages2 from "../../public/Images/Home_Images_2.jpg";
import homeImages3 from "../../public/Images/Home_Images_3.jpg";
import { IoStarSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto">
        <div className="carousel w-full scroll-smooth">
          {/* Slider-1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <div>
              <img
                className="w-full h-100 md:w-full md:h-full"
                src={homeImages}
                alt=""
              />
            </div>
            <section className="absolute md:top-50 top-18 md:w-8/10 md:px-20 px-10">
              <h1
                className="md:text-6xl text-3xl text-white font-semibold max-md:py-1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <span className="text-[#ff8a00]">Reliable Freight</span> and
                Logistics solution
              </h1>
              <p
                className="text-2xl text-white hidden md:block"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Innovative Logistics and Metal Trading: Ensuring Seamless
                Delivery and Reliable Solutions for Your Business Needs in New
                Delhi
              </p>
              <div className="flex space-x-4 md:mt-4 mt-18">
                <button
                  className="md:px-4 md:py-4 px-2 py-2 cursor-pointer text-white text-xl bg-blue-600 hover:bg-blue-700"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  Explore Our Service
                </button>{" "}
                <button
                  className="md:px-4 md:py-3 px-2 py-2 cursor-pointer text-white text-xl border-1 hover:bg-[#ff8a00] duration-500 transition-all"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  Read More
                </button>
              </div>
            </section>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text-[#ff8a00]"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text-[#ff8a00]"
              >
                ❯
              </a>
            </div>
          </div>
          {/* Slider-2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <div>
              <img
                className="w-full h-100 md:w-full md:h-full"
                src={homeImages2}
                alt=""
              />
            </div>
            <section className="absolute md:top-50 top-20 md:w-8/10 px-20">
              <h1
                className="md:text-9xl text-3xl text-white font-semibold"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <span className="text-[#ff8a00]">Around</span>
                <br /> The world
              </h1>
              <p
                className="md:text-2xl text-white"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                There are many variations of passages of worem Ipsum available,
                but the majority
              </p>
              <div className="space-x-4 mt-4">
                <button
                  className="px-4 py-4 cursor-pointer text-white text-xl bg-blue-600 hover:bg-blue-700"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  View Details
                </button>{" "}
              </div>
            </section>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text-[#ff8a00]"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text-[#ff8a00]"
              >
                ❯
              </a>
            </div>
          </div>
          {/* Slider-3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <div>
              <img
                className="w-full h-100 md:w-full md:h-full"
                src={homeImages3}
                alt=""
              />
            </div>
            <section className="absolute md:top-50 top-20 md:w-8/10 px-20">
              <h1
                className="md:text-8xl text-3xl text-white font-semibold"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <span className="text-[#ff8a00]">To Every</span>
                <br /> Direction
              </h1>
              <p
                className="md:text-2xl text-white"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                There are many variations of passages of worem lpsum
                available,but the majority
              </p>
              <div className="space-x-4 mt-4">
                <button
                  className="px-4 py-4 cursor-pointer text-white text-xl bg-blue-600 hover:bg-blue-700"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  View Details
                </button>{" "}
              </div>
            </section>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text-[#ff8a00]"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text-[#ff8a00]"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
        <figure className="md:flex mt-10 px-2 md:space-x-2 max-md:space-y-5">
          {/* Figure_1 */}
          <div className="flex flex-col items-center justify-center hover:border-1 rounded-md cursor-pointer duration-300 transition-all">
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
          <div className="flex flex-col items-center justify-center space-y-1 hover:border-1 rounded-md cursor-pointer duration-300 transition-all">
            <FaAward size={80} />
            <h2 className="text-xl font-bold">Expert Metal Trading Services</h2>
            <p className="text-[18px] font-sans md:px-10">
              Navigate the metals market with confidence through our expert
              trading services tailored for success.
            </p>
          </div>
          {/* Figure_3 */}
          <div className="flex flex-col items-center justify-center space-y-1 hover:border-1 rounded-md cursor-pointer duration-300 transition-all">
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
      </div>
    </>
  );
}
export default Home;
