import Image from "next/image";
import AuctionLink from "./auctionlink";
import AuctionUser from "./auctionuser";
import AuctionPrice from "./auctionprice";
import AuctionTimer from "./auctiontimer";
import AuctionStatus from "./auctionstatus";

import placeholder from "../../../public/auction.jpg";

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

const AuctionListCard = ({
  data,
  key,
}: {
  data: AuctionDataType;
  key: number;
}) => {
  return (
    <>
      <div key={key} className="group flex flex-col bg-white p-2 shadow-xl">
        <div className="z-[3] flex items-center justify-center">
          <Image
            className=" z-[1] m-2 overflow-hidden transition-all ease-in-out group-hover:scale-[1.02]"
            src={placeholder}
            alt="img"
          />
        </div>
        <div className="auction-info flex flex-col flex-wrap items-start break-words">
          <AuctionLink id={data.id}>{data.title}</AuctionLink>
          <p>{data.description}</p>
          <AuctionUser>{"TeamELAN"}</AuctionUser>
          <AuctionPrice price={data.bet} />
        </div>

        <AuctionTimer
          startsAt={data.startsAt}
          endsAt={data.endsAt}
          isSold={data.isSold}
        />
        <AuctionStatus />
      </div>
    </>
  );
};

export default AuctionListCard;
