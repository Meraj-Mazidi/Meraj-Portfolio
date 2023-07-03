import React, { useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FiMenu, FiX } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";

const NavMobile = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <button onClick={toggleDrawer}>
        <FiMenu className="text-white text-3xl" />
      </button>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="right" size={300} className="!h-screen">
        <div className="bg-violet flex flex-col py-5 h-full justify-between shadow-lg shadow-white drawer1">
          <div className="flex flex-col gap-5 drawer2">
            <span className="flex justify-around items-center drawer3">
              <h1 className="font-pt text-xl">Meraj Mazidi</h1>
              <FiX
                className="text-2xl cursor-pointer text-gray-600 hover:text-black"
                onClick={toggleDrawer}
              />
            </span>

            <ul className="mt-10 mx-8 drawer4">
              {data.map((item, i) => (
                <li
                  key={i}
                  className="text-black font-poppins font-bold text-lg py-5 flex items-center gap-2 drawer5"
                >
                  <a
                    href={item.path}
                    className="hover:mr-5 transition-all duration-500 hover:text-white hover:translate-x-4"
                  >
                    {item.label}
                  </a>
                  <BiChevronRight />
                </li>
              ))}
            </ul>
          </div>

          <span className="w-full flex justify-center drawer6">
            <Link href={"/connect"}>
              <button
                className="w-56 h-11 bg-black shadow-blue shadow-lg hover:bg-white hover:text-black hover:-translate-y-3 transition-all duration-500 rounded text-white font-arvo font-bold text-sm drawer7"
                onClick={toggleDrawer}
              >
                <a href="#contact">Let's Connect</a>
              </button>
            </Link>
          </span>
        </div>
      </Drawer>
    </div>
  );
};

export default NavMobile;
