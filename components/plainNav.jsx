import Link from "next/link";
import { BiSearch } from "react-icons/bi";

const PlainNav = () => {
  return (
    <div className="h-[92px] mx-auto bg-white font-inter font-bold">
      <div className="w-full h-full flex">
        <div className="basis-1/5 flex items-center ml-7">
          <h3>
            <Link href="/">Wyzsze Szkoly Bankowe</Link>
          </h3>
        </div>
        <div className="basis-4/5 ml-[83px] text-xs">
          <div className="h-[50px] mt-2 flex justify-between text-xxs text-subtext">
            <h5 className="font-bold">
              Go to the universitys wbair: WSB Group
            </h5>
            <ul className="mr-9 flex space-x-8 font-medium">
              <li>contact</li>
              <li>For media</li>
              <li>Moodle</li>
              <li>Extranet</li>
              <li>
                <Link href="/signup">Online registration</Link>
              </li>
              <li>
                <span className="text-xxs font-bold">PL</span>
              </li>
            </ul>
          </div>
          <ul className="mr-5 flex items-center justify-between text-[13px] space-x-28">
            <li>
              <Link href="/about">Meet WSB</Link>
            </li>
            <li>
              <Link href="/studies-and-training">Studies and Training</Link>
            </li>
            <li>
              <Link href="/cooperation-with-business">
                Cooperation with business
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <div className="flex flex-col items-center">
                <BiSearch />
                <h5 className="font-normal text-xxs">Search</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlainNav;
