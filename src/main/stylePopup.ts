import styled from "styled-components";
import { device } from "../devices";

export const Overlay = styled.div`
    position: fixed;
    background: rgba($dark, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: grid;
    align-items: center;
    justify-items: center;
  `
  
  export const OverlayInner = styled.div`
    background: white;
    padding: 20px;
    position: relative;
    opacity: 1;
    width: 90%;  

  @media ${device.tablet} {
    width: 80%; 
  }

  @media ${device.laptop} {
    width: 700px; 
  }
  `

  export const OverlayClose = styled.button`
   position: absolute;
    top: 10px;
    right: 10px;
    background: #f5f5f5;
    color: #333; 
    border: 2px solid #333; 
    border-radius: 50%; 
    width: 40px;
    height: 40px; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px; 
    cursor: pointer;
    outline: none;
    transition: background 0.3s, color 0.3s, border-color 0.3s;

  &:hover,
  &:focus {
    background: #333; 
    color: #f5f5f5; 
    border-color: #f5f5f5; 
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }
  `
  
  export const ProjectImg = styled.img`
    width: 100%;
    max-height: 80vh;  // to ensure the image fits the screen height

  @media ${device.mobileL} {
    max-height: 70vh;
  }

  @media ${device.tablet} {
    max-height: 75vh;
  }
  `