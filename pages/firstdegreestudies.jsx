import Image from "next/image";
import PageLayout from "../components/PageLayout";

const FirstDegreeStudies = () => {
  return (
    <PageLayout>
      <div className="mt-11 px-[100px]">
        <div className="pl-[66px] flex items-center space-x-10 font-medium font-inter border-b border-lightgray">
          <span className="px-3 py-[25px] border-b-4 border-tabac">
            First degree studies
          </span>
          <span className="px-3 py-[25px]">Fields and specialzations</span>
          <span className="px-3 py-[25px]">Study abroad</span>
        </div>

        <h2 className="mt-14 text-[40px] text-tabac font-bold font-robotoslab">
          Bachelors and engineering studies
        </h2>

        <div className="mt-7 flex gap-5">
          <div className="basis-1/3 py-9 pl-9 pr-12 bg-greyblue font-inter">
            <span className="text-[13px]">
              We know that many of our students are people who work, have
              family, responsibilities or absorbing hobbies . Therefore, we
              arrange the study program in a way that guarantees not only the
              acquisition of the necessary knowledge and skills, but also allows
              you to reconcile learning with private life.
            </span>
            <button
              type="button"
              className="mt-10 h-[45px] px-14 py-4 flex items-center justify-between bg-tabac text-xs text-white font-bold rounded-md"
            >
              see the study offer
            </button>
          </div>

          <div className="basis-1/3 flex flex-col justify-between font-inter">
            <div className="relative w-full h-full">
              <Image
                src="/177.png"
                alt="students"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-6">
              <span className="text-tabac font-bold">Bachelor</span>
              <p className="mt-2 text-xs text-tabac">
                Bachelor&#39;s studies last 3 years. The subjects are selected
                so that you can acquire an attractive profession and the
                greatest possible amount of practical skills within 6 semesters.
              </p>
            </div>
          </div>

          <div className="basis-1/3 flex flex-col justify-between font-inter">
            <div className="relative w-full h-full">
              <Image
                src="/178.png"
                alt="students"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-6">
              <span className="text-tabac font-bold">Engineering studies</span>
              <p className="mt-2 text-xs text-tabac">
                Bachelor&#39;s studies last 3 years. The subjects are selected
                so that you can acquire an attractive profession and the
                greatest possible amount of practical skills within 6 semesters.
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-14 text-[40px] text-tabac font-bold font-robotoslab">
          what do you gain by studying at WSB?
        </h2>

        <div className="mt-10 mb-24 flex font-inter">
          <div className="basis-1/4 px-24 flex flex-col justify-center">
            <div className="flex justify-center">
              <Image src="/modes.png" alt="gears" width={48} height={48} />
            </div>
            <p className="mt-4 text-center text-xs">
              Practical knowledge - our programs will help you start your
              professional future
            </p>
          </div>

          <div className="basis-1/4 px-20 flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                src="/semesters.png"
                alt="checkboxes"
                width={48}
                height={48}
              />
            </div>
            <p className="mt-4 text-center text-xs">
              Friendly organization of classes - you will combine studies with
              work and private life.
            </p>
          </div>

          <div className="basis-1/4 px-24 flex flex-col justify-center">
            <div className="flex justify-center">
              <Image src="/laptop.png" alt="laptop" width={48} height={48} />
            </div>
            <p className="mt-4 text-center text-xs">
              Time for yourself - you can deal with many student matters online.
            </p>
          </div>

          <div className="basis-1/4 px-[110px] flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                src="/organization.png"
                alt="organization"
                width={48}
                height={48}
              />
            </div>
            <p className="mt-4 text-center text-xs">
              Quality - WSB belongs to the largest educational holding in
              Poland.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FirstDegreeStudies;
