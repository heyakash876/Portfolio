import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "vermakash876@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:vermakash876@gmail.com",
  },
  {
    name: "TWITTER:",
    info: "@vermakash876",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/vermakash876",
  },
  {
    name: "TELEGRAM:",
    info: "@hey_cash876",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/hey_cash876",
  },
  {
    name: "DISCORD:",
    info: "acashh",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/users/760081488216719381",
  },
  {
    name: "GitHub:",
    info: "@heyakash876",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/heyakash876",
  },
  {
    name: "LOCATION & ZONE:",
    info: "India, GMT+5:30",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/india",
  },
];

const Contact = () => {

  const { language } = useLanguage();

  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">{text[language].contactHeading}</p>
        {/*<p className="text">If you have any questions or want to hire me, please contact me:</p>*/}
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="button-container">
        <a href="mailto:vermakash876@gmail.com">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            {text[language].contactButton}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;