import Image from "next/image";
import PageLayout from "../components/PageLayout";

const Administrationlink = () => {
  return (
    <PageLayout>
      <div className="mt-12 px-[100px]">
        <h2 className="ml-6 text-[40px] text-tabac font-bold font-robotoslab">
          What do you gain by studying administration at WSB?
        </h2>

        <div className="mt-9 pl-24 space-y-32">
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

        <h2 className="mt-20 text-[40px] text-tabac font-bold font-robotoslab">
          Administration at WSB includes?
        </h2>

        <div className="mt-12 mb-20 flex font-inter">
          <div className="basis-1/4 px-24 flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                src="/handshake.png"
                alt="gears"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-4 text-center text-xs">
              Practical knowledge - our programs will help you start your
              professional future
            </p>
          </div>

          <div className="basis-1/4 px-20 flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                src="/laptop-2.png"
                alt="checkboxes"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-4 text-center text-xs">
              Friendly organization of classes - you will combine studies with
              work and private life.
            </p>
          </div>

          <div className="basis-1/4 px-24 flex flex-col justify-center">
            <div className="flex justify-center">
              <Image src="/tie.png" alt="laptop" width={68} height={98} />
            </div>
            <p className="mt-4 text-center text-xs">
              Time for yourself - you can deal with many student matters online.
            </p>
          </div>

          <div className="basis-1/4 px-[110px] flex flex-col justify-center">
            <div className="flex justify-center">
              <Image
                src="/settings.png"
                alt="organization"
                width={100}
                height={100}
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

export default Administrationlink;

{
  /* <div className="basis-1/2 relative flex">
  <div className="w-[541px] h-[325px] mr-[53px] relative z-10">
    <Image src="/167.png" alt="pointing" layout="fill" objectFit="contain" />
  </div>
  <div className="absolute top-[41px] left-[53px] w-[541px] h-[325px] bg-shadowgray"></div>
</div>; */
}
