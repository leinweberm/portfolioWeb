import styled from "styled-components";
import landingPageBackgroundDark2 from '../src/assets/pictures/landingPage/landingPageBackgroundDark2.jpg';
import purpleNebula6 from '../src/assets/pictures/landingPage/purpleNebula6.jpg';

//COLOR SCHEME
export const almostBlack = 'rgba(10,10,10,1)';
export const almostBlackOp01 = 'rgba(10,10,10,0.1)';
export const almostBlackOp03 = 'rgba(10,10,10,0.3)';
export const almostBlackOp = 'rgba(10,10,10,0.5)';
export const darkGrey = '#4C0D7D';
export const lightGrey = '#5ED3DC';
export const darkTurquoise = '#D731A7';
export const lightTurquoise = '#F08FEF';
export const whiteFull = 'rgb(255,255,255)';
export const whiteOp01 = 'rgba(255,255,255,0.1)';
export const whiteOp03 = 'rgba(255,255,255,0.3)';
export const whiteOp = 'rgba(255,255,255,0.5)';


export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 100px;
   padding-bottom: 50px;
   min-height: 100vh;
   width: 100%;
   justify-content: start;
   align-items: center;
   background-image: url(${landingPageBackgroundDark2});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   @media (max-width: 768px) {
      background-image: url(${purpleNebula6});
      background-position: top;
      background-repeat: repeat-y;
      background-size: contain;
   }
`;
export const H1 = styled.h1`
   color: white;
   font-size: 35px;
   margin-bottom: 15px;
   width: 80%;
   max-width: 1200px;
   text-align: center;
   background-color: ${whiteOp03};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   border-radius: 20px 20px 0 0;
   @media (max-width: 768px) {
      font-size: 30px;
   }
`;