import { useEffect, useState } from "react";
import logo from "../../public/Images/Logo.gif";
import { IoMenuSharp } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { FaLocationDot } from "react-icons/fa6";

function Navbar() {
  //create menus usestate;
  const [menu, setMenu] = useState(false);
  //create array for navbar;
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About us",
    },
    {
      id: 3,
      text: "Services",
    },
    {
      id: 4,
      text: (
        <span onClick={() => document.getElementById("my_modal_3").showModal()}>
          Track Your Shipment
        </span>
      ),
    },
    {
      id: 5,
      text: "FAQ",
    },
    {
      id: 6,
      text: "Contact",
    },
  ];
  //create function to scrolling navbar;
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`max-w-screen-2xl container mx-auto px-5 fixed top-0 right-0 left-0 z-50
        ${
          sticky
            ? "sticky-navbar shadow-md bg-[#2B6BE7] duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="flex items-center justify-center h-20">
          {/* Left header */}
          <div className="w-3/10 flex space-x-3">
            <img className="w-60 h-30" src={logo} alt="" />
          </div>
          {/* Right header */}
          <div className="w-7/10">
            {/* Desktop Navbar */}
            <div>
              <ul className="hidden md:flex space-x-12 text-white text-xl">
                {navItems.map(({ id, text }) => (
                  <li
                    className="hover:text-[#ff8a00] cursor-pointer duration-100 transition-all"
                    key={id}
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                onClick={() => setMenu(!menu)}
                className="md:hidden flex justify-end px-4 text-white"
              >
                {menu ? (
                  <RiCloseLargeLine size={35} />
                ) : (
                  <IoMenuSharp size={35} />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <>
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
              className="bg-base-200"
            >
              <ul className="md:hidden flex flex-col w-screen h-full px-2 py-4 items-center justify-center space-y-3 text-xl">
                {navItems.map(({ id, text }) => (
                  <li
                    className="hover:text-[#ff8a00] cursor-pointer duration-100 transition-all"
                    key={id}
                  >
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {" "}
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {/* Modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-2xl">Tracking</h3>
            <div className="">
              <div className="flex items-center mt-5 gap-3">
                <FaLocationDot size={35} />
                <input
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Tracking ID No."
                />
              </div>
              <button className="px-4 py-3 flex mt-5 ml-4 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 duration-100 transition-all">
                Track
              </button>
            </div>
          </div>
        </dialog>
      </header>
    </>
  );
}
export default Navbar;
