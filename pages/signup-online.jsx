import Layout from "../components/Layout";
import AccountMenu from "../components/accountMenu";
import { BsArrowRight, BsClockHistory } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const SignUpOnline = () => {
  return (
    <Layout>
      <div className="mt-36 mb-7 mx-[103px] flex gap-32">
        <div className="relative basis-1/2 w-[580px] pt-20 px-10 bg-lightgray">
          <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
            Choose the course/ <br /> program you want
          </h1>
          <p className="text-subtext text-sm font-medium font-roboto">
            Fill in the fields below and get started with your application
            process
          </p>

          <form className="mt-9 space-y-2">
            <select
              id="countries"
              className="w-full px-5 py-6 bg-transparent text-tabac text-xs font-bold font-inter rounded-md border border-border"
            >
              <option>TOWN/CITY</option>
            </select>

            <select
              id="countries"
              className="w-full px-5 py-6 bg-transparent text-tabac text-xs font-bold font-inter rounded-md border border-border"
            >
              <option>DATE OF ADMISSION </option>
            </select>
            <select
              id="countries"
              className="w-full px-5 py-6 bg-transparent text-tabac text-xs font-bold font-inter rounded-md border border-border"
            >
              <option>LEVEL OF EDUCATION </option>
            </select>
            <select
              id="countries"
              className="w-full px-5 py-6 bg-transparent text-tabac text-xs font-bold font-inter rounded-md border border-border"
            >
              <option>COURSE/PROGRAM </option>
            </select>
            <select
              id="countries"
              className="w-full px-5 py-6 bg-transparent text-tabac text-xs font-bold font-inter rounded-md border border-border"
            >
              <option>FORM OF STUDIES </option>
            </select>
            <select
              id="countries"
              className="w-full px-5 py-6 bg-transparent text-tabac text-xs font-bold font-inter rounded-md border border-border"
            >
              <option>THE METHOD OF IMPLIMENTING THE STUDIES</option>
            </select>

            <div className="mt-10 mb-9">
              <button className="w-full h-[72px] px-[29px] py-[15px] flex items-center justify-between bg-pink text-white rounded-md">
                <p className="text-xs font-inter font-bold">
                  FILL OUT APPLICATION FORM
                </p>
                <span className="text-xl">
                  <BsArrowRight />
                </span>
              </button>

              <div className="mt-6 mb-14 flex items-center gap-3">
                <BsClockHistory />
                <p className="text-[13px] font-inter">
                  it will take you up <br />
                  <span className="text-lightblue">
                    10 minutes to complete
                  </span>{" "}
                  the <br />
                  application form.
                </p>
              </div>
            </div>
          </form>

          <div className="absolute top-24 -right-16 w-0 h-0 border-x-[40px] border-y-[101px] border-l-lightgray border-t-transparent border-r-transparent border-b-transparent"></div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-full border-2 px-11 flex justify-between items-center">
            <span className="text-[32px] text-lightblue font-robotoslab font-bold">
              Before you start
            </span>
            <Image src="/literature.png" alt="books" width={146} height={146} />
          </div>

          <div className="w-full mt-8">
            <div className="border-b border-boxgray pb-5 pl-6 flex items-center justify-between text-lightblue">
              <span className="text-2xl  font-robotoslab font-bold">
                why setup an applicants Account?
              </span>
              <span className="text-2xl">
                <IoIosArrowDown />
              </span>
            </div>

            <div className="border-b border-boxgray pt-8 pb-5 pl-6 flex items-center justify-between text-lightblue">
              <span className="text-2xl  font-robotoslab font-bold">
                things you should know
              </span>
              <span className="text-2xl">
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          <div className="w-3/4 mt-12 px-9 py-[72px] bg-boxgray bg-opacity-20 font-inter">
            <h4 className="text-sm text-tabac font-bold">Do you know that:</h4>
            <div className="mt-3 space-y-3 text-xs text-subtext">
              <p>
                our form is perfectly secure – we never share your data with any
                third party
              </p>
              <p>
                with the Applicant&#39;s Account, you will experience an all-out
                online admission process
              </p>
              <p>
                via the Applicant&#39;s Account, you will fill in your
                application form, upload and sign all documents, and make any
                payments
              </p>
              <p>
                please make sure you have your ID or passport (non-Polish
                nationals) on hand - you will need it to fill in the application
                form.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="ml-32 mt-4 mb-[60px] px-[14px] py-[10px] border border-buttongray text-xs font-inter font-bold">
        Go to your Account
      </button>
    </Layout>
  );
};

export default SignUpOnline;
