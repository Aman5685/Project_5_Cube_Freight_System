import footerLogo from "../../public/Images/Logo.png";
function Footer() {
  return (
    <>
      <header className="container max-w-screen-2xl mx-auto mt-15 px-10 bg-[#E7EFFF]">
        <footer className="footer sm:footer-horizontal  text-base-content p-10">
          <aside>
            <img
              className="w-30 h-30 fill-current bg-[#2B6BE7] rounded-full text-white"
              src={footerLogo}
              alt=""
            />
            <p>
              Cube Freight System and Cube Metal Pvt. Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <aside className="flex content-center justify-center">
          <p className="">
            Copyright © {new Date().getFullYear()} Cube Freight System and Cube
            Metal Pvt. Ltd. All right reserved | Made with By{" "}
            <a
              className="text-[#2B6BE7] hover:underline"
              href="https://amancoderportfolio.netlify.app/"
              target="_blank"
            >
              Aman Yadav
            </a>
          </p>
        </aside>
      </header>
    </>
  );
}

export default Footer;
