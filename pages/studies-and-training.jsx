import Image from "next/image";
import PageLayout from "../components/PageLayout";

const StudiesAndTraining = () => {
  return (
    <PageLayout>
      <div className="mt-12 px-[100px]">
        <div className="pl-5 flex items-center space-x-20 text-tabac font-medium font-inter border-b border-lightgray">
          <span className="px-3 py-[25px]">cooperation with Business</span>
          <span className="px-3 py-[25px] border-b-4 border-tabac">
            Studies and training for companies
          </span>
          <span className="px-3 py-[25px]">join placement</span>
          <span className="px-3 py-[25px]">Become a partner</span>
          <span className="px-3 py-[25px]">Hire of rooms</span>
        </div>

        <div className="mt-14 pl-12 pt-14 pb-20 pr-20 bg-lightgray flex items-center text-tabac">
          <h2 className="basis-1/5 text-[40px] font-bold font-robotoslab">
            Studies and training for companies
          </h2>

          <p className="basis-4/5 text-sm font-inter leading-9">
            For entrepreneurs who want to develop the competences of their
            employees during studies and training, we offer the <br /> Company
            Program . It is a package of special benefits, thanks to which we
            create an educational offer for our clients <br /> closely tailored
            to their needs. The Company Program is used by both entrepreneurs
            representing sole <br /> proprietorships and large international
            corporations.
          </p>
        </div>

        <h2 className="mt-9 ml-6 text-4xl text-tabac font-bold font-inter">
          Company program
        </h2>

        <div className="mt-9 pl-24 space-y-32">
          <div className="flex items-center">
            <div className="basis-1/2 text-tabac font-inter space-y-4">
              <h3 className="font-bold">Benefits for company employees</h3>
              <p>
                We organize a meeting with a Business Client Coordinator who
                will
                <br /> verify the company&#39;s needs and, based on the
                information obtained,
                <br /> propose appropriate employee development proposals as
                part of the
                <br /> educational offer of WSB Universities.
                <br />
                We can prepare the so-called in company studies, i.e. a
                tailor-made
                <br /> offer for entire groups of employees. This is an offer
                for companies
                <br /> with special training needs. In this case, we adjust the
                staff,
                <br /> program, form and place of classes to the client&#39;s
                expectations.
                <br /> We guarantee favorable prices and negotiated discounts.
                <br /> Thanks to the individual care of the Business Client
                Coordinator, the
                <br /> entire process of selecting, planning and implementing
                the
                <br /> employee education process is much simpler.
              </p>
            </div>

            <div className="basis-1/2 shadow-images">
              <div className="w-[541px] h-[325px] relative shadow-imageright">
                <Image
                  src="/company.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="basis-1/2 shadow-images">
              <div className="w-[541px] h-[221px] relative shadow-imageleft">
                <Image
                  src="/employees.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="basis-1/2 text-tabac font-inter space-y-4">
              <h3 className="font-bold">Benefits for company employees</h3>
              <p>
                Possibility to take advantage of discounts granted to the
                employer under <br /> the Company Program (discount for the
                entire course of study).
                <br /> The care of the Business Client Coordinator during the
                recruitment
                <br /> process makes this process even faster and more
                enjoyable.
                <br /> New skills and competences acquired at WSB Universities,
                which are <br /> trusted by students, graduates, academia and
                business, will bring profits <br /> in the long term.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="basis-1/2 text-tabac font-inter space-y-4">
              <h3 className="font-bold">
                We offer the following forms of education for company employees:
              </h3>
              <ul>
                <li>first-cycle studies (bachelor&#39;s and engineering)</li>
                <li>second-cycle studies (master&#39;s)</li>
                <li>long-cycle studies</li>
                <li>postgraduate studies</li>
                <li>MBA studies</li>
                <li>courses and training.</li>
              </ul>
            </div>

            <div className="basis-1/2 shadow-images">
              <div className="w-[541px] h-[325px] relative shadow-imageright">
                <Image
                  src="/education.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 mb-20 pl-12 pt-14 pb-20 pr-20 bg-lightgray flex items-center">
          <h2 className="basis-1/5 text-[40px] text-tabac font-bold font-robotoslab">
            Contact regarding holding agreements
          </h2>

          <p className="basis-4/5 text-sm text-tabac font-inter font-bold leading-9">
            Robert Juszczyk <br />
            <br /> e-mail: r.juszczyk@teb-akademia.pl <br /> phone: 606 752 717
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default StudiesAndTraining;

{
  /* <div className="basis-1/2 relative flex">
  <div className="w-[541px] h-[325px] mr-[53px] relative z-10">
    <Image src="/167.png" alt="pointing" layout="fill" objectFit="contain" />
  </div>
  <div className="absolute top-[41px] left-[53px] w-[541px] h-[325px] bg-shadowgray"></div>
</div>; */
}
