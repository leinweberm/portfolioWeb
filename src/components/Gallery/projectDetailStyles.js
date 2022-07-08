import styled from "styled-components";
import * as palette from "../../App.stylesVars";

export const ProjectCard = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   max-width: 1200px;
   @media (max-width: 1000px) {
      flex-direction: column;
   }
`;
export const ProjectCardItem = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: flex-start;
   padding: 20px;
   min-width: 350px;
   background-color: ${palette.whiteOp03};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   @media (max-width: 1000px) {
      min-width: 200px;
   }
   :nth-child(1){
      margin-right: 10px;
      border-radius: 0 0 0 20px;
      @media (max-width: 1000px) {
         margin-bottom: 20px;
         border-radius: 0;
      }
   };
   :nth-child(2){
      margin-left: 10px;
      border-radius: 0 0 20px 0;
      @media (max-width: 1000px) {
         margin: 0;
         border-radius: 0 0 20px 20px;
      }
   };
`;
export const P = styled.p`
   color: white;
   font-size: 15px;
`;