import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <>
      <nav className="z-[100] lg:bg-transparent">
        <div className="container-wrapper shadow-lg h-14 lg:h-16  rounded-2xl flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_16rem_1fr] gap-8 items-center">
          <div className="items-center justify-evenly text-base font-medium text-black hidden lg:flex">
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm sm:text-xl font-dream2"
            >
            Home
            </Link>
            <a
            href="https://t.me/KittyWif_s"
            target="_blank"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm sm:text-xl font-dream2"
            >
           Telegram
            </a>
          </div>

          <div className=" flex items-center gap-2">
            <img
              src="/images/logo.png"
              className="w-full max-w-[3.2rem] "
              alt=""
            />
            <p className=" font-dream2  text-xl sm:text-2xl">KittyWif</p>
          </div>

          <button
            className="text-2xl text-black flex lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <IoMenu />
          </button>

          <div className="items-center justify-evenly text-base font-medium text-black hidden lg:flex">
            <a href="https://twitter.com/Sol_Kitty_" target="_blank"
              to="roadmap"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm sm:text-xl font-dream2"
            >
            Twitter
            </a>
            <Link
              to="tokenomics"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm sm:text-xl font-dream2"
            >
       About Us
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[10000] bg-white border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-[16rem]"
        }`}
      >
        <div className="flex items-center justify-between mb-8 z-50">
          <img src="/images/logo.png" className="w-full max-w-[9rem]" alt="" />

          <button className="text-black text-2xl" onClick={toggleSidebar}>
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-black font-medium">
          <Link
            to="/"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            HOME
          </Link>
          <a
           href="https://t.me/KittyWif_s"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
          Telegram
          </a>
          <Link
            to="roadmap"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
          ROADMAP
          </Link>
          <Link
            to="tokenomics"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
       
          </Link>
        </div>
      </div>

      <div className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`} onClick={toggleSidebar}></div>
    </>
  );
}

export default Navbar;
