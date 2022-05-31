import React from 'react';
import { Navi, MenuList, MenuItem, MenuLink, BrandName } from './navbarStyles';

export default function DesktopNav() {
  return (
   <>
      <Navi>
         <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'80%', maxWidth:'1200px'}}>
            <BrandName>
               <h1>Leinweber</h1>
            </BrandName>
            <MenuList>
               <MenuItem><MenuLink to="/">DOMŮ</MenuLink></MenuItem>
               <MenuItem><MenuLink to="/about">INFO</MenuLink></MenuItem>
               <MenuItem><MenuLink to="/gallery">PROJEKTY</MenuLink></MenuItem>
               <MenuItem><MenuLink to="/contact">KONTAKT</MenuLink></MenuItem>
            </MenuList>
         </div>
      </Navi>
   </>
  );
};
