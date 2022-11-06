import type { ReactNode } from "react";

const SubHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="font-ssp mb-1 text-center">{children}</h2>;
};

export default SubHeading;
