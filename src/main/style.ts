import styled from "styled-components";
import { device } from "../devices";

export const PrimaryWrapper = styled.div`
margin-left: 0;
border: 1px solid pink;

@media ${device.mobileL} {
  margin-left: 30px;
}
@media ${device.tablet} {
  margin-left: 30px;
}
`;

export const SecondaryWrapper = styled.div`
display: flex;
align-items: center;
border: 1px solid yellow;
width: auto;
margin: 0 auto;
text-align: justify;
text-justify: inter-word;
padding: 40px;

@media ${device.mobileL} {
  width: 700px;
}
@media ${device.tablet} {
  width: 700px;
}
`;

export const ThirdWrapper = styled.div`
width: 500px;
margin: 0 auto;
`;

export const LeafImg = styled.img`
width: 60px;
height: 60px;
`;

export const IntroductionTitle = styled.h2`
text-align: center;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

export const IntroductionText = styled.p`
`;

export const PhotoWrapper = styled.div`
width: 95%;
position: relative;
padding: 8px;
margin: 0 auto;
`;

export const PhotoSection = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

// OPTIONAL / DIFFERENT LAYOUT:
width: 90%;
margin: 0 auto;
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
