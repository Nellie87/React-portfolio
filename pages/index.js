import React from 'react';

import Head from "next/head";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import popupImage from "../public/phone.jpg";

import { motion } from "framer-motion";

const ScrollAnimatedHeading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetScroll = 500; // Adjust this value as needed

      if (scrollTop > targetScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.h3
        initial={{ x: -1000 }} // Initial position outside the viewport on the left
        animate={{ x: isVisible ? 0 : -1000 }} // Slide in if isVisible is true, otherwise stay hidden
        transition={{ duration: 0.5 }}
        className="text-3xl py-1 dark:text-white"
      >
        Services I offer
      </motion.h3>
    </div>
  );
};

const MyComponent = () => {
  return (
    <div>
      <img src={popupImage} alt="Pop up image" />
    </div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredImages, setHoveredImages] = useState({
    web1: false,
    web2: false,
    web3: false,
    web4: false,
    web5: false,
    web6: false,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage pop-up visibility

  const handleMouseOver = (image) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [image]: true,
    }));
  };

  const handleMouseLeave = (image) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [image]: false,
    }));
  };

  const handleEmailMeClick = () => {
    setIsPopupOpen(true); // Open the pop-up when Email Me button is clicked
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false); // Close the pop-up when Close button is clicked
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Bonjour !</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text-to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nelius Ndung'u
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com">
                <AiFillTwitterCircle />
              </a>
              <a href="https://linkedIn.com">
                <AiFillLinkedin />
              </a>
              <a href="https://youtube.com">
                <AiFillYoutube />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <ScrollAnimatedHeading />{" "}
            {/* Include the animated heading component here */}
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming, and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div
              className={`basis-1/3 flex-1 ${
                hoveredImages["web1"] ? "" : "opacity-40"
              }`}
              onMouseOver={() => handleMouseOver("web1")}
              onMouseLeave={() => handleMouseLeave("web1")}
            >
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div
              className={`basis-1/3 flex-1 ${
                hoveredImages["web2"] ? "" : "opacity-40"
              }`}
              onMouseOver={() => handleMouseOver("web2")}
              onMouseLeave={() => handleMouseLeave("web2")}
            >
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div
              className={`basis-1/3 flex-1 ${
                hoveredImages["web3"] ? "" : "opacity-60"
              }`}
              onMouseOver={() => handleMouseOver("web3")}
              onMouseLeave={() => handleMouseLeave("web3")}
            >
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div
              className={`basis-1/3 flex-1 ${
                hoveredImages["web4"] ? "" : "opacity-60"
              }`}
              onMouseOver={() => handleMouseOver("web4")}
              onMouseLeave={() => handleMouseLeave("web4")}
            >
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div
              className={`basis-1/3 flex-1 ${
                hoveredImages["web5"] ? "" : "opacity-60"
              }`}
              onMouseOver={() => handleMouseOver("web5")}
              onMouseLeave={() => handleMouseLeave("web5")}
            >
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div
              className={`basis-1/3 flex-1 ${
                hoveredImages["web6"] ? "" : "opacity-60"
              }`}
              onMouseOver={() => handleMouseOver("web6")}
              onMouseLeave={() => handleMouseLeave("web6")}
            >
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-10">
            <button
              onClick={handleEmailMeClick}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
            >
              Email Me
            </button>
          </div>
        </section>
      </main>
      {/* Popup Box */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
<div className="bg-popup-image p-8 rounded-lg" style={{backgroundImage: `url(${popupImage})`}}>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Enter your email and message
            </h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-teal-500 mb-4 block w-full"
            />
            <textarea
              placeholder="Enter your message"
              className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-teal-500 mb-4 block w-full resize-none"
              rows="4"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handlePopupClose}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md mr-2"
              >
                Close
              </button>
              <button
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
