import { Overlay, OverlayInner, ProjectImg, OverlayClose } from "./stylePopup";

const Popup = ({openToggle, photoToggle}: any) => {

    return (
        <Overlay onClick={openToggle}>
            <OverlayInner>
                <OverlayClose onClick={openToggle}>
                    X
                </OverlayClose>
                <ProjectImg onClick={openToggle} src={photoToggle.link}></ProjectImg>
            </OverlayInner>
        </Overlay>
    
    )
};

export default Popup;
