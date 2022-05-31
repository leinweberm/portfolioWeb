import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import { Link } from "react-router-dom";
import { RiMenuFill } from 'react-icons/ri';

//DESKTOP VERSION
export const Navi = styled.nav`
   display: flex;
   height: 70px;
   width: 100%;
   margin: auto;
   position: fixed;
   z-index: 10;
   justify-content: space-evenly;
   align-items: center;
   background-color: ${palette.almostBlack};

   @media (max-width: 500px) {
      display: none;
   }
`;
export const MenuList = styled.ul`
   list-style: none;
   display: flex;
   width: 80%;
   max-width: 1000px;
   justify-content: flex-end;
   align-items: center;
`;
export const MenuItem = styled.li`
   display: inline-block;
   margin-left: 20px;
`;
export const MenuLink = styled(Link)`
   text-decoration: none;
   color: ${palette.lightGrey};
   font-size: 16px;

   &:hover {
      color: white;
   }
   &::after {
      color: white;
      border-bottom: 1px solid white;
   }
`;
export const BrandName = styled.div`
   font-size: 14px;

   @media (max-width: 500px) {
      justify-self: flex-start;
      margin-left: 20px;
   }
`;
//END OF DESKTOP VERSION

//MOBILE VERSION
export const MobNavi = styled.nav`
   height: 70px;
   width: 100%;
   margin: auto;
   position: fixed;
   z-index: 10;
   justify-content: space-between;
   align-items: center;
   background-color: ${palette.almostBlack};
   display: none;

   @media (max-width: 500px) {
      display: flex;
      font-size: 18px;
   }
`;
export const Hamburger = styled(RiMenuFill)`
   height: 50px;
   width: 50px;
   color: ${palette.lightGrey};
   margin-right: 20px;
   cursor: pointer;
`;
export const MobMenuList = styled.ul`
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   top: 70px;
   height: 400px;
   width: 100%;
   background-color: ${palette.almostBlack};
   z-index: -1;
`;
export const MobMenuItem = styled.li`
   display: inline-block;
`;
export const MobMenuLink = styled(Link)`
   text-decoration: none;
   color: white;
   font-size: 20px;
`;
//END OF MOBILE VERSION