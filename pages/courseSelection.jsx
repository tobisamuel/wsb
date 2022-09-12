import Image from "next/image";
import PageLayout from "../components/PageLayout";
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CourseSelection = () => {
  return (
    <PageLayout>
      <div className="mt-11 px-[100px]">
        <div className="pl-[66px] flex items-center space-x-10 font-medium font-inter border-b border-lightgray">
          <span className="px-3 py-[25px]">First degree studies</span>
          <span className="px-3 py-[25px] border-b-4 border-tabac">
            Fields and specialzations
          </span>
          <span className="px-3 py-[25px]">Study abroad</span>
        </div>

        <div className="mt-4 flex">
          <div className="w-[300px] h-fit pl-9 pt-7 pb-16 bg-lightgray">
            <form className="space-y-6">
              <fieldset>
                <legend className="text-[13px] font-inter font-bold">
                  City
                </legend>
                <div className="mt-2 space-y-[10px] text-xs font-inter">
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Bydgoszcz" name="Bydgoszcz" />
                    <label htmlFor="Bydgoszcz">Bydgoszcz</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Chorzów" name="Chorzów" />
                    <label htmlFor="Chorzów">Chorzów / Katowice</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Gdansk" name="Gdansk" />
                    <label htmlFor="Gdansk">Gdansk</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Gdynia" name="Gdynia" />
                    <label htmlFor="Gdynia">Gdynia</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Opole" name="Opole" />
                    <label htmlFor="Opole">Opole</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Poznan" name="Poznan" />
                    <label htmlFor="Poznan">Poznan</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Szczecin" name="Szczecin" />
                    <label htmlFor="Szczecin">Szczecin</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Toruń" name="Toruń" />
                    <label htmlFor="Toruń">Toruń</label>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[13px] font-inter font-bold">
                  Education Level
                </legend>
                <div className="mt-2 space-y-[10px] text-xs font-inter">
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Bachelor" name="Bachelor" />
                    <label htmlFor="Bachelor">Bachelor</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input
                      type="checkbox"
                      id="Engineering"
                      name="Engineering"
                    />
                    <label htmlFor="Engineering">Engineering Studies</label>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-[13px] font-inter font-bold">
                  Language of Lecture
                </legend>
                <div className="mt-2 space-y-[10px] text-xs font-inter">
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="Polish" name="Polish" />
                    <label htmlFor="Polish">Polish</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" id="English" name="English" />
                    <label htmlFor="English">English</label>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="flex-1 ml-5">
            <div className="flex justify-between">
              <form className="flex items-center gap-3">
                <label
                  htmlFor="search"
                  className="text-xs text-subtext font-bold font-inter"
                >
                  Search
                </label>

                <div className="flex p-3 text-xs border-[0.5px] border-tabac rounded-[5px]">
                  <button className="ml-2" type="submit">
                    <FaSearch />
                  </button>
                  <input
                    id="search"
                    className="w-full ml-3 border-none bg-transparent focus:outline-none placeholder:text-xs placeholder:text-subtext placeholder:font-inter placeholder:font-bold"
                    type="text"
                    placeholder="e.g Management"
                  />
                </div>
              </form>

              <div className="space-x-3">
                <label
                  htmlFor="sort"
                  className="text-xs text-subtext font-bold font-inter"
                >
                  Sort
                </label>

                <select
                  id="sort"
                  className="px-2 py-3 text-subtext text-xs font-bold font-inter border-[0.5px] border-tabac rounded-[5px]"
                >
                  <option>Alphabetically from A to Z</option>
                </select>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              <div className="flex">
                <div className="w-[274px] h-[154px]">
                  <Image src="../public/173.png" alt="laptop" />
                </div>
                <div className="flex-1 pl-11 pt-8 bg-greyblue">
                  <span className="text-tabac text-[13px] font-inter font-bold">
                    Adminstration
                  </span>
                  <div className="mt-3 flex gap-2">
                    <GrLocation />
                    <p className="text-tabac text-xxs font-inter font-bold">
                      Bydgoszcz Chorzów Gdansk Gdynia
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-[274px] h-[154px] bg-subtext"></div>
                <div className="flex-1 pl-11 pt-8 bg-greyblue">
                  <span className="text-tabac text-[13px] font-inter font-bold">
                    Adminstration
                  </span>
                  <div className="mt-3 flex gap-2">
                    <GrLocation />
                    <p className="text-tabac text-xxs font-inter font-bold">
                      Bydgoszcz Chorzów Gdansk Gdynia
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-[274px] h-[154px] bg-subtext"></div>
                <div className="flex-1 pl-11 pt-8 bg-greyblue">
                  <span className="text-tabac text-[13px] font-inter font-bold">
                    Adminstration
                  </span>
                  <div className="mt-3 flex gap-2">
                    <GrLocation />
                    <p className="text-tabac text-xxs font-inter font-bold">
                      Bydgoszcz Chorzów Gdansk Gdynia
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-[274px] h-[154px] bg-subtext"></div>
                <div className="flex-1 pl-11 pt-8 bg-greyblue">
                  <span className="text-tabac text-[13px] font-inter font-bold">
                    Adminstration
                  </span>
                  <div className="mt-3 flex gap-2">
                    <GrLocation />
                    <p className="text-tabac text-xxs font-inter font-bold">
                      Bydgoszcz Chorzów Gdansk Gdynia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-6 flex justify-center">
          <div className="flex items-center gap-5 text-darkgray text-sm font-bold font-inter">
            <MdArrowBackIos />
            <span className="p-1 border-b-2 border-darkgray">1</span>
            <span className="p-1 text-midgray">2</span>
            <span className="p-1 text-midgray">3</span>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CourseSelection;
