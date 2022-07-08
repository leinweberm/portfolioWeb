import styled from "styled-components";
import * as palette from '../../App.stylesVars';

export const FilterButtons = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   max-width: 1200px;
   margin-bottom: 20px;
   
   border-radius: 0 0 20px 20px;
`;
export const FilterButton = styled.button`
   display:flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 40px;
   background-color: red;
   font-size: 12px;
   color: white;
   font-weight: 500;
   border: 0;
   background: transparent;
   cursor: pointer;
   ${props => {
      if (props.toggle === true) {
         return `
      background: rgba(255,255,255,0.3);
      `;
      } else {
         return `
      background-color: rgba(255,255,255,0.1);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(8px);
      `;
      }
   }}
   &:hover {
      background-color: ${palette.almostBlackOp03};
   }
   &:nth-child(1) {
      border-radius: 0 0 0 20px;
   }
   &:nth-child(3) {
      border-radius: 0 0 20px 0;
   }
`;
export const FilterButtonActive = styled.button`
   display:flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 40px;
   background-color: red;
   font-size: 12px;
   color: white;
   font-weight: 500;
   border: 0;
   background-color: rgba(0,0,0,0.5);
   cursor: pointer;
   &:hover {
      background-color: rgba(0,0,0,0.5);
   }
   &:nth-child(1) {
      border-radius: 20px 0 0 20px;
   }
   &:nth-child(3) {
      border-radius: 0 20px 20px 0;
   }
`;
export const H1 = styled.h1`
   color: white;
   font-size: 35px;
   margin-bottom: 15px;
   width: 80%;
   max-width: 1200px;
   text-align: center;
   background-color: ${palette.whiteOp03};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   border-radius: 20px 20px 0 0;
   @media (max-width: 768px) {
      font-size: 30px;
   }
`;