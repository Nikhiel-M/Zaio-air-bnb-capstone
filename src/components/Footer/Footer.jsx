import React from "react";
import {
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterSubtitle,
  Kicker,
  FooterWrapper,
} from "./Footer.styled";
import { TbWorld } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterSubtitle>Help Center</FooterSubtitle>
          <FooterSubtitle>Safety information</FooterSubtitle>
          <FooterSubtitle>Cancellation options</FooterSubtitle>
          <FooterSubtitle>Our Covid-19 Response</FooterSubtitle>
          <FooterSubtitle>Supporting people with disabilities</FooterSubtitle>
          <FooterSubtitle>Report a neighborhood concern</FooterSubtitle>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Community</FooterTitle>
          <FooterSubtitle>Airbnb.org: disaster relief housing</FooterSubtitle>
          <FooterSubtitle>Support: Afghan refugees</FooterSubtitle>
          <FooterSubtitle>Celebrating diversity & belonging</FooterSubtitle>
          <FooterSubtitle>Combating discrimination</FooterSubtitle>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Hosting</FooterTitle>
          <FooterSubtitle>Try hosting</FooterSubtitle>
          <FooterSubtitle>AirCover: protection for Hosts</FooterSubtitle>
          <FooterSubtitle>Explore hosting resources</FooterSubtitle>
          <FooterSubtitle>Visit our community forum</FooterSubtitle>
          <FooterSubtitle>How to host responsibly</FooterSubtitle>
        </FooterSection>

        <FooterSection>
          <FooterTitle>About</FooterTitle>
          <FooterSubtitle>Newsroom</FooterSubtitle>
          <FooterSubtitle>Learn about new features</FooterSubtitle>
          <FooterSubtitle>Learn from our founders</FooterSubtitle>
          <FooterSubtitle>Careers</FooterSubtitle>
          <FooterSubtitle>Investors</FooterSubtitle>
          <FooterSubtitle>Airbnb Luxe</FooterSubtitle>
        </FooterSection>
      </FooterContainer>
      <Kicker>
        <div className="left"> © 2022 Airbnb, Inc. Privacy Terms Sitemap </div>
        <div className="right">
          {" "}
          <TbWorld className="icon" /> English <FiDollarSign className="icon" />{" "}
          USD <BsFacebook className="icon" /> <BsTwitterX className="icon" />{" "}
          <FaInstagram className="icon" />{" "}
        </div>
      </Kicker>
    </FooterWrapper>
  );
};

export default Footer;
