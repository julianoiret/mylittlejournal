import { FC } from "react"
import { PhotoGallery, PhotoWrapper, PhotoTitle, Title} from "./style";

export interface Props {
    id: number,
    link: string,
    title: string,
    description: string,
    photoPopup: (id: number) => void;
    openToggle: () => void,
}

const Carousel : FC<Props> = ({id, link, title, description, photoPopup, openToggle}) => {

    return (
    <PhotoWrapper onClick={() => {
            openToggle();
            photoPopup(id);
        }}>
            <PhotoGallery key={id} src={link} alt={description} />
            <PhotoTitle>
                <Title>{title}</Title>
            </PhotoTitle>
    </PhotoWrapper>
    )
};

export default Carousel;
