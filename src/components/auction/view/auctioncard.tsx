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

const AuctionCard = ({
  data,
  refetch,
}: {
  data: AuctionDataType;
  refetch: () => void;
}) => {
  return (
    <>
      <div className="flex flex-row-reverse gap-2">
        <AuctionDetails data={data} refetch={refetch} />
        <RecentBids />
      </div>
    </>
  );
};

export default AuctionCard;
