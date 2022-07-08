import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import { Link } from "react-router-dom";

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
export const LinkButton = styled(Link)`
   display: flex;
   width: 100%;
   height: 19px;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   font-size: 12px;
   font-weight: 400;
   color: white;
   background-color: rgba(255,255,255,0.1);
   border: 1px solid rgba(255,255,255,0.3);
   cursor: pointer;
   &:hover {
      background-color: rgba(255,255,255,0.5);
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
export const GitButton = styled.button`
   display: flex;
   width: 75px;
   height: 19px;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   font-size: 12px;
   font-weight: 400;
   color: white;
   background-color: rgba(255,255,255,0.1);
   border: 1px solid rgba(255,255,255,0.3);
   cursor: pointer;
   &:hover {
      background-color: rgba(255,255,255,0.5);
   }
`;