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
   const handleClick = () => {
      handleScroll();
   };
   const handleScroll = () => {
      window.scrollTo(0, 0);
   };

   return (
      <>
         <Navi backgroundStyle={navbarColor}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%', maxWidth: '1200px' }}>
               <BrandName>
                  <h1>Leinweber</h1>
               </BrandName>
               <MenuList>
                  <MenuItem><MenuLink to="/" onClick={handleClick}>DOMŮ</MenuLink></MenuItem>
                  <MenuItem><MenuLink to="/about" onClick={handleClick}>INFO</MenuLink></MenuItem>
                  <MenuItem><MenuLink to="/gallery" onClick={handleClick}>PROJEKTY</MenuLink></MenuItem>
                  <MenuItem><MenuLink to="/contact" onClick={handleClick}>KONTAKT</MenuLink></MenuItem>
               </MenuList>
            </div>
         </Navi>
      </>
   );
};
