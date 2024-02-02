/* eslint-disable jsx-a11y/alt-text */
import { FC, useEffect, useState } from "react"
import { IntroductionSection, TextWrapper, IntroductionTitle, IntroductionText, Test, Icon, ArrowIcons, PhotoSection, FingerImg } from "./style";
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import Carousel from './Carousel';
import Popup from "./Popup";

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
          <TextWrapper>
            <IntroductionTitle>Hi, I'm Julia. I create, I write.</IntroductionTitle>
            <IntroductionText>French-Australian journaler based in Sydney. Passionate about art, collage and writing, I started my first journal when I was 7. I love creating vintage-vibe themes, in particularly with plants and animals. I find journaling relaxing and think that it's a form of art.</IntroductionText>
          </TextWrapper>
            <PhotoSection>
            {imagesToDisplay.map((photo: any) => {
                return <Carousel key={photo.id}{...photo} photoPopup={photoPopup} openToggle={openToggle}></Carousel>
            })}
            </PhotoSection>
            {isZoom && (
            <Popup openToggle={openToggle} photoToggle={photoToggle}></Popup>)}
        <ArrowIcons>
         <Icon>
         <FingerImg onClick={() => handleAddIndex()} src={require('../asset/right-arrow.png')}/>
         </Icon>
         <Icon>
         <FingerImg onClick={() => handleAddIndex()} src={require('../asset/left-arrow.png')}/>
      
             {/* <FingerImg onClick={() => handleAddIndex()} /> */}
         </Icon>
     </ArrowIcons>
        </IntroductionSection>
        </>
    )
};

export default Main;