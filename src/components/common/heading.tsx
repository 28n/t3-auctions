import type { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-ssp text-ellipsis text-center text-3xl font-semibold tracking-wide">
      {children}
    </h1>
  );
};

export default Heading;
