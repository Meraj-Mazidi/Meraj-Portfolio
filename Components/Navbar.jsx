import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavMobile from "./NavMobile";

const navData = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Explore",
    path: "/#explore",
  },
  {
    id: 3,
    label: "Work",
    path: "/#work",
  },
  {
    id: 4,
    label: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    label: "Contacts",
    path: "/connect",
  },
];

const Navbar = () => {
  const [IsActive, setIsActive] = useState(1);

  const handleActiveLink = (id) => {
    setIsActive(id);
  };

  const size = useWindowSize();
  let isMobile = size.width < 900 ? true : false;

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  return (
    <nav className="bg-[rgba(43,45,66,0.3)] backdrop-blur-[10px] base-blur sticky-position top-0 z-[9999]">
      <div className="flex items-center h-28 transition-all duration-500 lg:!container xl:mx-auto px-10 xl:pl-32 justify-between bt">
        <Link href="/">
          <img
            src={"/logo-blue-bg-2.png"}
            alt="Logo"
            className="py-2 my-0 cursor-pointer w-20 transition-all duration-300"
          />
        </Link>
        {isMobile ? (
          <NavMobile data={navData} />
        ) : (
          <ul className="flex !gap-10 text-white font-poppins font-bold">
            {navData.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center"
                onClick={() => handleActiveLink(item.id)}
              >
                <Link
                  href={item.path}
                  className={`hover:-translate-y-2 transition-all duration-500 px-4 py-1 hover:text-violet text-base`}
                >
                  {item.label}
                </Link>
                {item.id === IsActive && (
                  <img
                    src={"/images/vectors/nav_active.svg"}
                    alt="activeLink"
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
