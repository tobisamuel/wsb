import Image from "next/image";
import PageLayout from "../components/PageLayout";

const Administrationlink = () => {
  return (
    <PageLayout>
      <div className="mt-11 px-[100px]">
        <h1 className="text-[40px] text-tabac font-bold font-robotoslab">
          What do you gain by studying administration at WSB?
        </h1>

        <div className="mt-9">
          <div className="flex items-center">
            <div className="basis-1/2 px-12">
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

            <div className="basis-1/2">
              <Image src="/167.png" alt="pointing" width={541} height={325} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Administrationlink;
