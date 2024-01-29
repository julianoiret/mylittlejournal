import { Overlay, OverlayInner, ProjectImg, OverlayClose } from "./stylePopup";

const Popup = ({openToggle, photoToggle}: any) => {

    return (
        <Overlay>
            <OverlayInner>
                <OverlayClose onClick={openToggle}>
                    X
                </OverlayClose>
                <ProjectImg src={photoToggle.link}></ProjectImg>
            </OverlayInner>
        </Overlay>
    
    )
};

export default Popup;
