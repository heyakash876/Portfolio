// src/Navbar.js
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Heading, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight*0.4) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? "show" : ""}`}>
      <div>
        <div className="navbarText">
          <Heading as="h2">
            Akash
          </Heading>
          <Text fontSize="2xl" className="name">
            BLOCKCHAIN & WEB
          </Text>
        </div>
      </div>
      <div className="navbarRight">
        <div className="icons">
          <a href="https://github.com/heyakash876" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
          </a>
          <a href="https://twitter.com/vermakash876" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle className="icon" />
          </a>
          <a href="https://t.me/hey_cash876" target="_blank" rel="noreferrer">
            <BsTelegram className="icon" />
          </a>
          <a href="mailto:vermakash876@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail className="icon" />
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
