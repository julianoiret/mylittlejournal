import { FC } from "react"
import { PhotoGallery, PhotoWrapper, PhotoTitle} from "./style";

export interface Props {
    id: number,
    link: string,
    title: string,
    description: string,
    photoPopup: any,
    openToggle: any,
}

const Carousel : FC<Props> = ({id, link, title, description, photoPopup, openToggle}) => {

    return (
<PhotoWrapper onClick={() => {
            openToggle();
            photoPopup(id);
        }}>
        <PhotoGallery key={id} src={link} alt={description}>
        </PhotoGallery>

            <PhotoTitle>{title}</PhotoTitle>
           
</PhotoWrapper>
    )
};

export default Carousel;
