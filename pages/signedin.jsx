import AccountNav from "../components/accountnav";
import Layout from "../components/Layout";
import { MdAccountCircle } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const SignedIn = () => {
  return (
    <Layout>
      <AccountNav />
      <div>
        <div className="ml-60 mt-9 flex items-center">
          <div className="text-[188px]">
            <MdAccountCircle />
          </div>
          <div className="ml-[60px]">
            <h1 className="text-[40px] text-tabac font-bold font-robotoslab">
              ABIOLA ISIAKA
            </h1>
            <p className="mt-4 text-subtext font-medium  font-roboto">
              EMAIL ADDRESS
            </p>
            <p className="text-xl font-medium font-roboto">
              ESKAY234@GMAIL.COM
            </p>
          </div>
        </div>

        <div className="mx-[109px] my-32 px-14 pt-10 pb-[70px] border-[3px] border-tabac">
          <h2 className="font font-robotoslab font-bold text-tabac text-[40px]">
            Study for a degree now <br /> at WSB Universities!
          </h2>

          <div className="w-full flex mt-8">
            <div className="w-1/4">
              <div className="w-12 h-12 border border-tabac rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">1</span>
              </div>
              <p className="mt-8 font-bold text-tabac font-robotoslab">
                Select the course/program <br /> you want.
              </p>
            </div>
            <div className="w-1/4">
              <div className="w-12 h-12 border border-tabac rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">2</span>
              </div>
              <p className="mt-8 font-bold text-tabac font-robotoslab">
                Fill out an online application form.
              </p>
            </div>
            <div className="w-1/4">
              <div className="w-12 h-12 border border-tabac rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">3</span>
              </div>
              <p className="mt-8 font-bold text-tabac font-robotoslab">
                Submit all documents and sign <br /> your service contract. Do
                it <br /> online via your Applicant&#39;s <br /> Account.
              </p>
            </div>
            <div className="w-1/4">
              <div className="w-12 h-12 border border-tabac rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">4</span>
              </div>
              <p className="mt-8 font-bold text-tabac font-robotoslab">
                Enroll now and become a WSB University Student!
              </p>
            </div>
          </div>

          <button className="h-[72px] w-72 mt-24 px-[29px] py-[15px] flex items-center justify-between bg-pink rounded-md text-white text-xs font-inter font-bold">
            <p>SIGN UP ONLINE</p>
            <span className="text-xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SignedIn;
