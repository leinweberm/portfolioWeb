import styled from "styled-components";
import * as palette from "../../App.stylesVars";

export const ProjectCard = styled.div`
   display: flex;
   width: 80%;
   max-width: 1200px;
   min-height: 300px;
`;
export const ProjectCardItem = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: flex-start;
   padding: 20px;
   background-color: ${palette.whiteOp03};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   :nth-child(1){
      margin-right: 10px;
      border-radius: 0 0 0 20px;
   };
   :nth-child(2){
      margin-left: 10px;
      border-radius: 0 0 20px 0;
   };
`;
export const P = styled.p`
   color: white;
   font-size: 15px;
`;