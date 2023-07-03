import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";
import ContactNav from "./ContactNav";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <ContactNav />
      <div className="parentEl">
        {Children}
      </div>
    </>
  );
};

export default Layout;
