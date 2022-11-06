import type { ReactNode } from "react";

const Template = ({ bg, children }: { bg: string; children: ReactNode }) => {
  return (
    <div className={`my-1 flex h-full items-center ${bg} p-2 text-white`}>
      {children}
    </div>
  );
};

const Active = () => {
  return <Template bg="bg-green-500">Aktiv</Template>;
};

const Planned = () => {
  return <Template bg="bg-orange-500">Geplant</Template>;
};

const Sold = () => {
  return <Template bg="bg-gray-500">Verkauft</Template>;
};

const Placeholder = () => {
  return <Template bg="bg-black">Placeholder</Template>;
};

const AuctionStatus = () => {
  return (
    <>
      <div className="grid w-full grid-cols-2 items-center border">
        <div className="my-1 flex h-full items-center bg-blue-500 p-2 text-white">
          Status
        </div>
        <Placeholder />
      </div>
    </>
  );
};

export default AuctionStatus;
