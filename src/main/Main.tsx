/* eslint-disable jsx-a11y/alt-text */
import { FC, useEffect, useState } from "react"
import { PrimaryWrapper, SecondaryWrapper, ThirdWrapper, LeafImg, IntroductionTitle, IntroductionText, PhotoSection, CarouselNavWrapper, CarouselBtn, FingerImg } from "./style";
import Carousel from './Carousel';
import Popup from "./Popup";

export interface detailsPhoto  {
    id: number,
    link: string,
    title: string,
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

  // Open image
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
  }, [index, allImages]);

  // Go previous index block
  const handleSubstractIndex = () => {
    setIndex((prevIndex) => {
      let index = prevIndex - 1;
      if (index < 1) {
        // I used math ceil to round up the index and I had to divide by the chunkSize which is 8
        index = Math.ceil(allImages.length / chunkSize);
      }
      return index
    });
  };

  // Go next index block
  const handleAddIndex = () => {
    setIndex((prevIndex) => {
      let index = prevIndex + 1;
      // I used math ceil to round up the index 
      if (index > Math.ceil(allImages.length / chunkSize)) {
        index = 1;
      }
      return index
      });
  };

    return (
        <>
        <PrimaryWrapper>
          <SecondaryWrapper>
          <LeafImg src={require('../asset/leaf.png')}></LeafImg>
          <ThirdWrapper>
            <IntroductionTitle>Hi, I'm Julia. I create, I write.</IntroductionTitle>
            <IntroductionText>French-Australian journaler based in Sydney. Passionate about art, collage and writing, I started my first journal when I was 7. I love creating vintage-vibe themes, in particularly with plants and animals. I find journaling relaxing and think that it's a form of art.</IntroductionText>
            </ThirdWrapper>
            <LeafImg src={require('../asset/leaf.png')}></LeafImg>
          </SecondaryWrapper>
        </PrimaryWrapper>
        <PhotoSection>
          {imagesToDisplay.map((photo: any) => {
            return <Carousel key={photo.id}{...photo} photoPopup={photoPopup} openToggle={openToggle} photoToggle={photoToggle} isZoom={isZoom}></Carousel>
            })}
        </PhotoSection>
        {isZoom && (
        <Popup openToggle={openToggle} photoToggle={photoToggle}></Popup>)}
        <CarouselNavWrapper>
          <CarouselBtn>
            <FingerImg onClick={() => handleSubstractIndex()} src={require('../asset/right-arrow.png')}/>
          </CarouselBtn>
          <CarouselBtn>
            <FingerImg onClick={() => handleAddIndex()} src={require('../asset/left-arrow.png')}/>
          </CarouselBtn>
        </CarouselNavWrapper>

        </>
    )
};

export default Main;