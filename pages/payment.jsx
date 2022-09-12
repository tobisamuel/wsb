import Layout from "../components/Layout";
import AccountMenu from "../components/accountMenu";
import { BsArrowRight, BsClockHistory } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const PaymentPage = () => {
  return (
    <Layout>
      <AccountMenu />
      <div className="mt-6 mx-[103px] flex justify-between">
        <div className="w-[760px]">
          <div className="pt-20 pl-10 pr-32 bg-lightgray">
            <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
              Payment Method
            </h1>
            <p className="text-tabac font-robotoslab">
              a complete pricelist can be found in our website and in the
              service contract that will be fowarded to you as soon as you have
              completed your application form
            </p>

            <form className="mt-9">
              <div className="flex gap-[14px]">
                <fieldset className="w-1/2 ">
                  <legend className="mb-4 text-xs font-medium font-inter">
                    PAYMENT SCHEDULE
                  </legend>
                  <select
                    id="countries"
                    class="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                  >
                    <option selected>SELECT</option>
                  </select>
                </fieldset>

                <fieldset className="w-1/2 ">
                  <legend className="mb-4 text-xs font-medium font-inter">
                    NUMBER OF INSTALLMENT
                  </legend>
                  <select
                    id="countries"
                    class="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                  >
                    <option selected>1</option>
                  </select>
                </fieldset>
              </div>

              <div className="mt-12 pt-1 border-t border-boxgray">
                <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
                  Promotions
                </h1>
                <p className="text-subtext font-medium font-roboto">
                  your eligibility for any discounts and promotions you claimed
                  will be verified by WSB staff in processing your application
                  document
                </p>
              </div>

              <div className="mt-4 pb-11 flex flex-col gap-[14px]">
                <legend className="text-xl text-lightblue font-bold font-inter">
                  promotion offers for WSB
                </legend>

                <div className="flex items-center">
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
                  <p className="ml-4 text-xs font-medium text-tabac">
                    I confirm that I meet the conditions of promotion of
                    graduates
                  </p>
                </div>

                <fieldset className="">
                  <label className="text-xl text-lightblue font-bold font-inter">
                    i have a promotional code
                  </label>
                  <div className="mt-5 w-full flex">
                    <input
                      type="text"
                      placeholder="ENTER PROMOTIONAL CODE"
                      className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                    />
                    <button
                      type="button"
                      className="h-[72px] w-[145px] ml-2 px-[29px] py-[15px] flex items-center justify-center bg-lightblue text-white text-xs font-inter font-bold rounded-md"
                    >
                      CONFIRM
                    </button>
                  </div>
                </fieldset>

                <fieldset className="mt-8">
                  <label className="text-xl text-lightblue font-bold font-inter">
                    Firma - discount scheme for business
                  </label>
                  <div className="mt-5 w-full flex">
                    <div className="w-full flex gap-3">
                      <input
                        type="text"
                        placeholder="COMPANY NAME"
                        className="w-1/2 h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                      />
                      <input
                        type="text"
                        placeholder="NIP TAX IDENTIFICATION NUMBER"
                        className="w-1/2 h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                      />
                    </div>
                    <button
                      type="button"
                      className="h-[72px] w-[145px] ml-2 px-[29px] py-[15px] flex items-center justify-center bg-lightblue text-white text-xs font-inter font-bold rounded-md"
                    >
                      CONFIRM
                    </button>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
          <div className="mt-8 flex">
            <div className="basis-1/2 flex items-center gap-3">
              <BsClockHistory />
              <p className="text-[13px] font-inter">
                it will take you up{" "}
                <span className="text-lightblue">10 more minutes</span>
                {""} to complete
                <br />
                the application form.
              </p>
            </div>
            <button
              type="button"
              className="basis-1/2 h-[72px] w-full px-[29px] py-[15px] flex items-center justify-between bg-pink text-white rounded-md"
            >
              <p className="text-xs font-inter font-bold">
                NEXT: EDUCATION & WORK EXPERIENCE
              </p>
              <span className="text-xl">
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div>
          <div className="px-9 py-[72px] bg-boxgray bg-opacity-20">
            <div className="space-y-5">
              <div>
                <h3 className="text-lightblue text-xl font-inter font-bold">
                  2022/18/19/POZ/8FBEE9B7D4
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  APPLICATION ID
                </span>
              </div>

              <div>
                <h3 className="text-lightblue text-xl font-inter font-bold">
                  WSB Posnan
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  Selected Location
                </span>
              </div>

              <div>
                <h3 className="text-lightblue text-xl font-inter font-bold">
                  Akademia Poject Managera
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  Course/program
                </span>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-2 text-lightblue">
              <IoIosArrowDown />
              <span className="font-bold font-inter">show more</span>
            </div>

            <div className="mt-10 pt-8 border-t">
              <div className="flex items-center">
                <div>
                  <p className="text-xs font-medium">tuition fee</p>
                  <p className="font-inter font-bold">PLN 6250</p>
                </div>
                <span className="ml-8 text-pink text-4xl font-inter font-bold">
                  5950 PLN
                </span>
              </div>

              <div className="mt-12 flex justify-between font-inter">
                <span className="text-xs text-subtext">Promotional offers</span>
                <span className="text-xs text-pink font-medium">
                  Promocia W Szesnym
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 px-9">
            <p className="font-bold font-inter">Need help?</p>
            <p className="mt-[22px] text-xs text-subtext font-bold font-inter">
              Give us a phone call
            </p>
            <p className="text-lightblue font-bold font-inter">
              +48 52 582 91 00
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="ml-32 mt-16 mb-[60px] px-[14px] py-[10px] border border-buttongray text-xs font-inter font-bold"
      >
        Go back
      </button>
    </Layout>
  );
};

export default PaymentPage;
