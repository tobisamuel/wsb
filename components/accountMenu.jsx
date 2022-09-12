import { GrStatusGood } from "react-icons/gr";

const AccountMenu = () => {
  return (
    <div className="py-14 pl-32 flex bg-lightgray space-x-16">
      <div className="flex items-center gap-4 text-tabac text-base">
        <GrStatusGood />
        <p className="font-robotoslab font-bold">key Personal data</p>
      </div>
      <div className="flex items-center gap-4 text-tabac text-base">
        <GrStatusGood />
        <p className="font-robotoslab font-bold">pricing and promotions</p>
      </div>
      <div className="flex items-center gap-4 text-tabac text-base">
        <GrStatusGood />
        <p className="font-robotoslab font-bold">
          education and work experience
        </p>
      </div>
      <div className="flex items-center gap-4 text-tabac text-base">
        <GrStatusGood />
        <p className="font-robotoslab font-bold">summary</p>
      </div>
    </div>
  );
};

export default AccountMenu;
