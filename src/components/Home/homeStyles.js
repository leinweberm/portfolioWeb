import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import spaceBackground from '../../assets/pictures/spacePozadi.jpg';
import { CvButton } from "../About/aboutStyles";

export const PageContainer = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   padding-top: 100px;
   padding-bottom: 50px;
   min-height: 100vh;
   width: 100%;
   //justify-content: start;
   align-items: center;
   background-image: url(${spaceBackground});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
`;
export const H1home = styled.h1`
      color: ${palette.whiteFull};
      font-size: 35px;
      text-align: center;
      max-width: 80%;
      z-index: 8;
      @media (max-width: 768px) {
         font-size: 25px;
      }
`;
export const H2home = styled(H1home)`
   font-size: 25px;
   @media (max-width: 768px) {
         font-size: 18px;
      }
`;
export const CvButtonHome = styled(CvButton)`
   position: absolute;
   top: 85%;
   margin-top: 20px;
   font-size: 25px;
   height: 50px;
   width: 200px;
   border: 1px solid ${palette.whiteOp03};
   border-radius: 20px;
   transition: 0.7s ease-in-out;
   z-index: 8;
   cursor: pointer;
   &:hover{
      transition: 0.7s ease-in-out;
      border-radius: 0;
   }
`;