import React from "react";
import { BsTelegram } from "react-icons/bs";
import { Popover } from "antd";
import { FiPhone } from "react-icons/fi";

const socialBarData = [
  {
    icon: "/images/icons/mail.svg",
    alt: "email",
    link: "mailto:merajmazidiwork@gmail.com",
    popover: (
      <a
        href="mailto:merajmazidiwork@gmail.com"
        className="text-base font-medium text-center flex justify-center underline text-blue"
      >
        merajmazidiwork@gmail.com
      </a>
    ),
    popoverTitle: "Email Me here:",
  },
  {
    icon: "",
    alt: "phoneNumber",
    link: "Tel: 00989363347522",
    popover: (
      <a
        href="Tel: 00989363347522"
        className="text-base font-medium text-center flex justify-center underline text-blue"
      >
        (+98) 936 334 7522
      </a>
    ),
    popoverTitle: "Call Me here:",
  },
  {
    icon: "/images/icons/linkedin.svg",
    alt: "Linkedin",
    link: "https://ir.linkedin.com/in/meraj-mazidi-59290a155",
    popover: (
      <a
        href="https://ir.linkedin.com/in/meraj-mazidi-59290a155"
        className="text-base font-medium text-center flex justify-center underline text-blue"
      >
        @meraj-mazidi
      </a>
    ),
    popoverTitle: "My Linkedin Account:",
  },
  {
    icon: BsTelegram,
    alt: "telegram",
    link: "https://t.me/merajmazidi",
    popover: (
      <a
        href="https://t.me/merajmazidi"
        className="text-base font-medium text-center flex justify-center underline !text-blue"
      >
        @MerajMazidi
      </a>
    ),
    popoverTitle: "My Telegram Account:",
  },
  {
    icon: "/images/icons/github.svg",
    alt: "Github",
    link: "https://github.com/Meraj-Mazidi",
    popover: (
      <a
        href="https://github.com/Meraj-Mazidi"
        className="text-base font-medium text-center flex justify-center underline !text-blue"
      >
        @Meraj-Mazidi
      </a>
    ),
    popoverTitle: "My GitHub Account:",
  },
  {
    icon: "/images/icons/instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/meraj_mazidii/",
    popover: (
      <a
        href="https://www.instagram.com/meraj_mazidii/"
        className="text-base font-medium text-center flex justify-center underline !text-blue"
      >
        @meraj_mazidii
      </a>
    ),
    popoverTitle: "My Instagram Account:",
  },
];

// const popoverContent =

const ContactNav = () => {
  return (
    <div className="contact-nav bg-transparent w-20 fixed bottom-0 left-0 z-50 h-fit lg:h-full hidden lg:block">
      <div className="contactNav-1  absolute bottom-0">
        <div className="contactNav-2 w-full flex flex-col justify-center items-center pl-4 gap-4">
          {/* Social Icons */}
          {socialBarData.map((item, i) => (
            <Popover
              content={item.popover}
              title={
                <span className="!text-center flex justify-center font-semibold text-base">
                  {item.popoverTitle}
                </span>
              }
              placement="right"
            >
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="hover:scale-75 transition-all duration-500 sideNav"
              >
                {item.alt === "telegram" ? (
                  <BsTelegram className="contactNav-3 text-[33px] text-violet" />
                ) : item.alt === "phoneNumber" ? (
                  <FiPhone className="contactNav text-[33px] text-violet" />
                )
                : (
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="contactNav-4 w-[32px]"
                  />
                )}
              </a>
            </Popover>
          ))}

          {/* Line */}
          <span className="contactNav-5 w-[3px] h-32 bg-violet border border-violet" />
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
