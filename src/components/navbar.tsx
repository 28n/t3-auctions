import type { NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

const Brand = () => {
  return <p className="text-lg font-bold">Auctions</p>;
};

const NavLink = ({ children, link }: { children: ReactNode; link: string }) => {
  const router = useRouter();
  const active = router.asPath === link;
  return (
    <li className="my-2 flex h-[80%] items-center">
      <Link
        className={
          active
            ? "flex h-full items-center bg-blue-500 px-2 py-2 text-white"
            : "flex h-full items-center px-2 py-2"
        }
        href={link}
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar: NextComponentType = () => {
  return (
    <>
      <nav className=" fixed top-0 left-0 z-[999] flex h-14 w-full flex-row items-center border-b bg-gray-700 px-1 text-white backdrop-blur-sm md:px-4">
        <Brand />
        <ul className="ml-4 flex h-full flex-row items-center">
          <NavLink link={"/"}>Home</NavLink>
          <NavLink link={"/auctions"}>Alle Auktionen</NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
