import Link from "next/link";
import type { ReactNode } from "react";

const AuctionLink = ({ children, id }: { children: ReactNode; id: number }) => {
  const parseAuctionLink = (id: number) => {
    return `/auction/view/${id}`;
  };
  return (
    <Link
      className="text-xl font-semibold transition-all hover:text-blue-500 hover:transition-all"
      href={parseAuctionLink(id)}
    >
      {children}
    </Link>
  );
};

export default AuctionLink;
