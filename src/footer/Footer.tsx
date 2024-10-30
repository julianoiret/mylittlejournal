import { FC } from "react";
import { CopyrightText, FooterText, SocialMediaLinks, FooterHeading, FooterContent, FooterContainer } from "./style";
import { FaInstagram, FaGithubAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterHeading>My Little Journal</FooterHeading>
        <FooterText>Creative Journals by Julia Hanard</FooterText>
        <SocialMediaLinks>
          <a href="https://instagram.com/mylittlejournal.au" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://github.com/julianoiret" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithubAlt />
          </a>
          <a href="https://www.linkedin.com/in/julia-hanard-332395ab/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
            <FaLinkedin />
          </a>
          <a href="mailto:julia.hanard@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </SocialMediaLinks>
        <CopyrightText>© {new Date().getFullYear()} MyLittleJournal. All rights reserved.</CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
