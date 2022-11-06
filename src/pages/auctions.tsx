import type { NextPage } from "next";
import Heading from "../components/common/heading";
import { trpc } from "../utils/trpc";
import AuctionListCard from "../components/auction/auctionlistcard";
import AuctionList from "../components/auction/auctionlist";
import SubHeading from "../components/common/subheading";

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

const Auctions: NextPage = () => {
  const auctions = trpc.auctions.getAll.useQuery();
  return (
    <>
      <Heading>Auktionen</Heading>

      <SubHeading>Hier findest du alle Auktionen</SubHeading>
      <AuctionList>
        {auctions?.data?.map((val: AuctionDataType, index: number) => {
          return <AuctionListCard key={index} data={val} />;
        })}
      </AuctionList>
    </>
  );
};

export default Auctions;
