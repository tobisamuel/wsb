import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-4 bg-cyan-blue font-inter font-bold">
      <div className="h-1/5 w-full py-10 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[11px] ">We are here:</span>
          <div className="flex items-center text-2xl space-x-8 ml-2">
            <span>
              <FiFacebook />
            </span>
            <span>
              <FiLinkedin />
            </span>
            <span>
              <FiTwitter />
            </span>
            <span>
              <FiInstagram />
            </span>
            <span>
              <FiYoutube />
            </span>
          </div>
        </div>
        <div className="flex gap-20  text-[11px]">
          <h3>For media</h3>
          <h3>Personal data protection</h3>
          <h3>Extranet</h3>
        </div>
      </div>
      <div className="w-full border border-black"></div>
      <div className="h-4/5 w-full flex my-14">
        <div className="w-1/4">
          <p className="mb-6  text-[13px]">WSB</p>
          <div>
            <ul className=" space-y-4 text-xs">
              <li>Meet WSB</li>
              <li>Cooperation with business</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="w-2/4">
          <p className="mb-6  text-[13px]">Studies and training</p>
          <div className="flex  font-footer">
            <ul className="space-y-4 text-xs">
              <li>First degree studies</li>
              <li>Second-cycle studies</li>
              <li>Second-cycle and post-graduate studies</li>
              <li>Long-cycle studies</li>
              <li>Postgraduate studies</li>
            </ul>
            <ul className="ml-32 space-y-4 text-xs">
              <li>MBA and EMBA studies</li>
              <li>Doctorate</li>
              <li>University of Every Age</li>
              <li>Training and courses</li>
              <li>Transfer from another university</li>
            </ul>
          </div>
        </div>
        <div className="w-1/4">
          <p className="mb-6  text-[13px]">Go to the university&#39s website</p>
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
