/* eslint-disable jsx-a11y/alt-text */
import { FC, useEffect, useState } from "react"
import { IntroductionSection, IntroductionTitle, IntroductionText, Test, Icon, ArrowIcons, PhotoSection } from "./style";
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
import Carousel from './Carousel';

export interface detailsPhoto  {
    id: number,
    link: string,
    description: string,
}

export interface Props {
    photoGallery: detailsPhoto[];
}

const Main: FC<Props> = ({photoGallery}) => {

    const [allImages, setAllImages] = useState(photoGallery);
  const [imagesToDisplay, setImagesToDisplay] = useState(photoGallery);
  const [index, setIndex] = useState(1);
  const chunkSize = 8;



   // Slice the data
   useEffect(() => {
    setImagesToDisplay(
      allImages.slice(
        chunkSize * index - chunkSize,
        chunkSize * index
      )
    );
  }, [allImages, index]);

  // Go previous index
  const handleSubstractIndex = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  // Go next index
  const handleAddIndex = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

//   const imageZoom = (e: any): void => {
//     // accessible
//     e.target.style.border = "1px black solid"
//  }



    return (
        <>
        <IntroductionSection>
            <IntroductionTitle>My Little Journal - personal journal</IntroductionTitle>
            <IntroductionText>Hi, I'm Julia, French-Australian based in Sydney. I started my first journal when I was 7, then came across scrapbooking in late 2000's and finally begin journaling/collage in 2020. I'm writing about science, history, culture, art, etc.</IntroductionText>
            <PhotoSection>
            {imagesToDisplay.map((photo) => {
                return <Carousel key={photo.id}{...photo}></Carousel>
            })};
            </PhotoSection>
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