import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 bg-cyan-blue font-inter font-bold">
      <div className="h-1/5 w-full py-10 space-y-8 md:flex justify-between items-center">
        <div className="md:flex items-center">
          <span className="text-[11px]">We are here:</span>
          <div className="flex items-center text-2xl space-x-8 mt-4 md:mt-0 md:ml-2">
            <Link href="/">
              <a>
                <FiFacebook />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FiLinkedin />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FiTwitter />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FiInstagram />
              </a>
            </Link>
            <Link href="/">
              <a>
                <FiYoutube />
              </a>
            </Link>
          </div>
        </div>
        <div className="space-y-4 md:space-y-0 md:flex gap-20 text-[11px]">
          <h3>For media</h3>
          <h3>Personal data protection</h3>
          <h3>Extranet</h3>
        </div>
      </div>

      <div className="w-full border border-black"></div>

      <div className="h-4/5 w-full space-y-12 md:space-y-0 md:flex py-14">
        <div className="md:w-1/4">
          <p className="mb-6 text-[13px]">WSB</p>
          <div>
            <ul className="space-y-4 text-xs">
              <li>
                <Link href="/about">Meet WSB</Link>
              </li>
              <li>
                <Link href="/cooperation-with-business">
                  Cooperation with business
                </Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-2/4">
          <p className="mb-6 text-[13px]">Studies and training</p>
          <div className="md:flex font-footer">
            <ul className="space-y-4 text-xs">
              <li>First degree studies</li>
              <li>Second-cycle studies</li>
              <li>Second-cycle and post-graduate studies</li>
              <li>Long-cycle studies</li>
              <li>Postgraduate studies</li>
            </ul>
            <ul className="md:ml-32 space-y-4 text-xs">
              <li>MBA and EMBA studies</li>
              <li>Doctorate</li>
              <li>University of Every Age</li>
              <li>Training and courses</li>
              <li>Transfer from another university</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4">
          <p className="mb-6  text-[13px]">
            Go to the university&#39;s website
          </p>
          <select className="w-full px-2 py-4 rounded-[5px] border border-black text-xs ">
            <option value="WSBgroup" className="">
              WSB Group
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
