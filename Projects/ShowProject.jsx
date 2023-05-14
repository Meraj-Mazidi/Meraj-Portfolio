import React from "react";

// Projects
import {
  NextBlog,
  Dashboard,
  CreativeLanding,
  Fitness,
  Crypto,
  ModernBank,
  LastPortfolio,
  ReactBlog,
  RedPortfolio,
  GreenPortfolio,
  TailwindPortfolio,
} from "./index";

const ShowProject = ({ id }) => {
  return (
    <div className="mt-[30px]">
      {/* Individual Projects */}
      {id === "Next.js-Blog-App" && <NextBlog />}
      {id === "Financial-Dashboard" && <Dashboard />}
      {id === "Creative-Agency-LandingPage" && <CreativeLanding />}
      {id === "Fitness-Landing" && <Fitness />}
      {id === "CryptoWorld" && <Crypto />}
      {id === "Modern-Bank-Landing" && <ModernBank />}
      {id === "Last-Portfolio" && <LastPortfolio />}
      {id === "React-Blog" && <ReactBlog />}
      {id === "Red-Portfolio" && <RedPortfolio />}
      {id === "Green-Portfolio" && <GreenPortfolio />}
      {id === "Tailwind-Portfolio" && <TailwindPortfolio />}
    </div>
  );
};

export default ShowProject;
