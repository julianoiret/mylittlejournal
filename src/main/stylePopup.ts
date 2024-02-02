import styled from "styled-components";

export const Overlay = styled.div`

    position: fixed;
    background: rgba($dark, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    z-index: 3;
  
    display: grid;
    align-items: center;
    justify-items: center;
  `
  
  export const OverlayInner = styled.div`
    background: white;
    padding: 20px;
    width: 700px;
    position: relative;
    opacity: 1;
  `

  export const OverlayClose = styled.button`
  position: absolute;
  top: 3px;
  right: 10px;
  background: none;
  outline: 0;
  color: black;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover {
    color: grey;
  }
  `
  
  export const ProjectImg = styled.img`
  width: 100%;
  `