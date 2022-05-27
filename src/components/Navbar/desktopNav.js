import React from 'react';
import { Navi, MenuList, MenuItem, MenuLink, BrandName } from './navbarStyles';

export default function DesktopNav() {
  return (
   <>
      <Navi>
         <BrandName>
            <h1>Leinweber</h1>
         </BrandName>
         <MenuList>
            <MenuItem><MenuLink to="/">Home</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/about">About</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/gallery">Gallery</MenuLink></MenuItem>
            <MenuItem><MenuLink to="/contact">Contact</MenuLink></MenuItem>
         </MenuList>
      </Navi>
   </>
  );
};
