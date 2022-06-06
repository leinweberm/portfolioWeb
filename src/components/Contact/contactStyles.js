import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import spaceBackground from '../../assets/pictures/spacePozadi.jpg';

export const H1 = styled.h1`
color: white;
font-size: 35px;
margin-bottom: 15px;
width: 80%;
max-width: 1200px;
text-align: center;
background-color: ${palette.whiteOp03};
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(8px);
border-radius: 20px 20px 0 0;
@media (max-width: 768px) {
   font-size: 30px;
}
`;
export const H2 = styled(H1)`
   font-size: 30px;
   width: 100%;
   margin: 0;
   padding: 5px;
   border-bottom: 1px solid ${palette.whiteOp03};
`;
export const ButtonsContainer = styled.div`
   display: grid;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: flex-start;
   width: 80%;
   max-width: 1200px;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr;
   grid-template-areas:
      'email msg what';
   gap: 15px;
   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
         'email'
         'msg'
         'what';
   }
`;
export const ContactButton = styled.button`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   align-items: center;
   width: 100%;
   height: 100%;
   background-color: ${palette.whiteOp01};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   border: 0;
   font-size: 18px;
   color: white;
   padding: 30px 15px;
   text-align: center;
   cursor: pointer;
   &:hover{
      background-color: ${palette.whiteOp03};
   }
   &:nth-child(1){
      grid-area: email;
      border-radius: 0 0 0 20px;
      background-image: url();
      @media (max-width: 768px) {
         border-radius: 0; 
      }
   }
   &:nth-child(2){
      grid-area: msg;
      @media (max-width: 768px) {
         border-radius: 0; 
      }
   }
   &:nth-child(3){
      grid-area: what;
      border-radius: 0 0 20px 0;
      @media (max-width: 768px) {
         border-radius: 0 0 20px 20px;
      }
   }
`;
export const LogoContainer = styled.div`
   display: flex;
   height: 50px;
   width: 50px;
   margin-bottom: 15px;
`;
export const FormContainer = styled.form`
   position: relative;
   display: grid;
   width: 80%; 
   max-width: 1200px;
   margin: 30px 0;
   padding-bottom: 30px;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr 1fr auto auto;
   gap: 20px;
   grid-template-areas:
      'title'
      'name'
      'emailFrom'
      'textArea'
      'sendButton';
   background-color: ${palette.whiteOp01};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   padding: 0px;
   border-radius: 20px;
`;
export const InputLine = styled.input`
   padding: 10px 20px;
   width: 100%;
   max-width: 600px;
   background-color: ${palette.almostBlackOp};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   align-self: center;
   justify-self: center;
   color: white;
   font-size: 14px;
   border-style: 1px solid ${palette.whiteOp03};
   border-radius: 20px;
   :-ms-input-placeholder {
   color: ${palette.almostBlackOp03};
   }
   @media (max-width: 768px) {
      border-radius: 0;
   }
`;
export const InputArea = styled.textarea`
   padding: 10px 20px;
   width: 100%;
   max-width: 600px;
   background-color: ${palette.almostBlackOp};
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(8px);
   align-self: center;
   justify-self: center;
   color: white;
   font-size: 14px;
   border-style: 1px solid ${palette.whiteOp03};
   border-radius: 20px 0 0 20px;
   overflow-y: auto;
   :-ms-input-placeholder {
      color: ${palette.almostBlackOp03};
   }
   @media (max-width: 768px) {
      border-radius: 0;
   } 
`;
export const SendButton = styled.div`
   display: flex;
   align-self: center;
   justify-self: center;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 40px;
   width: 120px;
   color: white;
   font-size: 18px;
   margin-bottom: 30px;
   background-color: ${palette.whiteOp01};
   border-radius: 20px;
   transition: 0.5s ease-in-out;
   cursor: pointer;
   &:hover {
      transition: 0.5s ease-in-out;
      border-radius: 0;
      background-color: ${palette.whiteOp03};
      border: 1px solid white;
   }
`;
export const AlertWindow = styled.div`
   position: absolute;
   align-self: center;
   justify-self: center;
   flex-direction: column;
   align-items: center;
   width: 200px;
   padding: 20px;
   background-color: rgb(169, 169, 169);
   border: 1px solid ${palette.whiteFull};
   border-radius: 20px;
   ${props => {
      if (props.status === true) {
         return `display: flex;`;
      } else {
         return `display: none;`;
      }
   }}
`;