import styled from "styled-components";
import * as palette from "../../App.stylesVars";

export const ProjectCard = styled.div`
   display: flex;
   flex-direction: column;
   width: 80%;
   max-width: 1200px;
`;
export const ProjectCardItem = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: flex-start;
   padding: 20px;
   min-width: 350px;
   background-color: ${palette.whiteOp01};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   @media (max-width: 1000px) {
      min-width: 200px;
   }
   :nth-child(1){
      border-radius: 0;
      margin-bottom: 20px;
      aspect-ratio: 16 / 9;
   };
   :nth-child(2){
      flex-direction: column;
      align-items: center;
      border-radius: 0 0 20px 20px;
      white-space: pre-wrap;
   };
`;
export const P = styled.p`
   color: white;
   font-size: 15px;
   margin-bottom: 10px;
   white-space: pre-wrap;
`;
export const ExternalLink = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 30px;
   width: 100%;
   margin: 10px 20px 10px 20px;
   font-size: 15px;
   color: ${palette.whiteFull};
   background-color: ${palette.whiteOp01};
   border: 1px solid ${palette.whiteOp};
   cursor: pointer;
   @media (min-width: 1000px) {
      :hover {
         background-color: ${palette.whiteOp03};
      }
   }
`;
export const LinkContainer = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   justify-self: flex-end;
   align-self: center;
`;