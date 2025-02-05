import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Faq from "./Components/Faq";
import Contact from "./Components/Contact";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Faq />
      <Contact />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </>
  );
}

export default App;
