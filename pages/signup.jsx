import { BsArrowRight } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="mt-28 mb-28 px-[128px] w-full flex">
        <div className="w-1/2">
          <div>
            <h2 className="text-[40px] text-tabac font-bold font-robotoslab">
              Your first visit to this <br /> site? Set up an <br />{" "}
              Applicant&#39;s Account
            </h2>
            <p className="mt-14 text-tabac font-bold font-robotoslab">
              Fill in the fields below to set up an Applicant&#39;s Account. If
              you already <br /> are a WSB University student or graduate, you
              can skip Account setup <br /> and sign in using your Extranet
              login and password.
            </p>
            <form className="mt-[51px] space-y-4">
              <input
                type="text"
                placeholder="FIRST NAME"
                className="w-[486px] h-[72px] pl-7 border-[0.5px] border-border rounded-md placeholder:font-medium placeholder:text-xs placeholder:text-black"
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className="w-[486px] h-[72px] pl-7 border-[0.5px] border-border rounded-md placeholder:font-medium placeholder:text-xs placeholder:text-black"
              />
              <input
                type="text"
                placeholder="EMAIL"
                className="w-[486px] h-[72px] pl-7 border-[0.5px] border-border rounded-md placeholder:font-medium placeholder:text-xs placeholder:text-black"
              />
              <input
                type="text"
                placeholder="PASSWORD"
                className="w-[486px] h-[72px] pl-7 border-[0.5px] border-border rounded-md placeholder:font-medium placeholder:text-xs placeholder:text-black"
              />

              <div className="my-11 space-y-5">
                <div className="flex items-center gap-4 text-tabac text-base">
                  <GrStatusGood />
                  <p className="font-inter font-medium text-sm">
                    8 or more characters
                  </p>
                </div>
                <div className="flex items-center gap-4 text-tabac text-base">
                  <GrStatusGood />
                  <p className="font-inter font-medium text-sm">
                    at least one lowercase (small) letter and one uppercase
                    (capital) letter
                  </p>
                </div>
                <div className="flex items-center gap-4 text-tabac text-base">
                  <GrStatusGood />
                  <p className="font-inter font-medium text-sm">
                    at least one digit
                  </p>
                </div>
                <div className="flex items-center gap-4 text-tabac text-base">
                  <GrStatusGood />
                  <p className="font-inter font-medium text-sm">
                    at least one special character (e.g. @ # $ % & *)
                  </p>
                </div>
              </div>

              <div className="flex">
                <div>
                  <label
                    htmlFor="default-toggle"
                    className="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-toggle"></div>
                  </label>
                </div>
                <p className="ml-1 text-xs font-medium text-tabac">
                  Show the recruitment for studies made before the account was
                  created on the <br /> candidate’s account (uncheck if you do
                  not want to see them
                </p>
              </div>

              <div className="py-8 border-t border-tabac">
                <span className="flex items-center gap-2">
                  <p className="font-medium text-xs">
                    1. The administrators of the personal data of the Website
                    Users ....
                  </p>
                  <FaRegQuestionCircle />
                </span>

                <div className="mt-4 flex items-center">
                  <input type="checkbox" />
                  <span className="ml-[14px] flex items-center gap-2">
                    <p className="font-medium text-xs">
                      I declare that I know and accept the provisions of the
                      Integr ....
                    </p>
                    <FaRegQuestionCircle />
                  </span>
                </div>
              </div>

              <button className="w-80 h-[72px] px-8 flex items-center justify-between bg-tabac rounded-md text-white text-xs font-inter font-bold">
                <p>SET UP APPLICANT&#39;S ACCOUNT</p>
                <span className="text-xl">
                  <BsArrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-[475px] h-[376px] ml-24 flex items-center justify-center bg-boxgray border-[0.5px] border-black bg-opacity-20">
            <div className="px-12">
              <h2 className="text-[40px] text-tabac font-robotoslab font-bold">
                Already have an Applicant&#39;s <br /> Account?
              </h2>
              <button className="w-80 h-[72px] mt-6 px-8 flex items-center justify-between bg-tabac rounded-md text-white text-xs font-inter font-bold">
                <p>SIGN IN</p>
                <span className="text-xl">
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
