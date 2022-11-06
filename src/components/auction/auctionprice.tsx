import type { ReactNode } from "react";
import { ImPriceTag } from "react-icons/im";

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const AuctionPrice = ({ price }: { price: number }) => {
  return (
    <div className="my-2 flex flex-row items-center gap-2 text-xl font-bold text-blue-500">
      <ImPriceTag />
      {formatter.format(price)}
    </div>
  );
};

export default AuctionPrice;
