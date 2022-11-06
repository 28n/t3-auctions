import type { ReactNode } from "react";

const AuctionList = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-1 bg-gray-300 py-8 px-2 md:grid md:grid-cols-2 md:gap-1 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default AuctionList;
