import { FaHourglassHalf } from "react-icons/fa";

const AuctionTimer = ({
  startsAt,
  endsAt,
  isSold,
}: {
  startsAt: Date;
  endsAt: Date;
  isSold: boolean;
}) => {
  const now = new Date();
  const startDate = new Date(startsAt);
  const endDate = new Date(endsAt);
  const sold = isSold;
  return (
    <>
      <div className="my-1 flex w-full flex-col items-center border p-2">
        {now <= startDate ? (
          <>
            <div className="flex flex-row items-center gap-1">
              <FaHourglassHalf />
              Auktionstart
            </div>
            <div>{startDate.toLocaleString("de-DE")}</div>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center gap-1">
              <FaHourglassHalf />
              Auktionsende
            </div>
            <div>{endsAt.toLocaleString("de-DE")}</div>
          </>
        )}
      </div>
    </>
  );
};

export default AuctionTimer;
