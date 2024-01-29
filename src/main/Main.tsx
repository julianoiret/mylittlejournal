/* eslint-disable jsx-a11y/alt-text */
import { FC, useEffect, useState } from "react"
import { IntroductionSection, IntroductionTitle, IntroductionText, Test, Icon, ArrowIcons, PhotoSection } from "./style";
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import Carousel from './Carousel';
import Popup from "./Popup";
import { log } from "console";

export interface detailsPhoto  {
    id: number,
    link: string,
    description: string,
}

export interface Props {
    photoGallery: detailsPhoto[] | any,
}

const Main: FC<Props> = ({photoGallery}) => {

  const [allImages] = useState(photoGallery);
  const [imagesToDisplay, setImagesToDisplay] = useState(photoGallery);
  const [index, setIndex] = useState(1);
  const [isZoom, setZoom] = useState(false);
  const [photoToggle, setPhotoToggle] = useState("");

  const chunkSize = 8;

  // Open component
const openToggle = () => {
    setZoom(!isZoom);
  };

  // Find which image has been clicked on 
  const photoPopup = (id: number) => {
    const findImg = allImages.find((img: any)=> img.id === id);
    return setPhotoToggle(findImg);
  }

   // Slice the data: display only 8 photos per page
   useEffect(() => {
    setImagesToDisplay(
      allImages.slice(
        chunkSize * index - chunkSize,
        chunkSize * index
      )
    );
  }, [allImages, index]);

  // Go previous index block
  const handleSubstractIndex = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  // Go next index block
  const handleAddIndex = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

    return (
        <>
        <IntroductionSection>
            <IntroductionTitle>My Little Journal - personal journal</IntroductionTitle>
            <IntroductionText>Hi, I'm Julia, French-Australian based in Sydney. I started my first journal when I was 7, then came across scrapbooking in late 2000's and finally begin journaling/collage in 2020. I'm writing about science, history, culture, art, etc.</IntroductionText>
            <PhotoSection>
            {imagesToDisplay.map((photo: any) => {
                return <Carousel key={photo.id}{...photo} photoPopup={photoPopup} openToggle={openToggle}></Carousel>
            })};
            </PhotoSection>
            {isZoom && (
            <Popup openToggle={openToggle} photoToggle={photoToggle}></Popup>)}
        <ArrowIcons>
         <Icon>
             <CgArrowLongLeft onClick={() => handleSubstractIndex()} />
         </Icon>
         <Icon>
             <CgArrowLongRight onClick={() => handleAddIndex()} />
         </Icon>
     </ArrowIcons>
        </IntroductionSection>
        </>
    )
};

export default Main;