import React, { useState } from 'react'
import { MobMenuList, MobMenuItem, MobMenuLink, MobNavi, Hamburger, BrandName } from './navbarStyles';

export default function MobileNav() {
   const [ isNavActive, setIsNavActive ] = useState(false);

   return (
      <>
         <MobNavi>
            <BrandName>
               <h1>Leinweber</h1>
            </BrandName>
            {isNavActive &&
               <MobMenuList>
                  <MobMenuItem><MobMenuLink to="/" onClick={() => {setIsNavActive(!isNavActive);}}>HOME</MobMenuLink></MobMenuItem>
                  <MobMenuItem><MobMenuLink to="/about" onClick={() => {setIsNavActive(!isNavActive);}}>ABOUT</MobMenuLink></MobMenuItem>
                  <MobMenuItem><MobMenuLink to="/gallery" onClick={() => {setIsNavActive(!isNavActive);}}>GALLERY</MobMenuLink></MobMenuItem>
                  <MobMenuItem><MobMenuLink to="/contact" onClick={() => {setIsNavActive(!isNavActive);}}>CONTACT</MobMenuLink></MobMenuItem>
               </MobMenuList >
            }
            <Hamburger onClick={() => {setIsNavActive(!isNavActive);}}/>
         </MobNavi>
      </>
   );
};
