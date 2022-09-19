import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
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
            className="w-1/3 mt-6 py-3 px-1 bg-transparent text-tabac text-xs font-bold font-inter border border-border"
          >
            <option>Full offer</option>
          </select>

          <div className="mt-2 flex gap-3">
            <div className="w-2/3 flex py-3 text-xs border-[0.5px] border-tabac rounded-[5px]">
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
          <Link href="/signup">
            <a className="w-fit mt-7 p-4 flex items-center justify-center bg-pink rounded-md text-white text-xs font-inter font-bold ">
              Sign up
            </a>
          </Link>
        </div>
      </div>

      <h2 className="mt-28 text-[40px] text-center text-tabac font-bold">
        On the WSB blog
      </h2>

      <div className="mt-16 flex">
        <div className="flex-1 flex gap-14">
          <div className="w-1/3">
            <div className="flex gap-4">
              <Image src="/161.png" alt="students" width={81} height={81} />

              <div className="text-xs">
                <p className="text-tabac font-bold">
                  Burnout - is this waiting for you too?
                </p>
                <span className="text-xxs text-subtext">work-life balance</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Image src="/161.png" alt="students" width={81} height={81} />

              <div className="text-xs">
                <p className="text-tabac font-bold">
                  Burnout - is this waiting for you too?
                </p>
                <span className="text-xxs text-subtext">work-life balance</span>
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <div className="relative w-full h-2/3">
              <Image
                src="/videoplayer.png"
                alt="students"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-2 text-xs text-tabac font-inter font-bold">
              The History of WSB is painted in a word. WSB podcast
            </p>
          </div>

          <div className="w-1/3 bg-lightgray p-3 space-y-5">
            <div className="text-xs font-bold">
              <p>How Can I Control Stress in Troubled Times?</p>
              <span className="text-xxs text-subtext">podcast</span>
            </div>

            <div className="text-xs font-bold">
              <p>How to become a financially intelligent person?</p>
              <span className="text-xxs text-subtext">finances</span>
            </div>

            <div className="text-xs font-bold">
              <p>End of the Fruit Thursdays era</p>
              <span className="text-xxs text-subtext">work-life balance</span>
            </div>

            <p className="text-xs font-bold">See more articles</p>
          </div>
        </div>

        <div className="w-[73px] ml-8 py-5 px-6 flex flex-col gap-8 items-center bg-boxgray">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      <h2 className="mt-14 text-[40px] text-center text-tabac font-bold">
        I study, I work, I gain
      </h2>

      <div className="mt-16">
        <div className="h-80 flex">
          <div className="relative w-1/3">
            <Image
              src="/162.png"
              alt="students"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="w-1/3 bg-lightgray text-tabac font-inter flex items-center justify-center">
            <p className="px-9 text-xs text-center font-medium">
              The best way to start your professional career is to start working
              while you are in college. Thanks to the good organization of
              classes at WSB, these two areas are effectively connected by more
              and more of our students.
            </p>
          </div>

          <div className="relative w-1/3 mr-4 pt-14 pl-11 bg-lightgray pr-[72px] text-tabac font-inter">
            <div className="absolute -top-8 -right-4 w-full h-full p-12 bg-pink flex flex-col items-center justify-center">
              <Image src="/tie2.png" alt="tie" width={103} height={101} />
              <span className="mt-9 text-xl text-white text-center font-inter font-bold">
                85% of WSB students combine study and work
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 h-80 flex">
          <div className="relative w-1/3 ml-4 pt-14 pl-11 bg-lightgray pr-[72px] text-tabac font-inter">
            <div className="absolute -top-8 -left-4 w-full h-full p-12 bg-tabac flex flex-col items-center justify-center">
              <Image src="/bulbs.png" alt="tie" width={170} height={73} />
              <span className="mt-9 text-xl text-white text-center font-inter font-bold">
                WSB graduates recommend studies to their friends
              </span>
            </div>
          </div>

          <div className="w-1/3 pl-5 pr-7 bg-lightgray text-tabac text-center font-inter flex flex-col items-center justify-center">
            <p className="text-xs font-medium">
              98.6% of graduates recommend studies at WSB to their friends. They
              are satisfied because during the classes they met recognized
              academic lecturers and business practitioners, learned in
              comfortable conditions and established relationships for life.
            </p>
            <p className="mt-4 text-xxs text-subtext font-bold italic">
              &#34;Survey of students, WSB graduates and employers&#34;
              conducted in May - December 2020 by the Center for the Development
              of Higher Schools TEB Akademia sp. Z oo for the WSB University.
            </p>
          </div>

          <div className="relative w-1/3">
            <Image
              src="/163.png"
              alt="students"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button className="px-11 py-4 flex items-center justify-between bg-pink rounded-md text-white text-xs font-inter font-bold">
            Get to know WSB university
          </button>
        </div>
      </div>

      <h2 className="mt-20 text-center text-[40px] text-tabac font-bold">
        What’s new at WSB?
      </h2>

      <div className="mt-14">
        <div className="flex gap-5">
          <div className="w-1/2">
            <div className="relative w-full h-full">
              <Image
                src="/books.png"
                alt="students"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-1/3 mt-5 mb-2 border-t-[3px] border-tabac"></div>
            <h4 className="text-tabac text-xl font-inter font-bold">
              High grades of our scientific activity - new doctoral and
              postdoctoral qualifications
            </h4>
            <span className="text-tabac text-xs font-inter">
              August 2, 2022
            </span>
          </div>

          <div className="w-1/2 flex gap-5 text-tabac font-inter">
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

        <div className="mt-32 flex justify-center">
          <button className="px-11 py-4 flex items-center justify-between bg-pink rounded-md text-white text-xs font-inter font-bold">
            See all the News
          </button>
        </div>
      </div>

      <div className="mt-14 h-80 flex gap-4">
        <div className="relative w-1/3 bg-cyan-blue p-6 text-tabac font-inter">
          <span className="text-xl font-bold">
            Postgraduate <br /> studies
          </span>
          <p className="mt-3 text-xs font-medium">
            a meeting place for <br /> practisioners
          </p>
          <Link href="/">
            <a className="text-xs font-bold underline">more</a>
          </Link>

          <div className="absolute -top-5 right-4 w-36 h-36 bg-pink text-white rounded-full flex justify-center items-center">
            <p className="text-center text-sm font-bold font-inter leading-4">
              until August 15 <br />
              tuition fees from <br />
              <span className="text-3xl font-black">PLN 257</span> <br />
              monthly
            </p>
          </div>
        </div>

        <div className="relative w-1/3 bg-tabac pt-6 pl-6">
          <span className="text-xl text-white font-bold font-inter">
            Masters
          </span>
          <p className="mt-3 text-xs text-white font-medium">
            new competences, <br /> new opportunities <br /> <br />
            <span className="text-pink font-extrabold">entry fee PLN 0</span>
          </p>
          <Link href="/">
            <a className="text-xs text-white font-bold underline">more</a>
          </Link>

          <div className="absolute -top-5 right-4 w-36 h-36 bg-pink text-white rounded-full flex justify-center items-center">
            <p className="text-center text-sm font-bold font-inter leading-4">
              until August 15 <br />
              tuition fees from <br />
              <span className="text-3xl font-black">PLN 282</span> <br />
              monthly
            </p>
          </div>
        </div>

        <div className="relative w-1/3 bg-lightgray pt-6 pl-6 pr-[72px] font-inter">
          <span className="text-xl font-bold">
            Postgraduate <br /> studies
          </span>
          <p className="mt-3 text-xs">
            a meeting place for <br /> practisioners
            <br />
            <br />
            until August 15
            <br />
            <br />
            <strong>
              tuition from <span className="text-pink">257 PLN 282 PLN</span>
            </strong>
            <br />
            <br />
            <strong>entry fee PLN 0</strong>
            <br />
          </p>
          <Link href="/">
            <a className="text-xs font-bold underline">more</a>
          </Link>

          <div className="absolute -top-5 right-4 w-36 h-36 bg-pink text-white rounded-full flex justify-center items-center">
            <p className="text-center text-sm font-bold font-inter leading-4">
              until August 15 <br />
              tuition fees from <br />
              <span className="text-3xl font-black">PLN 282</span> <br />
              monthly
            </p>
          </div>
        </div>
      </div>

      <h2 className="mt-16 text-[40px] text-center font-bold">
        WSB Universities in numbers
      </h2>

      <div className="mt-16 mb-24 flex text-sm font-inter">
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
