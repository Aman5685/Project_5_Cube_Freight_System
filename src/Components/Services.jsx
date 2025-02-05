import Services1 from "../../public/Images/Service_1.jpg";
import Services2 from "../../public/Images/Service_2.jpg";
import Services3 from "../../public/Images/Service_3.jpg";
function Services() {
  return (
    <>
      <header
        name="Services"
        className="container max-w-screen-2xl mx-auto mt-15 px-5"
      >
        {/* Services */}
        <nav className="flex w-full">
          <section className="md:w-1/2">
            <div className="bg-[#E7EFFF] flex flex-wrap p-6 space-y-4">
              <h1 className="text-2xl font-bold text-[#2B6BE7]">
                Delhi Solutions
              </h1>
              <p className="text-5xl text-black">
                Innovative Logistics for New Delhi
              </p>
              <strong className="text-xl font-light">
                Streamline your operations with cutting-edge logistics solutions
                and metal trading expertise right here in New Delhi.
              </strong>
              <button className="px-4 py-3 cursor-pointer text-white text-xl bg-blue-600 hover:bg-blue-700 mt-15">
                Explore Our Services
              </button>
            </div>
            <div className="flex w-1/2 mt-8 space-x-2 px-1 md:px-0">
              <img src={Services2} alt="" />
              <img src={Services3} alt="" />
            </div>
          </section>
          <aside className="hidden md:block md:w-1/2 px-8">
            <img className="h-full" src={Services1} alt="" />
          </aside>
        </nav>
      </header>
    </>
  );
}

export default Services;
