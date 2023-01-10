import { FC, useEffect, useState } from "react"
import { PhotoSection, PhotoGallery, ArrowIcons, Icon} from "./style";
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';

// export interface detailsPhoto  {
//     id: number,
//     link: string,
//     description: string,
// }

export interface Props {
    // photoGallery: detailsPhoto[];
    id: number,
    link: string,
    description: string,
}

const Carousel : FC<Props> = ({id, link, description}) => {

    const [isZoom, setZoom] = useState(false);

    const togglePhoto = () => {
        setZoom(!isZoom);
      };

    return (
        <PhotoGallery onClick={togglePhoto} className={isZoom ? 'zoom' : ''} key={id} src={link} alt={description}></PhotoGallery>
    )
};

export default Carousel;
