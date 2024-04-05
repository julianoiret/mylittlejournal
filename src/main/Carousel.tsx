import { FC } from "react"
import { PhotoGallery, PhotoTitle} from "./style";

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
<>
        <PhotoGallery key={id} src={link} alt={description} onClick={() => {
            openToggle();
            photoPopup(id);
        }}>
        </PhotoGallery>

            {/* <PhotoTitle>{title}</PhotoTitle> */}
</>
    )
};

export default Carousel;
