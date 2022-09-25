import { useRef } from "react";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import PageLayout from "../components/AboutLayout";

const AboutPage = () => {
  const maxScrollWidth = useRef(0);
  const slider = useRef(null);

  const movePrev = () => {
    slider.current.scrollLeft -= slider.current.offsetWidth;
  };

  const moveNext = () => {
    slider.current.scrollLeft += slider.current.offsetWidth;
  };

  return (
    <PageLayout>
      <div className="md:mt-12 px-6 md:px-[100px]">
        <div className="flex items-center">
          <button className="md:hidden" onClick={movePrev}>
            <MdArrowBackIos />
          </button>

          <div
            className="relative pl-5 flex items-center space-x-14 text-sm md:text-base text-subtext font-medium font-inter border-b border-lightgray overflow-x-scroll whitespace-nowrap scroll-smooth snap-x scrollbar-hide"
            ref={slider}
          >
            <span className="snap-start px-3 py-[25px] border-b-4 border-tabac">
              Meet WSB
            </span>
            <span className="snap-start px-3 py-[25px]">Why WSB</span>
            <span className="snap-start px-3 py-[25px]">Who creates WSB</span>
            <span className="snap-center px-3 py-[25px]">
              We support science with technology
            </span>
            <span className="snap-start px-3 py-[25px]">
              Education standards
            </span>
            <span className="snap-start px-3 py-[25px]">More</span>
          </div>

          <button className="md:hidden" onClick={moveNext}>
            <MdArrowForwardIos />
          </button>
        </div>

        <div className="mt-9 mb-20 space-y-24 md:pl-24 md:space-y-32">
          <div className="flex flex-col gap-8 md:flex-row items-center">
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
              <div className="w-[290px] h-[162px] relative shadow-imageright md:w-[541px] md:h-[325px] md:shadow-imagerightmd">
                <Image
                  src="/167.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-16 md:flex-row items-center">
            <div className="basis-1/2 shadow-images">
              <div className="w-[290px] h-[110px] relative shadow-imageleft md:w-[541px] md:h-[221px] md:shadow-imageleftmd">
                <Image
                  src="/170.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="cover"
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

          <div className="flex flex-col gap-8 md:flex-row items-center">
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
              <div className="w-[290px] h-[162px] relative shadow-imageright md:w-[541px] md:h-[325px] md:shadow-imagerightmd">
                <Image
                  src="/167.png"
                  alt="pointing"
                  layout="fill"
                  objectFit="cover"
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
