/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSkill, Skill } from "../skills/config";
import Screenshot from "./../../images/Screenshot (114).png";
import Screenshot2 from "./../../images/Screenshot (115).png";
import Securewatch from "./../../images/Screenshot (117).png";


export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projectsEn: Project[] = [
  {
    name: "CandyMachineUI",
    description: "Create your own personalized  NFTs ",
    image: Screenshot,
    url: "",
    github: "https://github.com/heyakash876/Candymachine",
    technologies: getSkill(["metaplex","Rust"," SolanaCli", "SugarCli",  "solidity", "typescript", "react", "Web3"])
  },
 
 
  
  {
    name: "Portfolio",
    description: "Developer portfolio showing my skillset.",
    image: Screenshot2,
    url: "",
    github: "",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  // {
  //   name: "Collaborative Whiteboard",
  //   description: "An online collaborative whiteboard app, with private and public rooms for people to chat and draw in real-time. They can also mint NFTs!",
  //   image: Whiteboard,
  //   url: "",
  //   github: "https://github.com/heyakash876",
  //   technologies: getSkill(["react", "typescript", "nodejs", "socket.io", "moralis", "solidity"])
  // },
 
 
  {
    name: "SecureWatch",
    description: "Contributed in SecureWatch - a realtime smart contract monitoring and mitigation platform. ",
    image: Securewatch,
    url: "https://securewatch.securedapp.io",
    github: "https://github.com/heyakash876",
    technologies: getSkill(["react", "javascript", "css", "html", "git", "npm", "typescript", "solidity"])
  },
  
  
];

