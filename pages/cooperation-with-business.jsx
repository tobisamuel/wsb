import Image from "next/image";
import PageLayout from "../components/PageLayout";

const CooperationWithBusiness = () => {
  return (
    <PageLayout>
      <div className="mt-12 px-[100px]">
        <div className="pl-5 flex items-center space-x-20 text-tabac font-medium font-inter border-b border-lightgray">
          <span className="px-3 py-[25px] border-b-4 border-tabac">
            cooperation with Business
          </span>
          <span className="px-3 py-[25px]">
            Studies and training for companies
          </span>
          <span className="px-3 py-[25px]">join placement</span>
          <span className="px-3 py-[25px]">Become a partner</span>
          <span className="px-3 py-[25px]">Hire of rooms</span>
        </div>

        <div className="mt-14 pl-12 pt-14 pb-20 bg-lightgray flex items-center gap-8 text-tabac">
          <div className="w-1/5 h-full">
            <h2 className="text-[40px] text-tabac font-robotoslab font-bold">
              Cooperation with Business
            </h2>
          </div>

          <p className="w-4/5 text-sm font-inter leading-9">
            <strong>
              We are a university that combines the business and academic
              spheres.
            </strong>{" "}
            Cooperation with companies allows us to be up to date with current
            trends on the labor market, and at the same time meet the
            expectations of students regarding their future career. <br />
            <br />
            Understanding the requirements of employers allows us to adjust the
            curriculum to the changing realities of the market, and thus better
            prepare our graduates to take on new challenges. <br />
            <br />
            <strong>
              Thanks to this modern approach to education, the WSB Universities
              have been creating the largest network of business universities in
              Poland for years.
            </strong>
          </p>
        </div>

        <div className="mt-14 pl-12 flex items-center gap-8 text-tabac">
          <div className="w-1/5 pt-14 pb-20 h-full border-t-4 border-tabac">
            <h2 className=" text-[40px] text-tabac font-robotoslab font-bold">
              Cooperation with entrepreneurs
            </h2>
          </div>

          <div className="w-4/5 text-sm font-inter">
            <p className="font-bold leading-9">
              We offer entrepreneurs many forms of cooperation that translate
              into real benefits:
            </p>
            <ul className="mt-4 space-y-1">
              <li>special discounts for companies for studies and training</li>
              <li>
                the possibility of taking business patronage over a major or
                specialization
              </li>
              <li>
                help in building the image of a trustworthy employer by jointly
                organizing internships and apprenticeships
              </li>
              <li>
                presentation of the company at guest lectures at the
                university&#39;s premises
              </li>
              <li>
                job placement - support in recruiting and reaching the best
                students and graduates.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pl-12 flex items-center gap-8 text-tabac">
          <div className="w-1/5 pt-14 pb-20 h-full border-t-4 border-tabac">
            <h2 className=" text-[40px] text-tabac font-robotoslab font-bold">
              Our existing business partners
            </h2>
          </div>

          <div className="w-4/5 text-sm font-inter">
            <Image
              src="/partners.png"
              alt="partners"
              width={901}
              height={338}
            />
          </div>
        </div>

        <div className="mt-14 mb-28 pl-12 gap-8 text-tabac">
          <div className="w-1/5 h-full border-t-4 border-tabac"></div>
          <h2 className="text-[40px] text-tabac font-robotoslab font-bold">
            The power of cooperation with business
          </h2>

          <div className="mt-6 flex text-sm font-inter">
            <div className="w-1/5 flex flex-col items-center">
              <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">11</span>
              </div>
              <p className="mt-8 text-tabac font-robotoslab font-bold">
                business client Cordinators
              </p>
            </div>

            <div className="w-1/5 flex flex-col items-center">
              <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">32</span>
              </div>
              <p className="mt-8 text-tabac font-robotoslab font-bold">
                holding agreement
              </p>
            </div>

            <div className="w-1/5 flex flex-col items-center">
              <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">312</span>
              </div>
              <p className="mt-8 text-tabac font-robotoslab font-bold">
                company program contrast
              </p>
            </div>

            <div className="w-1/5 flex flex-col items-center">
              <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">1745</span>
              </div>
              <p className="mt-8 text-tabac font-robotoslab font-bold">
                business client Cordinators
              </p>
            </div>

            <div className="w-1/5 flex flex-col items-center">
              <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
                <span className="text-2xl font-bold font-inter">650</span>
              </div>
              <p className="mt-8 text-tabac font-robotoslab font-bold">
                Postgraduate studies
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CooperationWithBusiness;
