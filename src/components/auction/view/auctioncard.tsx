import RecentBids from "./recentbids";
import AuctionDetails from "./auctiondetails";

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

const AuctionCard = ({ data }: { data: AuctionDataType }) => {
  return (
    <>
      <div className="flex flex-row-reverse gap-2">
        <AuctionDetails data={data} />
        <RecentBids />
      </div>
    </>
  );
};

export default AuctionCard;
