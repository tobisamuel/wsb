import Image from "next/image";
import PageLayout from "../components/AboutLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="mt-12 px-[100px]">
        <div className="pl-5 flex items-center space-x-14 text-subtext font-medium font-inter border-b border-lightgray">
          <span className="px-3 py-[25px] border-b-4 border-tabac">
            Meet WSB
          </span>
          <span className="px-3 py-[25px]">Why WSB</span>
          <span className="px-3 py-[25px]">Who creates WSB</span>
          <span className="px-3 py-[25px]">
            We support science with technology
          </span>
          <span className="px-3 py-[25px]">Education standards</span>
          <span className="px-3 py-[25px]">More</span>
        </div>

        <div className="mt-9 mb-20 pl-24 space-y-32">
          <div className="flex items-center">
            <div className="basis-1/2">
              <p className="text-tabac font-inter">
                <strong>
                  WSB Universities are the largest group of private universities
                  in <br /> Poland.
                </strong>{" "}
                For many years we have been educating in such a way as to <br />{" "}
                show that it is possible to combine learning with work and
                private life. <br /> Regardless of whether they are higher
                education, postgraduate <br /> studies or training, we operate
                in accordance with the idea of ​​work-
                <br />
                life balance. Practical knowledge provided by experts, as well
                as the <br /> openness of our lecturers and administrative
                staff, make studies at <br /> WSB a time to gain experience and
                an unforgettable adventure.
              </p>
            </div>

            <div className="basis-1/2 shadow-images">
              <div className="w-[541px] h-[325px] relative shadow-imageright">
                <Image
                  src="/167.png"
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
                  src="/170.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="basis-1/2">
              <p className="text-tabac font-inter">
                Our offer includes 1st and 2nd degree studies, uniform master
                &#39;s <br /> studies, postgraduate studies, MBA and Executive
                MBA. You can <br /> also take advantage of training and courses.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="basis-1/2">
              <p className="text-tabac font-inter">
                At WSB, we create conditions conducive to learning, making
                friends <br /> for life, meeting people who can become mentors
                and authorities. <br /> Our lecturers treat you as partners,
                because it favors learning and <br /> developing passion. <br />
                <br />
                <br />
                <strong>We are waiting for you at WSB Universities!</strong>
              </p>
            </div>

            <div className="basis-1/2 shadow-images">
              <div className="w-[541px] h-[325px] relative shadow-imageright">
                <Image
                  src="/167.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
