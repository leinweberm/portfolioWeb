import { MobMenuList, MobMenuItem, MobMenuLink, MobNavi, Hamburger, BrandName } from './navbarStyles';

import React, { useState } from 'react'

export default function MobileNav() {
   const [isNavActive, setIsNavActive] = useState(false);
   const [navbarColor, setNavbarColor] = useState(true);

   const changeNavbarColor = () => {
      if (window.scrollY <= 70 && isNavActive === false) {
         setNavbarColor(true);
      } else {
         setNavbarColor(false);
      }
   };
   window.addEventListener('scroll', changeNavbarColor);

   const activeNavbarColor = (isNavActive) => {
      if (isNavActive === true) {
         let thisNavbarColor = true;
         setNavbarColor(thisNavbarColor);
      }
      else if (isNavActive === false) {
         let thisNavbarColor = false;
         setNavbarColor(thisNavbarColor);
      }
   };
   const hangleNavbarChange = () => {
      setIsNavActive(!isNavActive);
      activeNavbarColor(isNavActive);
   };

   return (
      <>
         <MobNavi backgroundStyle={navbarColor}>
            <BrandName>
               <h1>Leinweber</h1>
            </BrandName>
            {isNavActive &&
               <MobMenuList>
                  <MobMenuItem>
                     <MobMenuLink to="/" onClick={hangleNavbarChange}>DOMŮ</MobMenuLink>
                  </MobMenuItem>
                  <MobMenuItem>
                     <MobMenuLink to="/about" onClick={hangleNavbarChange}>INFO</MobMenuLink>
                  </MobMenuItem>
                  <MobMenuItem>
                     <MobMenuLink to="/gallery" onClick={hangleNavbarChange}>PROJEKTY</MobMenuLink>
                  </MobMenuItem>
                  <MobMenuItem>
                     <MobMenuLink to="/contact" onClick={hangleNavbarChange}>KONTAKT</MobMenuLink>
                  </MobMenuItem>
               </MobMenuList >
            }
            <Hamburger onClick={hangleNavbarChange} />
         </MobNavi>
      </>
   );
};
