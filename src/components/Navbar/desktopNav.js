import React, { useState } from 'react';
import { Navi, MenuList, MenuItem, MenuLink, BrandName } from './navbarStyles';

export default function DesktopNav() {
   const [navbarColor, setNavbarColor] = useState(true);
   const changeNavbarColor = () => {
      if (window.scrollY <= 70) {
         setNavbarColor(true);
      } else {
         setNavbarColor(false);
      }
   };
   window.addEventListener('scroll', changeNavbarColor);

   return (
      <>
         <Navi backgroundStyle={navbarColor}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%', maxWidth: '1200px' }}>
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
