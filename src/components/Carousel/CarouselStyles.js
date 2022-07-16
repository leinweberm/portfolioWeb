import styled from "styled-components";
import * as palette from "../../App.stylesVars";
import CarouselArrow from '../../assets/pictures/carousel/carouselArrow.svg';

export const CarouselBody = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   object-fit: contain;
   height: 100%;
   width: 100%;
   ${props => {
      if(props.backgroundImage) {
         return `
            background-image: url(${props.backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
         `;
      }
   }}
   @media (max-width: 550px) {
      margin-bottom: 65px;
      justify-content: flex-start;
   }
   ::before {
      content: '';
      position: absolute;
      background-color: green;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      z-index: 1;
      background-color: ${palette.almostBlack};
      opacity: 0.8;
   }
`;
export const ImageContainer = styled.div`
   display: flexbox;
   flex-direction: row;
   justify-content: center;
   height: 100%;
   z-index: 2;
`;
export const Image = styled.img`
   display: flex;
   max-width: 100%;
   max-height: 100%;
   aspect-ratio: 16 / 9;
   object-fit: contain;
`;
export const CarouselButton = styled.button`
   position: absolute;
   display: flex;
   width: 50px;
   aspect-ratio: 1/1;
   background-color: ${palette.almostBlackOp03};
   background-image: url(${CarouselArrow});
   border-radius: 50%;
   border: none;
   z-index: 5;
   ${props => {
      if (props.galleryLength <= 1) {
         return `
         display: none;
         `;
      }
   }}
   @media (min-width: 768px) {
      cursor: pointer;
      :hover {
         background-color: ${palette.almostBlackOp};
      }
   };
   :nth-child(2) {
      right: calc(100% - 70px);
      top: calc(50% - 25px);
      transform: rotate(180deg);
      @media (max-width: 550px) {
         right: calc(50% + 15px);
         top: calc(100% + 13px);
      }
   };
   :nth-child(3) {
      left: calc(100% - 70px);
      top: calc(50% - 25px);
      @media (max-width: 550px) {
         left: calc(50% + 15px);
         top: calc(100% + 13px);
      }
   };
`;