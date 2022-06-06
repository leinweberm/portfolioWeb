import styled from "styled-components";
import * as palette from '../../App.stylesVars';

export const FooterContainer = styled.div`
   position: relative;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   background-color: ${palette.almostBlack};
`;
export const FooterBody = styled.div`
   display: grid;
   gap: 20px;
   width: 80%;
   max-width: 1200px;
   padding: 20px 0;
   grid-template-rows: 1fr;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-areas:
      "a b c";
   @media (max-width: 500px) {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
         "a"
         "b"
         "c";
   }
`;
export const FooterItem = styled.div`
   display: flex;
   flex-direction: column;
   color: ${palette.almostBlack};
   text-align: left;
   justify-content: center;
   &:nth-child(1) {
      text-align: left;
      grid-area: a;
      @media (max-width: 500px) {
         text-align: center;
         border-bottom: 1px solid ${palette.whiteFull};
      }
   }
   &:nth-child(2) {
      text-align: center;
      grid-area: b;
      @media (max-width: 500px) {
         text-align: center;
         border-bottom: 1px solid ${palette.whiteFull};
      }
   }
   &:nth-child(3) {
      text-align: right;
      grid-area: c;
      @media (max-width: 500px) {
         text-align: center;
      }
   }
`;
export const H1 = styled.h1`
   color: ${palette.whiteFull};
   font-size: 15px;
`;
export const B = styled.b`
   color: ${palette.whiteFull};
   font-size: 13px;
`;
export const P = styled.p`
   color: ${palette.whiteFull};
   font-size: 13px;
`;
export const NewTabLink = styled.a`
   color: ${palette.whiteFull};
   font-size: 13px;
   text-decoration: underline;
`;