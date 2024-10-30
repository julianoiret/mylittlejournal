import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #F5F5F5;
  color: #333;
  padding: 2rem 1.5rem;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
  color: #555;
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;

  a {
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #4F7942; 
    }
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1rem 0;

  a {
    color: #333;
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #4F7942;
    }
  }
`;

export const CopyrightText = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-top: 1.5rem;
`;