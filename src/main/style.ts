import styled from "styled-components";
import { device } from "../devices";

export const PrimaryWrapper = styled.div`
  margin-left: 0;
`;

export const SecondaryWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 30px;

  @media ${device.tablet} {
    width: 700px;
    padding: 40px;
    margin: 0 auto;
  }
`;

export const ThirdWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const LeafImg = styled.img`
  display: none;

  @media ${device.tablet} {
    display: inline-block;
    width: 60px;
    height: 60px;
  }
`;

export const IntroductionTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const IntroductionText = styled.p`
  line-height: 25px;
  text-align: justify;

  @media ${device.tablet} {
    line-height: 30px;
    text-align: center;
  }
`;

export const PhotoWrapper = styled.div`
  position: relative;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  margin: 0 auto;

  @media ${device.tablet} {
    padding: 8px;
  }
`;

export const PhotoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;  /* it's to control the white space between photos */
  padding: 0;
  margin: 0;
  width: 100%;
  overflow: hidden;

  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    }

  & > * {
    margin: 0;
    padding: 0;
  }
`;

export const PhotoTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  background: rgba(90, 60, 30, 0.8); 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  padding: 10px; 
  text-align: center;

  ${PhotoWrapper}:hover & {
    opacity: 1;
    transform: translate(-50%, -40%);
    cursor: zoom-in;
  }
`;

export const Title = styled.p`
  border: none;
  color: #F6F3E7; 
  font-size: 16px; 
  font-weight: bold; 
  margin: 0; 
`;

export const PhotoGallery = styled.img`
  width: 100%;

${PhotoWrapper}:hover & {
  opacity: 0.4;
  cursor: zoom-in;
}
`;

export const CarouselNavWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

export const CarouselBtn = styled.button`
  font-size: 60px;
  padding: 0 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${device.tablet} {
    padding: 0 80px;
  }
`;

export const FingerImg = styled.img`
  width: 65px;

  @media ${device.tablet} {
    width: 100px
  }
`;
