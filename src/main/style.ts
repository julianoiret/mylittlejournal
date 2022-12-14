import styled from "styled-components";
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';

export const IntroductionSection = styled.div`
background-color: white;
border: 1px solid yellow;
`;

export const IntroductionTitle = styled.h2`
text-align: center;
`;

export const IntroductionText = styled.p`
width: 40%;
margin: 0 auto;
padding-bottom: 20px;
`;

export const Test = styled.div`

`;

export const PhotoSection = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
// OPTIONAL / DIFFERENT LAYOUT:
// width: 80%;
// margin: 0 auto;
`;

export const PhotoGallery = styled.img`
width: 95%;
// TODO: modify padding depending on devices 
// padding: 8px 0;
padding: 8px;
margin: 0 auto;
// &:hover {
//     display: none;
// }
&.zoom {
    border: 1px black solid;
}
`;

export const ArrowIcons = styled.div`
text-align: center;
`;

export const Icon = styled.button`
font-size: 60px;
padding: 0 30px;
border: none;
background-color: transparent;
cursor: pointer;
`;
