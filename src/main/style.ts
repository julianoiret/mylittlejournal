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
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

${PhotoWrapper}:hover & {
  opacity: 1;
  cursor: zoom-in;
}
`;

export const Title = styled.p`
  border: 4px solid #9F7757;
  padding: 10px;
  background-color: #F6F3E7;
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
  padding: 0 100px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const FingerImg = styled.img`
  width: 100px;
`;
