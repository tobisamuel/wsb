import { BsArrowRight, BsClockHistory } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const EducationForm = ({ nextStep, prevStep }) => {
  return (
    <>
      <div className="mt-6 mb-7 mx-[103px] flex justify-between">
        <div className="w-[760px] pt-20 pl-10 pr-32 bg-lightgray">
          <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
            Education
          </h1>
          <p className="text-subtext font-medium font-roboto">
            higher education institution you graduated from
          </p>

          <form className="mt-9">
            <div className="flex flex-col gap-[14px]">
              <input
                type="text"
                placeholder="LOCATION"
                className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
              />
              <input
                type="text"
                placeholder="NAME OF HIGHER EDUCATION INSTITUION"
                className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
              />
            </div>

            <fieldset className="my-[51px] text-[13px] text-tabac font-medium font-roboto space-y-1">
              <legend>Do you have a university degree?</legend>

              <div className="flex items-center">
                <input type="radio" id="diplomaAcquired" />
                <label htmlFor="diplomaAcquired" className="ml-4">
                  Diploma acquired
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" id="beforeDefense" />
                <label htmlFor="beforeDefense" className="ml-4">
                  Before Defense
                </label>
              </div>

              <div className="flex items-center">
                <input type="radio" id="awaitingDiploma" />
                <label htmlFor="awaitingDiploma" className="ml-4">
                  Awaiting Diploma
                </label>
              </div>
            </fieldset>

            <select
              id="countries"
              className="w-full h-[72px] pl-7 text-tabac text-xs font-bold font-inter rounded-md border border-border"
            >
              <option>
                COUNTRY WHERE SECONDARY EDUCATION CERTIFICATE WAS ISSUED
              </option>
            </select>

            <div className="mt-12 pt-3 border-t">
              <h1 className="text-tabac text-[40px] font-bold font-robotoslab">
                Work Experience
              </h1>
              <p className="text-subtext font-medium font-roboto">
                Job Position
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-[14px]">
              <input
                type="text"
                placeholder="COMPANY NAME"
                className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
              />
              <input
                type="text"
                placeholder="JOB/POSITION"
                className="w-full h-[72px] pl-7 border border-border rounded-md placeholder:font-medium placeholder:font-roboto placeholder:text-xs placeholder:text-black"
              />
            </div>

            <div className="mt-10 mb-9 flex justify-between">
              <div className="flex items-center gap-3">
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
              <button
                className="h-[72px] w-[258px] px-[29px] py-[15px] flex items-center justify-between bg-pink text-white rounded-md"
                onClick={nextStep}
              >
                <p className="text-xs font-inter font-bold">NEXT: SUMMARY</p>
                <span className="text-xl">
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </form>
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
        className="ml-32 mt-4 mb-[60px] px-[14px] py-[10px] border border-buttongray text-xs font-inter font-bold"
        onClick={prevStep}
      >
        Go back
      </button>
    </>
  );
};

export default EducationForm;
