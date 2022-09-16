import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Footer from "../components/footer";
import PlainNav from "../components/plainNav";

export default function Home() {
  return (
    <div className="px-[100px]">
      <div className="w-full h-[609px] relative flex items-center">
        <Image src="/183.png" alt="pointing" layout="fill" objectFit="cover" />

        <div className="absolute top-0 w-full px-14">
          <PlainNav />
        </div>

        <div className="absolute -bottom-5 w-full px-14">
          <div className="px-7 py-8 bg-white flex items-center space-x-14 text-xs font-medium font-inter shadow-home">
            <span className="w-1/6">First degree studies</span>
            <span className="w-1/6">Second-cycle studies</span>
            <span className="w-1/6">Second-cycle studies</span>
            <span className="w-1/6">Invest in yourself</span>
            <span className="w-1/6">Convenient enrollment for studies</span>
            <span className="w-1/6">
              Most frequently chosen university in Poland
            </span>
          </div>
        </div>
      </div>

      <div className="h-80 flex">
        <div className="w-1/4 pt-14 pl-14 bg-lightgray text-tabac font-inter">
          <span className="text-xl font-bold">See the offer</span>
          <ul className="mt-6 text-xs font-medium space-y-1">
            <li>First degree studies</li>
            <li>Second-cycle studies</li>
            <li>Second-cycle and post-graduate studies</li>
            <li>Long-cycle studies</li>
            <li>Postgraduate studies</li>
            <li>MBA and EMBA studies</li>
            <li>See more</li>
          </ul>
        </div>

        <div className="w-2/4 pt-14 px-14  bg-softblue">
          <h4 className="text-xl text-tabac font-bold font-inter">
            Find studies for yourself
          </h4>
          <select
            id="countries"
            className="w-1/3 mt-6 p-3 bg-transparent text-tabac text-xs font-bold font-inter rounded-md border border-border"
          >
            <option>Full offer</option>
          </select>

          <div className="mt-2 flex gap-3">
            <div className="w-2/3 flex p-3 text-xs border-[0.5px] border-tabac rounded-[5px]">
              <button className="ml-2" type="submit">
                <FaSearch />
              </button>
              <input
                id="search"
                className="w-full ml-3 border-none bg-transparent focus:outline-none placeholder:text-xs placeholder:text-subtext placeholder:font-inter placeholder:font-bold"
                type="text"
                placeholder="Search (e.g IT)"
              />
            </div>

            <button className="w-1/3 p-4 flex items-center justify-center bg-tabac rounded-md text-white text-xs font-inter font-bold">
              Search
            </button>
          </div>
        </div>

        <div className="w-1/4 pt-14 pl-11 pr-[72px] bg-lightgray text-tabac font-inter">
          <span className="text-xl font-bold">Subscribe online</span>
          <p className="mt-6 text-xs font-medium">
            You already know what you want to study at WSB? Go to online
            registration
          </p>
          <button className="mt-7 p-4 flex items-center justify-center bg-pink rounded-md text-white text-xs font-inter font-bold">
            Sign up
          </button>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-[40px]">I study, I work, I gain</h2>

        <div className="h-80 flex">
          <div className="w-1/3 pt-14 pl-14 bg-softblue">
            <span className="text-xl text-tabac font-bold font-inter">
              Find studies for yourself
            </span>
          </div>

          <div className="w-1/3 pt-14 pl-11 bg-lightgray pr-[72px] text-tabac font-inter">
            <p className="mt-6 text-xs text-center font-medium">
              The best way to start your professional career is to start working
              while you are in college. Thanks to the good organization of
              classes at WSB, these two areas are effectively connected by more
              and more of our students.
            </p>
          </div>

          <div className="relative w-1/3 mr-4 pt-14 pl-11 bg-lightgray pr-[72px] text-tabac font-inter">
            <div className="absolute -top-8 -right-4 w-full h-full p-12 bg-pink flex items-center">
              <span className="text-xl text-white text-center font-inter font-bold">
                85% of WSB students combine study and work
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 h-80 flex">
          <div className="relative w-1/3 ml-4 pt-14 pl-11 bg-lightgray pr-[72px] text-tabac font-inter">
            <div className="absolute -top-8 -left-4 w-full h-full p-12 bg-tabac flex items-center">
              <span className="text-xl text-white text-center font-inter font-bold">
                WSB graduates recommend studies to their friends
              </span>
            </div>
          </div>

          <div className="w-1/3 pt-14 pl-11 bg-lightgray pr-[72px] text-tabac font-inter">
            <p className="mt-6 text-xs text-center font-medium">
              The best way to start your professional career is to start working
              while you are in college. Thanks to the good organization of
              classes at WSB, these two areas are effectively connected by more
              and more of our students.
            </p>
          </div>

          <div className="w-1/3 pt-14 pl-14 bg-softblue">
            <span className="text-xl text-tabac font-bold font-inter">
              Find studies for yourself
            </span>
          </div>
        </div>

        <button className="mt-7 px-11 py-4 flex items-center justify-between bg-pink rounded-md text-white text-xs font-inter font-bold">
          <p>Get to know WSB university</p>
        </button>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-[40px] text-tabac">
          What’s new at WSB?
        </h2>

        <div className="mt-14 flex gap-5">
          <div className="w-1/2">
            <div className="h-full pt-14 pl-14 bg-softblue">
              <span className="text-xl text-tabac font-bold font-inter">
                Find studies for yourself
              </span>
            </div>
            <div className="w-1/3 mt-5 mb-2 border-t-4 border-tabac"></div>
            <h4 className="text-lg font-inter font-bold">
              High grades of our scientific activity - new doctoral and
              postdoctoral qualifications
            </h4>
            <span className="text-xs font-inter">August 2, 2022</span>
          </div>

          <div className="w-1/2 flex gap-5  pr-[72px] text-tabac font-inter">
            <div className="w-1/3">
              <div className="relative w-full h-[179px]">
                <Image
                  src="/165.png"
                  alt="boy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-black text-xs font-inter">
                <p className="font-bold mb-2 leading-5">
                  Do esports with WSB <br /> University and win <br /> great
                  prizes!
                </p>
                <span>August 2, 2022</span>
              </div>
            </div>

            <div className="w-1/3">
              <div className="relative w-full h-[179px]">
                <Image
                  src="/164.png"
                  alt="boy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-black text-xs font-inter">
                <p className="font-bold mb-2 leading-5">
                  Do esports with WSB <br /> University and win <br /> great
                  prizes!
                </p>
                <span>August 2, 2022</span>
              </div>
            </div>

            <div className="w-1/3">
              <div className="relative w-full h-[179px]">
                <Image
                  src="/163.png"
                  alt="boy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-black text-xs font-inter">
                <p className="font-bold mb-2 leading-5">
                  Do esports with WSB <br /> University and win <br /> great
                  prizes!
                </p>
                <span>August 2, 2022</span>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-24 px-11 py-4 flex items-center justify-between bg-pink rounded-md text-white text-xs font-inter font-bold">
          <p>Get to know WSB university</p>
        </button>

        <div className="h-80 flex gap-4">
          <div className="relative w-1/3 bg-cyan-blue pt-6 pl-6 text-tabac font-inter">
            <span className="text-xl font-bold">Postgraduate studies</span>
            <p>
              a meeting place for <br /> practisioners
            </p>
            <p>more</p>

            <div className="absolute -top-5 right-4 w-36 h-36 bg-pink text-white rounded-full flex justify-center items-center">
              <p className="text-center text-sm font-bold font-inter leading-4">
                until August 15 <br />
                tuition fees from <br />
                <span className="text-3xl">PLN 282</span> <br />
                monthly
              </p>
            </div>
          </div>

          <div className="relative w-1/3 bg-tabac pt-6 pl-6">
            <span className="text-xl text-white font-bold font-inter">
              Masters
            </span>
            <p className="text-white">
              new competences, <br /> new opportunities <br /> <br />
              entry fee PLN 0
              <br />
              more
            </p>

            <div className="absolute -top-5 right-4 w-36 h-36 bg-pink text-white rounded-full flex justify-center items-center">
              <p className="text-center text-sm font-bold font-inter leading-4">
                until August 15 <br />
                tuition fees from <br />
                <span className="text-3xl">PLN 282</span> <br />
                monthly
              </p>
            </div>
          </div>

          <div className="relative w-1/3 bg-lightgray pt-6 pl-6 pr-[72px] text-tabac font-inter">
            <span className="text-xl font-bold">Subscribe online</span>
            <p>
              a meeting place for <br /> practisioners
              <br />
              until August 15
              <br />
              tuition from 257 PLN 282 PLN
              <br />
              entry fee PLN 0
              <br />
              more
            </p>

            <div className="absolute -top-5 right-4 w-36 h-36 bg-pink text-white rounded-full flex justify-center items-center">
              <p className="text-center text-sm font-bold font-inter leading-4">
                until August 15 <br />
                tuition fees from <br />
                <span className="text-3xl">PLN 282</span> <br />
                monthly
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>WSB Universities in numbers</h2>

      <div className="mt-6 mb-24 flex text-sm font-inter">
        <div className="w-1/5 flex flex-col items-center font-bold font-inter">
          <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
            <span className="text-2xl font-inter">11</span>
          </div>
          <p className="mt-8 text-tabac">cities</p>
        </div>

        <div className="w-1/5 flex flex-col items-center font-bold font-inter">
          <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
            <span className="text-2xl font-inter">250</span>
          </div>
          <p className="mt-8 text-tabac">directories</p>
        </div>

        <div className="w-1/5 flex flex-col items-center font-bold font-inter">
          <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
            <span className="text-2xl font-inter">650</span>
          </div>
          <p className="mt-8 text-tabac">post graduate studies</p>
        </div>

        <div className="w-1/5 flex flex-col items-center font-bold font-inter">
          <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
            <span className="text-2xl font-inter">400,000</span>
          </div>
          <p className="mt-8 text-tabac">students</p>
        </div>

        <div className="w-1/5 flex flex-col items-center font-bold font-inter">
          <div className="w-36 h-36 border-4 border-pink text-pink rounded-full flex justify-center items-center">
            <span className="text-2xl font-inter">670</span>
          </div>
          <p className="mt-8 text-tabac">million zlotyz</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
