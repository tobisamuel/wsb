import Image from "next/image";
import Link from "next/link";
import BlogLayout from "../components/BlogLayout";

const posts = [1, 2, 3];

const Blog = () => {
  return (
    <BlogLayout>
      <div className="relative mx-[125px] flex flex-col justify-center items-center">
        <div className="absolute top-10 w-full">
          <div className="relative w-full h-[453px]">
            <Image
              src="/180.png"
              alt="books"
              layout="fill"
              objectFit="cover"
              className="-z-40"
            />
          </div>
        </div>

        <div className="mt-72 w-[calc(100%-120px)]">
          <div className="w-full px-36 pt-16 bg-white text-tabac font-inter">
            <p>
              There has been a lot of talk lately about burnout. Currently, more
              and more people of all ages struggle with this condition, while a
              significant part of the society is afraid that burnout will also
              affect them . Therefore, it is worth getting acquainted with the
              causes and methods of preventing burnout in order to enjoy the job
              as long as possible.
            </p>
            <div className="relative mt-5 h-[428px]">
              <Image
                src="/181.png"
                alt="books"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-10 font-bold">What are the causes of burnout?</h3>
            <p className="mt-4">
              The causes that have the greatest impact on burnout are very
              individual, they depend both on the personality and work
              environment of a given person. <br />
              <br /> Reasons directly related to a given person may be:
            </p>
            <ul className="mt-6">
              <li>personality of the individual,</li>
              <li>lack of cooperation skills,</li>
              <li>willingness to overly compete,</li>
              <li>low self-esteem, emotional problems,</li>
              <li>negative attitude to work,</li>
              <li>
                a profession inconsistent with the preferences and abilities of
                the individual,
              </li>
              <li>
                failure to maintain a balance between private and professional
                life,
              </li>
              <li>inadequate planning of free time.</li>
            </ul>
            <div className="relative mt-3 h-[278px]">
              <Image
                src="/182.png"
                alt="books"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <h3 className="mt-10 font-bold">
              Burnout symptoms - how to recognize them?
            </h3>
            <p className="mt-4">
              Burnout is most often described as exhaustion. According to
              Christina Maslach, we can consider them in three different
              contexts:
            </p>
            <ul className="mt-6">
              <li>
                emotional: discouragement to work, pessimism, chronic fatigue,
              </li>
              <li>
                interpersonal: distance in contacts with the environment, less
                sensitivity to others,
              </li>
              <li>
                cognitive: dissatisfaction with your job, loss of confidence in
                your own abilities.
              </li>
            </ul>
            <p>
              The hardest part is that it&#39;s hard to tell when a person&#39;s
              burnout begins because it starts very slowly and imperceptibly,
              then speeds up and increases in intensity to produce new symptoms.
            </p>
          </div>

          <div className="mt-24 py-14 px-24 flex items-center gap-16 bg-cyan-blue">
            <Image
              src="/profile-full.png"
              alt="profile picture"
              width={216}
              height={216}
              className="rounded-full"
            />
            <div className="basis-2/3 text-tabac">
              <h2 className="text-[40px] font-bold font-robotoslab">
                Aleksandra Romel-Domarecka
              </h2>
              <p className="mt-6 mb-4 text-xs font-inter">
                Lecturer at WSB in Toruń and Bydgoszcz, business trainer, expert
                in occupational health and safety management, consultant and
                advisor. For over fifteen years he has been running his own
                company, dealing with personnel outsourcing and service for
                companies in the field of health and safety. She is particularly
                interested in issues related to building a safety culture and
                risky behavior of employees. He is the leading auditor in the
                field of ISO 45001: 2018 standards. He acts as the
                Plenipotentiary of Integrated Management Systems.
              </p>
              <Link href="/">
                <a className="text-xs font-bold font-inter">
                  View all articles
                </a>
              </Link>
            </div>
          </div>

          <h3 className="mt-24 text-[40px] text-tabac font-bold font-robotoslab">
            See also:
          </h3>

          <div className="mt-6 mb-24 grid grid-cols-3 gap-x-7 gap-y-12">
            {posts.map((post) => (
              <div key={post}>
                <div className="relative w-full h-60">
                  <Image
                    src="/164.png"
                    alt="post"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full font-inter">
                  <div className="w-1/2 mt-5 h-full border-t-2 border-black"></div>
                  <p className="block mt-3 text-sm font-bold">
                    Burnout - is it going to happen to you too?
                  </p>
                  <span className="text-xs">August 2, 2022</span>
                  <div className="mt-2 flex items-center gap-3">
                    <Image
                      src="/profile.png"
                      alt="profile picture"
                      width={42}
                      height={42}
                      className="rounded-full"
                    />
                    <span className="text-xs">Aleksandra Romel-Domarecka</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blog;
