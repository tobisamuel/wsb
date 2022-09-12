import { BsArrowRight } from "react-icons/bs";

const AccountNav = () => {
  return (
    <div className="h-32 flex items-center bg-lightgray">
      <div className="ml-56 basis-1/2 space-x-8 font-robotoslab font-bold text-xl text-tabac">
        <a className="p-12 border-b-4 border-tabac">My Account</a>
        <a className="p-12">My Application</a>
      </div>
      <div className="basis-1/2 flex justify-end">
        <button className="h-[72px] w-72 px-[29px] py-[15px] mr-[149px] flex items-center justify-between bg-pink rounded-md text-white text-xs font-inter font-bold">
          <p>SIGN UP ONLINE</p>
          <span className="text-xl">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AccountNav;
