import type { ReactNode } from "react";
import { FaUser } from "react-icons/fa";

const AuctionUser = ({ children }: { children: ReactNode }) => {
  return (
    <span className="my-1.5 flex flex-row items-center gap-1 text-sm text-gray-400">
      <FaUser />
      {children}
    </span>
  );
};

export default AuctionUser;
