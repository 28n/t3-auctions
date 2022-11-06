import { FaUser, FaClock } from "react-icons/fa";

const TemplateBid = () => {
  return (
    <>
      <div className="my-2 flex flex-col items-start">
        <div className="flex flex-row items-center gap-2 font-semibold">
          <FaUser /> <span>Walter Idleberg</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FaClock /> <span>24.09.2022, 20:03</span>
        </div>
        <div className="mt-2 flex flex-row items-center gap-2">
          <span className="bg-blue-500 py-1.5 px-3 font-semibold text-white">
            750.001€
          </span>
          <span className="rounded-full bg-green-500 px-1.5 text-sm font-semibold text-white">
            Käufer
          </span>
        </div>
      </div>
    </>
  );
};

const RecentBids = () => {
  return (
    <>
      <div className="border p-8 transition-all hover:border-blue-500">
        <h3 className="text-lg font-bold">Letzte Gebote</h3>
        <ul className="p-4">
          <TemplateBid />
          <hr />
          <TemplateBid />
          <hr />
          <TemplateBid />
          <hr />
          <TemplateBid />
          <hr />
          <TemplateBid />
          <hr />
          <TemplateBid />
          <hr />
          <TemplateBid />
        </ul>
      </div>
    </>
  );
};

export default RecentBids;
