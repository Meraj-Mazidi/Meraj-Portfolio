import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./Navbar";
import ContactNav from "./ContactNav";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <ContactNav />
      {Children}
    </>
  );
};

export default Layout;
