import styled from "styled-components";
import * as palette from "../../App.stylesVars";
import CarouselArrow from '../../assets/pictures/carousel/carouselArrow.svg';

export const CarouselBody = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   aspect-ratio: 19 / 9;
   object-fit: contain;
   width: 100%;
   background-color: ${palette.whiteOp03};
   @media (max-width: 550px) {
      margin-bottom: 65px;
   }
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