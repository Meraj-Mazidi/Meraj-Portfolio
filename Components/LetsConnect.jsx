import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
import emailjs from "@emailjs/browser";
import Boxes from "../public/images/vectors/boxes.svg";

const LetsConnect = () => {
  const [userName, setUserName] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  // const handleMessageSend = () => { };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4uh8o0g",
        "template_ye76rvf",
        form.current,
        "nY0vfz7O3u6MaxinP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full lg:pr-10 lg:pl-32 pt-4 pb-16 font-poppins relative xl:container xl:mx-auto connect">
      {/* title */}
      <span className="flex flex-col gap-5 text-center mb-20 px-4 lg:px-0 connect2">
        <p className="text-white font-extrabold text-3xl md:text-5xl leading-snug">
          Hey{" "}
          {userName === "" ? (
            "there"
          ) : (
            <span className="text-pink">{userName.toUpperCase()}</span>
          )}
          , <br />
          {messageSent ? (
            <span>
              That was <span className="animate-pulse">Great</span>!
            </span>
          ) : (
            <span>Let's start a nice conversation</span>
          )}
        </p>
        {messageSent ? (
          <p className="text-white text-lg">
            Thank you for your kind words, <br /> I received your message just
            now, and I'll get back to you ASAP!
          </p>
        ) : (
          <p className="text-white text-lg">
            You can just simply type in your message here and I will reply ASAP!{" "}
            <br />
            I would love to meet you and get to know you. <br />
            Don't you have anything to say...? Let's get in touch then :)
          </p>
        )}
      </span>

      <img
        src={"images/vectors/circle-spin.svg"}
        alt="CircleSpin"
        width={680}
        className="absolute -right-[38%] md:-right-[40%] lg:-right-[28%] top-[200px] md:top-10 animate-spin blur-sm contact1"
      />

      {messageSent && (
        <span className="flex justify-center items-center">
          <FcApproval className="text-[100px] animate-bounce check" />
        </span>
      )}

      <form
        className={`px-10 lg:w-[950px] mx-auto mb-[200px] contact2 ${
          messageSent && "hidden hide"
        }`}
        ref={form}
        onSubmit={sendEmail}
      >
        {/* Input and content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 contact3`}>
          <TextField
            name="first_name"
            label="First Name"
            variant="outlined"
            className="shadow-md shadow-violet connect-inputs"
            onChange={(e) => handleNameChange(e)}
            required
          />
          <TextField
            name="last_name"
            label="Last Name"
            variant="outlined"
            className="shadow-md shadow-violet connect-inputs"
            required
          />
          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            className="shadow-md shadow-violet connect-inputs"
            type="email"
            required
          />
          <TextField
            name="phone_number"
            label="Phone Number (optional)"
            variant="outlined"
            type="number"
            className="shadow-md shadow-violet connect-inputs"
          />
          <label htmlFor="message" className="!-mb-4 text-pink font-medium">
            Your Message here...
          </label>
          <textarea
            name="message"
            id=""
            className="col-span-full rounded-[8px] bg-transparent border-2 border-pink  shadow-violet p-4 text-white placeholder:text-pink focus:outline-none min-h-[200px] focus:border-white shadow-inner contact4"
            placeholder="Hey Meraj..."
            required
          ></textarea>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className={`px-6 sm:px-4 xl:px-6 py-4 text-base h-25 transition-all rounded overflow-hidden border-2 hover:shadow-light-xl hover:outline-none hover:border-pink focus:outline-none font-poppins font-bold z-10 bg-pink text-blue hover:text-pink hover:bg-transparent border-transparent shadow-sm shadow-violet`}
            onClick={() => setMessageSent(true)}
          >
            <p className="flex gap-2 items-center hover:gap-10 transition-all duration-200">
              Submit your Message
              <BsArrowRight className="text-xl" />
            </p>
          </button>
        </div>
      </form>

      <img
        src={"images/vectors/boxes.svg"}
        alt="Box"
        // width={680}
        className="absolute -left-[30%] md:-left-[250px] bottom-[150px] md:bottom-[30%] blur-sm rotate-90 contact5"
      />
    </div>
  );
};

export default LetsConnect;
