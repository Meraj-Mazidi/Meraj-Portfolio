import React from "react";
import Tilt from "react-parallax-tilt";

const cardData = [
  {
    id: 1,
    icon: "images/icons/mail.svg",
    text: "merajmazidiwork@gmail.com",
    alt: "email",
    href: "mailto:merajmazidiwork@gmail.com",
  },
  {
    id: 2,
    icon: "images/icons/linkedin.svg",
    text: "@meraj-mazidi",
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/meraj-mazidi-59290a155/",
  },
  {
    id: 3,
    icon: "images/icons/github.svg",
    text: "@Meraj-Mazidi",
    alt: "Github",
    href: "https://github.com/Meraj-Mazidi",
  },
  {
    id: 4,
    icon: "images/icons/instagram.svg",
    text: "@meraj_mazidii",
    alt: "Instagram",
    href: "https://www.instagram.com/meraj_mazidii/",
  },
];

const ContactCard = () => {
  return (
    <div className="w-96 h-auto font-poppins scale-90 md:scale-100">
      <Tilt scale="1.1" transitionSpeed={5000}>
        <div className="bg-violet p-10 rounded-3xl shadow-light-3xl hover:shadow-violet-5xl flex flex-col gap-5">
          <p className="font-bold text-xl text-center">My Contact Info</p>

          {cardData.map((item) => (
            <a
              href={item.href}
              key={item.id}
              target="_blank"
              className="bg-blue p-2 px-3 rounded-xl flex items-center gap-3 cursor-pointer hover:shadow-md hover:shadow-white hover:scale-105 transition-all duration-300 w-[275px] lg:w-[285px]"
            >
              <img
                src={item.icon}
                alt={item.alt}
                width="auto"
                height="auto"
                className="w-8"
              />
              <p
                className={`text-violet hover:text-white transition-all duration-200 hover:border-b-2 hover:border-pink ${
                  item.id === 1 ? "text-base" : "text-xl"
                }`}
              >
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default ContactCard;
