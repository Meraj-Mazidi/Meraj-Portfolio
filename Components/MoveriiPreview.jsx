import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const moveriiLandingsPreview = [
  {
    id: 1,
    image: "/images/projects/moverii landing pages preview/Fitness-holidays.png",
    alt: "fitness-holiday",
    path: "https://moverii.de/fitnessreisen",
  },
  {
    id: 2,
    image: "/images/projects/moverii landing pages preview/europe.png",
    alt: "europe",
    path: "https://moverii.de/surfcamp-europe",
  },
  {
    id: 3,
    image: "/images/projects/moverii landing pages preview/surf-camps.png",
    alt: "surfCamps",
    path: "https://moverii.de/surfcamps",
  },
  {
    id: 4,
    image: "/images/projects/moverii landing pages preview/france.png",
    alt: "france",
    path: "https://moverii.de/surfcamps-france",
  },
  {
    id: 5,
    image: "/images/projects/moverii landing pages preview/spain.png",
    alt: "spain",
    path: "https://moverii.de/surfcamps-spanien",
  },
  {
    id: 6,
    image: "/images/projects/moverii landing pages preview/yoga-retreats.png",
    alt: "yoga",
    path: "https://moverii.de/yoga-retreats",
  },
  {
    id: 7,
    image: "/images/projects/moverii landing pages preview/Active-holidays.png",
    alt: "active holiday",
    path: "https://moverii.de/active-holidays",
  },
  {
    id: 8,
    image: "/images/projects/moverii landing pages preview/Hiking.png",
    alt: "hiking holidays",
    path: "https://moverii.de/hiking-holidays",
  },
  {
    id: 9,
    image: "/images/projects/moverii landing pages preview/Yoga-Germany.png",
    alt: "yogaGermany",
    path: "https://moverii.de/yoga-retreats-germany",
  },
  {
    id: 10,
    image: "/images/projects/moverii landing pages preview/tenerife.png",
    alt: "tenerife",
    path: "https://moverii.de/surfcamps-teneriffa",
  },
  {
    id: 11,
    image: "/images/projects/moverii landing pages preview/portugal.png",
    alt: "portugal",
    path: "https://moverii.de/surfcamps-portugal",
  },
  {
    id: 12,
    image: "/images/projects/moverii landing pages preview/fuerteventura.png",
    alt: "fuerteventura",
    path: "https://moverii.de/surfcamps-fuerteventura",
  },
];

const MoveriiPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {moveriiLandingsPreview.map((item) => (
        <Tilt key={item.id} scale="1.1" transitionSpeed={5000}>
          <a href={item.path} target="_blank">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full rounded-2xl hover:shadow-light-3xl"
            />
          </a>
        </Tilt>
      ))}
    </div>
  );
};

export default MoveriiPreview;
