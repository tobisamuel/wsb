import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="relative bg-cyan-blue md:h-[224px]">
      <div className="w-[calc(100%-50px)] h-[92px] mx-auto bg-white font-inter">
        <div className="w-full h-full flex">
          <div className="basis-1/5 flex items-center ml-7 font-bold">
            <h3>
              <Link href="/">Wyzsze Szkoly Bankowe</Link>
            </h3>
          </div>
          <div className="basis-4/5 ml-[83px] text-xs">
            <div className="w-full h-full pr-7 flex justify-end items-center md:hidden">
              <FaBars />
            </div>
            <div className="hidden h-[50px] mt-2 md:flex justify-between text-xxs text-subtext">
              <h5 className="font-bold">
                Go to the universitys wbair: WSB Group
              </h5>
              <ul className="mr-9 flex space-x-8 font-medium">
                <li>contact</li>
                <li>For media</li>
                <li>Moodle</li>
                <li>Extranet</li>
                <li>
                  <Link href="/signup">Online registration</Link>
                </li>
                <li>
                  <span className="text-xxs font-bold">PL</span>
                </li>
              </ul>
            </div>
            <ul className="hidden mr-5 md:flex items-center justify-between text-[13px] font-bold">
              <li>
                <Link href="/about">Meet WSB</Link>
              </li>
              <li>
                <Link href="/studies-and-training">Studies and Training</Link>
              </li>
              <li>
                <Link href="/cooperation-with-business">
                  Cooperation with business
                </Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <div className="flex flex-col items-center">
                  <BiSearch />
                  <h5 className="font-normal text-xxs">Search</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="hidden md:block ml-28 mt-3 font-semibold font-roboto">
        Banking Schools / Meet WSB
      </h1>
      <div className="hidden absolute top-[139px] left-[25px] w-[calc(100%-50px)] h-[108px] bg-white md:flex justify-between items-center shadow-lg">
        <h1 className="text-[40px] font-robotoslab ml-[38px]">Meet WSB</h1>
        <button className="px-[23px] py-[15px] mr-[73px] bg-pink rounded-md text-white text-xs font-bold">
          subscribe online
        </button>
      </div>
    </div>
  );
};

export default Navbar;
