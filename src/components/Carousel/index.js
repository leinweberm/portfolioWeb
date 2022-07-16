import React, { useEffect, useRef, useState } from 'react';

import { CarouselBody, CarouselButton, Image, ImageContainer } from './CarouselStyles';

export default function Carousel({project}) {
   const galleryLength = project.image.length;
   const index = useRef(0);
   const [activeIndex, setActiveIndex] = useState(0);
   const [projectImage, setProjectImage] = useState(project.image[0]);

   useEffect(() => {
      let nextImage = project.image[activeIndex];
      setProjectImage(nextImage);
   }, [activeIndex])

   const handleClick = (step) => {
      if (step === "prev" && index.current > 0) {
         index.current--;
      }
      else if (step === "prev" && index.current === 0) {
         index.current = (galleryLength-1);
      }
      else if (step === "next" && index.current < (galleryLength-1)) {
         index.current++;
      }
      else if (step === "next" && index.current === (galleryLength-1)) {
         index.current = 0;
      }
      setActiveIndex(index.current);
   }

   return (
      <CarouselBody backgroundImage={projectImage}>
         <ImageContainer>
            <Image src={projectImage} alt={project.description} />
         </ImageContainer>
         <CarouselButton galleryLength={galleryLength} onClick={() => {handleClick("prev")}}/>
         <CarouselButton galleryLength={galleryLength} onClick={() => {handleClick("next")}}/>
      </CarouselBody>
   )
}
