import React, { useState } from 'react'
import { MobMenuList, MobMenuItem, MobMenuLink, MobNavi, Hamburger, BrandName } from './navbarStyles';

export default function MobileNav() {
   const [isNavActive, setIsNavActive] = useState(false);
   const [navbarColor, setNavbarColor] = useState(true);

   const changeNavbarColor = () => {
      if (window.scrollY <= 70) {
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

   return (
      <>
         <MobNavi backgroundStyle={navbarColor}>
            <BrandName>
               <h1>Leinweber</h1>
            </BrandName>
            {isNavActive &&
               <MobMenuList>
                  <MobMenuItem><MobMenuLink to="/" onClick={() => { setIsNavActive(!isNavActive); activeNavbarColor(isNavActive); }}>HOME</MobMenuLink></MobMenuItem>
                  <MobMenuItem><MobMenuLink to="/about" onClick={() => { setIsNavActive(!isNavActive); activeNavbarColor(isNavActive); }}>ABOUT</MobMenuLink></MobMenuItem>
                  <MobMenuItem><MobMenuLink to="/gallery" onClick={() => { setIsNavActive(!isNavActive); activeNavbarColor(isNavActive); }}>PROJECTS</MobMenuLink></MobMenuItem>
                  <MobMenuItem><MobMenuLink to="/contact" onClick={() => { setIsNavActive(!isNavActive); activeNavbarColor(isNavActive); }}>CONTACT</MobMenuLink></MobMenuItem>
               </MobMenuList >
            }
            <Hamburger onClick={() => {
               setIsNavActive(!isNavActive);
               activeNavbarColor(isNavActive);
            }} />
         </MobNavi>
      </>
   );
};
