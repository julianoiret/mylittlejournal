import styled from "styled-components";
import { device } from "../devices";

export const Banner = styled.div`
background-color: #F6F3E7;
display: flex;
flex-direction: column;
align-items: start;

@media ${device.mobileL} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TitleImg = styled.img`
display: none;

@media ${device.mobileL} {
  width: 100px;
  display: inline-block;
  padding-left: 10px;
}
@media ${device.tablet} {
  width: 100px;
  display: inline-block;
 padding-left: 30px;
}
`;

export const LeftImg = styled.img`
width: 150px;
padding-left: 10px;

@media ${device.mobileL} {
    width: 100px;
    padding-left: 10px;
  }
  @media ${device.tablet} {
    width: 300px;
   padding-left: 30px;
  }
`;


export const RightImg = styled.img`
width: 150px;
align-self: flex-end;

@media ${device.mobileL} {
    width: 230px;
  }
  @media ${device.tablet} {
    width: 270px;
  }
`;

export const Title = styled.h1`
text-transform: uppercase;
word-spacing: 3px;
letter-spacing: 10px;
text-align: center;
margin-bottom: -5px;

@media ${device.mobileL} {
margin-bottom: 0;
}
@media ${device.tablet} {
  margin-bottom: 0;
}
`;

export const Name = styled.p`
font-family: 'Dancing Script', cursive;
font-size: 25px;
text-align: center;

@media ${device.mobileL} {
  font-size: 30px;
}
@media ${device.tablet} {
  font-size: 30px;
}
`;

export const TitleWrapper = styled.div`
// border: 2px solid black;
display: flex;
justify-content: space-evenly;
align-items: center;
padding-left: 30px;
`;