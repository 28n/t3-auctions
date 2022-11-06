import Image from "next/image";
import { FaUser, FaHourglassHalf } from "react-icons/fa";
import BetForm from "./betform";

import placeholder from "../../../../public/auction.jpg";

interface AuctionDataType {
  id: number;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  bet: number;
  isSold: boolean;
  soldTo: string;
}

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const AuctionDetails = ({ data }: { data: AuctionDataType }) => {
  return (
    <>
      <div className="flex flex-grow flex-col items-start px-8">
        <Image src={placeholder} alt={"auction thumb"} />
        <div className="mt-2 flex w-full flex-col md:flex md:flex-row">
          <div className="flex flex-grow flex-col">
            <h1 className="text-3xl font-semibold">{data?.title}</h1>
            <p className="flex flex-row items-center gap-1">
              <FaUser /> TeamELAN
            </p>
            <p className="flex flex-row items-center gap-1">
              <FaHourglassHalf /> 24.09.2022, 20:11
            </p>
          </div>
          <div className="flex flex-col items-end text-right">
            <p className="font-ssp text-2xl font-semibold text-blue-500">
              {formatter.format(data?.bet)}
            </p>
            <p className="rounded-full bg-green-500 px-1.5 text-sm font-semibold text-white">
              Verkauft
            </p>
          </div>
        </div>
        <BetForm currentBet={data?.bet} auctionId={data?.id} />
        <div className="w-full">
          <span className="text-lg font-semibold text-blue-500">
            Artikelbeschreibung
          </span>
          <hr className="my-4" />
          <span>{data?.description}</span>
        </div>
      </div>
    </>
  );
};

export default AuctionDetails;
