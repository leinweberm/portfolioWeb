import styled from "styled-components";
import * as palette from '../../App.stylesVars';

export const GalleryBody = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   width: 80%;
   max-width: 1200px;
   min-height: 100px;
   justify-content: flex-start;
   padding: 25px;
   margin: auto;
   background-color: ${palette.darkGrey};
   justify-self: flex-start;
`;
export const GalleryItem = styled.div`
   background-color: rgba(255,255,255,0.1);
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   border-radius: 20px;
   display: grid;
   width: 200px;
   margin: 15px;
   grid-template-columns: 200px;
   grid-template-rows: 25px 150px 25px 25px 50px;
   grid-template-areas:
      'type'
      'image'
      'links'
      'title'
      'description';
   -webkit-box-shadow: 1px 15px 15px 0px rgba(0,0,0,0.35); 
   box-shadow: 1px 15px 15px 0px rgba(0,0,0,0.35);
`;
export const ItemType = styled.div`
   grid-area: type;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   font-size: 15px;
   font-weight: 500;
   padding: 0 10px;
   justify-content: center;
   align-items: center;
   background-color: rgba(255,255,255,0.1);
   border-radius: 20px 20px 0 0;
`;
export const ItemImage = styled.div`
   grid-area: image;
   display: flex;
   width: 80%;
   aspect-ratio: 200/150;
   background-color: white;
   background-size: cover;
   background-position: center;
   justify-self: center;
   align-self: center;
`;
export const ItemTitle = styled.div`
   grid-area: title;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-items: center;
   padding: 0 10px;
   font-size: 15px;
   font-weight: 600;
   text-align: center;
`;
export const ItemDescription = styled.div`
   grid-area: description;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   padding: 0 10px 10px 10px;
   font-size: 14px;
   justify-content: flex-start;
   align-items: center;
   text-align: center;
`;
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
export const LinkGrid = styled.div`
   display: flex;
   align-self: center;
   justify-self: center;
   flex-direction: row;
   justify-content: center;
   align-items: flex-start;
   height: 25px;
   width: 160px;
   margin-bottom: 5px;
`;
export const LinkButton = styled.button`
   display: flex;
   width: 75px;
   height: 19px;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   font-size: 10px;
   font-weight: 400;
   color: white;
   background-color: rgba(255,255,255,0.1);
   border: 1px solid rgba(255,255,255,0.3);
   cursor: pointer;
   &:hover {
      background-color: rgba(255,255,255,0.5);
   }
   &:nth-child(2){
      margin-left: 10px;
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