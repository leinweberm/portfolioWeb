import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import spaceBackground from '../../assets/pictures/spacePozadi.jpg';

export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 100px;
   padding-bottom: 50px;
   min-height: 100vh;
   width: 100%;
   justify-content: start;
   align-items: center;
   background-image: url(${spaceBackground});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
`;
export const H1 = styled.h1`
      color: ${palette.whiteFull};
      font-size: 35px;
      text-align: center;
      @media (max-width: 768px) {
         font-size: 30px;
      }
`;