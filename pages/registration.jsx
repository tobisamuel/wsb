import Layout from "../components/Layout";
import AccountMenu from "../components/accountMenu";
import { BsArrowRight, BsClockHistory } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const RegistrationForm = () => {
  return (
    <Layout>
      <AccountMenu />
      <div className="mt-6 mx-[103px] flex justify-between">
        <div className="w-[770px]">
          <div className="pt-20 pl-10 pr-32 bg-lightgray">
            <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
              Essential personal details
            </h1>

            <form className="mt-14">
              <div className="flex flex-col gap-[14px]">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="SECOND NAME (OPTIONAL)"
                  className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="E-MAIL"
                  className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                />
              </div>

              <div className="mt-32">
                <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
                  Other personal details
                </h1>
                <input
                  type="text"
                  placeholder="PASSWORD"
                  className="w-full h-[72px] mt-11 mb-[10px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                />
                <span className="text-lightblue font-medium font-roboto">
                  Add second nationality/citizenship
                </span>

                <div className="mt-8 flex gap-8">
                  <legend className="font-roboto">
                    Card of the Pole [Polish Nationality Card]
                  </legend>

                  <div className="flex items-center gap-16">
                    <div className="space-x-[10px]">
                      <input type="radio" id="yes" value="yes" />
                      <label htmlFor="yes">Yes</label>
                    </div>

                    <div className="space-x-[10px]">
                      <input type="radio" id="no" value="no" />
                      <label htmlFor="no">No</label>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <select
                    id="countries"
                    className="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                  >
                    <option>
                      LEGAL BASIS FOR STAYING IN POLAND (E.G VISA, PERMIT)
                    </option>
                  </select>
                  <select
                    id="countries"
                    className="w-full h-[72px] mt-[10px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                  >
                    <option>
                      MAY LEGALLY STAY IN POLAND UNTIL (BASED ON A VISA OR
                      PERMIT)
                    </option>
                  </select>

                  <div className="my-7 flex items-center">
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
                    <p className="ml-6 text-xs font-medium text-tabac">
                      I do not have a PESEL code
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-[14px]">
                      <input
                        type="text"
                        placeholder="DATE OF BIRTH"
                        className="w-1/2 h-[72px] pl-7 border border-border rounded-md placeholder:font-bold placeholder:font-roboto placeholder:text-xs placeholder:text-tabac"
                      />

                      <select
                        id="countries"
                        className="w-1/2 h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                      >
                        <option>GENDER</option>
                      </select>
                    </div>

                    <select
                      id="countries"
                      className="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                    >
                      <option>IDENTITY CARD</option>
                    </select>

                    <input
                      type="text"
                      placeholder="ID CARD OR PASSPORT NUMBER"
                      className="w-full h-[72px] mb-[10px] pl-7 border border-border rounded-md placeholder:font-bold placeholder:font-roboto placeholder:text-xs placeholder:text-tabac"
                    />

                    <select
                      id="countries"
                      className="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                    >
                      <option>COUNTRY WHERE ID CARD ISSUED</option>
                    </select>

                    <div className="flex gap-[14px]">
                      <select
                        id="countries"
                        className="w-1/2 h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                      >
                        <option>COUNTRY OF BIRTH</option>
                      </select>

                      <input
                        type="text"
                        placeholder="PLACE OF BIRTH"
                        className="w-1/2 h-[72px] pl-7 border border-border rounded-md placeholder:font-bold placeholder:font-roboto placeholder:text-xs placeholder:text-tabac"
                      />
                    </div>

                    <select
                      id="countries"
                      className="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                    >
                      <option>COUNTRY OF ORIGIN</option>
                    </select>
                  </div>

                  <div className="mt-9 mb-32">
                    <h3 className="text-2xl text-tabac font-robotoslab font-bold">
                      Setup your Applicant account for an even easier and more
                      friendly application process
                    </h3>
                    <p className="mt-6 text-tabac font-robotoslab font-bold">
                      via the applicants account, you can:
                    </p>
                    <ul className="mt-3 list-disc font-inter text-[13px]">
                      <li>
                        fill all your application documents online (by iploading
                        them to your Applicant’s Account)
                      </li>
                      <li>Sign the application documents electronically</li>
                      <li>resume filling out a prior application form.</li>
                    </ul>

                    <div className="my-7 flex items-center">
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
                      <p className="ml-6 text-[13px] text-tabac font-bold">
                        i want to set up an Applicants Account and sign up
                        online to make it a quick and friendly process
                      </p>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
                      Contact details
                    </h1>

                    <input
                      type="text"
                      placeholder="PHONE NUMBER"
                      className="w-full h-[72px] mt-7 mb-[10px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
                    />

                    <h3 className="mt-11 text-2xl text-tabac font-robotoslab font-bold">
                      Residence address
                    </h3>

                    <div className="mt-2 space-y-3">
                      <select
                        id="countries"
                        className="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                      >
                        <option>POLAND</option>
                      </select>

                      <div className="flex gap-[14px]">
                        <select
                          id="countries"
                          className="w-1/2 h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                        >
                          <option>STREET NAME</option>
                        </select>

                        <input
                          type="text"
                          placeholder="NO."
                          className="w-1/2 h-[72px] pl-7 border border-border rounded-md placeholder:font-bold placeholder:font-roboto placeholder:text-xs placeholder:text-tabac"
                        />
                      </div>

                      <div className="flex gap-[14px]">
                        <input
                          type="text"
                          placeholder="POSTAL CODE"
                          className="w-1/2 h-[72px] pl-7 border border-border rounded-md placeholder:font-bold placeholder:font-roboto placeholder:text-xs placeholder:text-tabac"
                        />

                        <input
                          type="text"
                          placeholder="LOCATION"
                          className="w-1/2 h-[72px] pl-7 border border-border rounded-md placeholder:font-bold placeholder:font-roboto placeholder:text-xs placeholder:text-tabac"
                        />
                      </div>

                      <select
                        id="countries"
                        className="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
                      >
                        <option>
                          RESIDENCE ADDRESS PRIOR TO COURSE/PROGRAM
                        </option>
                      </select>

                      <div className="mt-9 flex items-center">
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
                        <p className="ml-6 text-[13px] text-tabac font-bold">
                          mailing address different from residence address
                        </p>
                      </div>

                      <p className="pb-8 text-[13px] text-tabac font-inter">
                        <strong>what to do next?</strong> in the next step, you
                        will be able to pick your fee payment schedule and claim
                        applicable discount of price promotoion
                      </p>
                    </div>
                  </div>
                </div>
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
                NEXT: PRICING AND PROMOTIONS
              </p>
              <span className="text-xl">
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* left side */}
        <div className="ml-36">
          <div className="px-11 py-11 bg-boxgray bg-opacity-20">
            <div className="space-y-5">
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
                  October 2022
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  Start date
                </span>
              </div>

              <div>
                <h3 className="text-lightblue text-xl font-inter font-bold">
                  Bachelor of Science Engineering <br /> (7 sem)
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  level of education
                </span>
              </div>

              <div>
                <h3 className="text-lightblue text-xl font-inter font-bold">
                  Informatyka w Biznesie/IT in Business
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  Course/program
                </span>
              </div>

              <div>
                <h3 className="text-lightblue text-xl font-inter font-bold">
                  Web Applications Developer
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  tentative choice of major (specialization option)
                </span>
              </div>

              <div>
                <h3 className="text-lightblue text-xl font-inter font-bold">
                  Full Time
                </h3>
                <span className="text-subtext text-xs font-inter font-medium">
                  mode of study
                </span>
              </div>

              <div className="mt-12 flex items-center gap-2 text-lightblue">
                <IoIosArrowDown />
                <span className="font-bold font-inter">show more</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="basis-1/2 h-[72px] w-full px-[29px] py-[15px] flex items-center justify-between bg-pink text-white rounded-md"
          >
            <p className="text-xs font-inter font-bold">FINISH LATER</p>
            <span className="text-xl">
              <BsArrowRight />
            </span>
          </button>

          <div className="mt-14 px-9">
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

export default RegistrationForm;
