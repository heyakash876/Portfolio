import React from "react";
import { Heading, Text, Button } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import "./About.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

const About = () => {
  
  // const [isVisible, setIsVisible] = useState<boolean>(true);

  const { language } = useLanguage();

  // const hide = () => setIsVisible(false);

  const getFontSize = () => {
    const width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  };

  
  return(
    <>
      <div className="bg">
        <div className="about-wrapper">
          <div className="about-text">
            <div className="about-title">
              <Heading as='h1' fontSize={getFontSize()} size='3.25xl'>
                {text[language].aboutHi}
              </Heading>
              <Heading as='h1' fontSize={getFontSize()} size='3.25xl'>
                {text[language].aboutIam} <span className="name">Akash</span>
              </Heading>
            </div>
            <div className="about-text-desc">
              <Text fontSize='3xl'>{text[language].aboutSkilled} <span className="name">BLOCKCHAIN & WEB DEVELOPER</span> {text[language].aboutText}</Text>
            </div>

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

            <a href="mailto:vermakash876@gmail.com">
              <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
                {text[language].contactButton}
              </Button>
            </a>
          </div>
          <div className="about-avatar">
          </div>
        </div>
        <div className="icon-wrapper">
          <div className="bottom-icon">
            <a href="#more">
              <BsChevronDown />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;