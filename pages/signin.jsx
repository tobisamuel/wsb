import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import Layout from "../components/Layout";

const Signin = () => {
  return (
    <Layout>
      <div className="mt-28 mb-28 px-[128px] w-full flex justify-center">
        <div className="w-[676px] bg-lightgray px-[88px] pt-16 pb-6">
          <h2 className="text-[40px] text-tabac font-bold font-robotoslab">
            Already have an Applicant&#39;s Account? <br /> Log in
          </h2>
          <p className="mt-10 text-tabac font-bold font-robotoslab">
            If you already are a WSB University student or graduate, you can
            skip Account setup and sign in using your Extranet login and
            password.
          </p>
          <form className="mt-[51px] space-y-4">
            <input
              type="text"
              placeholder="LOGIN (E-MAIL ADDRESS)"
              className="w-[486px] h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
            />
            <input
              type="text"
              placeholder="PASSWORD"
              className="w-[486px] h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
            />

            <button className="w-[486px] h-[72px] px-8 flex items-center justify-between bg-tabac rounded-md text-white text-xs font-inter font-bold">
              <p>SET UP APPLICANT&#39;S ACCOUNT</p>
              <span className="text-xl">
                <BsArrowRight />
              </span>
            </button>
            <div className="space-x-6 font-roboto underline">
              <span>Forgot Password</span>
              <span>Resend activation message</span>
            </div>
          </form>
        </div>

        <div className="w-[572px] bg-tabac px-[86px] py-16">
          <div className="text-white">
            <h2 className="text-[40px]  font-bold font-robotoslab">
              Do not yet have <br /> an Applicant&#39;s Account?
            </h2>
            <p className="mt-12  font-bold font-robotoslab">
              Why set up Applicant&#39;s Account?
            </p>
            <div className="my-7 space-y-5">
              <div className="flex items-start gap-4 text-base">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p className="font-inter font-medium text-sm">
                  All of the steps involved in the admission process will be
                  completed online.
                </p>
              </div>

              <div className="flex items-center gap-4 text-base">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p className="font-inter font-medium text-sm">
                  You will submit application documents, sign your service
                  contract and make payments online – from wherever you are.
                </p>
              </div>

              <div className="flex items-center gap-4 text-base">
                <span>
                  <FaRegCheckCircle />
                </span>
                <p className="font-inter font-medium text-sm">
                  Check the status and history of your applications.
                </p>
              </div>
            </div>

            <Link href="/signup">
              <a className="w-full h-[72px] mt-8 px-8 flex items-center justify-between bg-white rounded-md text-tabac text-xs font-inter font-bold">
                <p>REGISTER</p>
                <span className="text-xl">
                  <BsArrowRight />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
