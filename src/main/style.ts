import styled from "styled-components";

export const PrimaryWrapper = styled.div`
margin-left: 30px;
border: 1px solid pink;
`;

export const SecondaryWrapper = styled.div`
display: flex;
align-items: center;
border: 1px solid yellow;
width: 700px;
margin: 0 auto;
text-align: justify;
text-justify: inter-word;
padding: 40px;
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

@media (min-width: 768px) {
  /* Apply styles for screens wider than 768px */
  max-width: 768px;
}

@media (min-width: 1024px) {
  /* Apply styles for screens wider than 1024px */
  max-width: 1024px;
}
`;

export const PhotoSection = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

// OPTIONAL / DIFFERENT LAYOUT:
width: 90%;
margin: 0 auto;
`;

export const PhotoTitle = styled.p`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
opacity: 0;
transition: opacity 0.3s ease;

${PhotoWrapper}:hover & {
  opacity: 1;
}

`;

export const PhotoGallery = styled.img`
width: 100%;

// TODO: modify padding depending on devices 
// padding: 8px 0;


${PhotoWrapper}:hover & {
  opacity: 0.4;
}


// &.zoom {
//     // border: 100px white solid;
//     background-color: white;
//     width: 80%;
//     // position: relative;
//     // top: 50%;
//     // left: 50%;
//     // transform: translate(-50%, -50%); 
//     //OR JUST USE SCALE 1.5
//     transform: scale(1.5);
//     transition: transform 0.1s ease-in-out;

   

// }


`;

// export const ImageText = styled.div`
// position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
//   color: white;
//   padding: 10px;
//   opacity: 0; /* Hide by default */
//   transition: opacity 0.3s ease; /* Smooth transition */
// `;

// export const ImageContainerWithHover = styled(PhotoGallery)`
// &:hover ${ImageText} {
//   opacity: 1; /* Show text on hover */
// }`;


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
