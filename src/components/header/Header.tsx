import React from "react";
import "./Header.css";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import logo from "./logo.svg";
import Image from "next/image";
import searchLogo from "./headerIcons/search.svg";
interface Option {
  title: string;
}

interface HeaderProps {
  options: Option[];
}

const Header: React.FC<HeaderProps> = (props) => {
  const { options } = props;

  return (
    <React.Fragment>
      <header className="headerContainer">
        <div className="headerContainer-div1">
          <a
            href="mailto:example@example.com"
            className="flex items-center text-gray-700"
          >
            <FaEnvelope className="mr-2 text-blue-500 text-sm" />{" "}
            <div className="text-[#FFFFFF] text-xs">www.registerkaro.in</div>
          </a>
          <div className="headerDivider"></div>
          <a href="tel:+1234567890" className="flex items-center text-gray-700">
            <FaPhone className="mr-2 text-blue-500 text-xs" />
            <div className="text-[#FFFFFF] text-xs">+91 00000 00000</div>
          </a>
        </div>
        <div className="headerDivider"></div>
        <div className="headerContainer-div1">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] text-sm"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] text-sm"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] text-sm"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] text-sm"
          >
            <FaPinterestP />
          </a>
        </div>
      </header>
      <header className="headerContainerMain">
        <Image src={logo} alt="logo" />
        <div className="headerContainerMain-div">
          <div className="headerContainerMain-div1">
            {options.map((option: any, index: number) => {
              return (
                <React.Fragment key={index}>
                  <p className="header-options">{option.title}</p>
                </React.Fragment>
              );
            })}
          </div>
          <Image
            src={searchLogo}
            alt="logo"
            className="headerContainer-searchImg"
          />
          <button className="headerContainer-btn">Talk to an expert</button>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
