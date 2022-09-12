import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="relative bg-cyan-blue h-[224px]">
      <div className="w-[calc(100%-50px)] h-[92px] mx-auto bg-white font-inter">
        <div className="w-full h-full flex">
          <div className="basis-1/5 flex items-center ml-7 font-bold">
            <h3>Wyzsze Szkoly Bankowe</h3>
          </div>
          <div className="basis-4/5 ml-[83px] text-xs">
            <div className="h-[50px] mt-2 flex justify-between text-xxs text-subtext">
              <h5 className="font-bold">
                Go to the universitys wbair: WSB Group
              </h5>
              <ul className="mr-9 flex space-x-8 font-medium">
                <li>contact</li>
                <li>For media</li>
                <li>Moodle</li>
                <li>Extranet</li>
                <li>Online registration</li>
                <li>
                  <span className="text-xxs font-bold">PL</span>
                </li>
              </ul>
            </div>
            <ul className="mr-5 flex items-center justify-between text-[13px] font-bold">
              <li>Meet WSR</li>
              <li>Studies and Training</li>
              <li>Cooperation with business</li>
              <li>Blog</li>
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
      <h1 className="ml-28 mt-2 font-semibold font-roboto">
        Banking Schools / Meet WSB
      </h1>
      <div className="absolute top-[139px] left-[25px] w-[calc(100%-50px)] h-[108px] bg-white flex justify-between items-center shadow-lg">
        <h1 className="text-[40px] font-robotoslab ml-[38px]">
          First degree Studies
        </h1>
        <button className="px-[23px] py-[15px] mr-[73px] bg-pink rounded-md text-white text-xs font-bold">
          subscribe online
        </button>
      </div>
    </div>
  );
};

export default Navbar;
