import Layout from "../components/Layout";
import AccountMenu from "../components/accountMenu";

const Congrats = () => {
  return (
    <Layout>
      <AccountMenu />
      <div className="h-[1112px] mt-2 mb-7 mx-24 bg-lightgray">
        <h1 className="mt-16 ml-10 text-[96px] text-lightblue font-robotoslab font-[900]">
          Congratulations
        </h1>
        <h2 className="ml-[52px] text-tabac text-[40px] font-bold font-robotoslab">
          your enrollment process has <br /> been initated
        </h2>
        <p className="mt-[92px] ml-[55px] text-2xl text-tabac">
          A confirmation link has been sent to your e-mail address. Follow the
          link to confirm <br /> your application and proceed to the next step.{" "}
          <br />
          <br /> If you filled out your application form via an Applicant’s
          Account – go to your <br /> Account to continue with the enrollment
          process:{" "}
          <span className="text-pink">
            Go to my Applicant’s Account now <br /> {">"}
          </span>
          <br />
          <br /> If you filled out your application form without setting up an
          Applicant’s Account, <br /> check your incoming e-mail to find
          instructions on what to do next.
        </p>

        <div className="mt-7 ml-9 mr-[97px] pl-[44px] pt-[42px] pb-[44px] bg-cyan-blue border border-pink">
          <p className="text-pink text-2xl">
            NOTE: To be eligible for promotional discounts, you must have timely
            filed all documents and meet any other requirements.
          </p>
          <p className="mt-7 text-pink text-2xl">
            You need to apply only once. You do not have to reapply if you
            change your mind <br /> about your choice of degree program or
            major; all you need to do is contact your <br /> Admissions Office
            and ask its staff to modify your application to suit your new <br />
            preferences.
          </p>
        </div>
      </div>
      <button className="ml-32 mt-7 mb-[60px] px-[14px] py-[10px] border border-buttongray text-xs font-inter font-bold">
        Go to your Account
      </button>
    </Layout>
  );
};

export default Congrats;
