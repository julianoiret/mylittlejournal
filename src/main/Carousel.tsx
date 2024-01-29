import { FC } from "react"
import { PhotoGallery} from "./style";

export interface Props {
    id: number,
    link: string,
    description: string,
    photoPopup: any,
    openToggle: any,
}

const Carousel : FC<Props> = ({id, link, description, photoPopup, openToggle}) => {

    return (
        <PhotoGallery key={id} src={link} alt={description} onClick={() => {
            openToggle();
            photoPopup(id);
        }}></PhotoGallery>
    )
};

export default Carousel;
