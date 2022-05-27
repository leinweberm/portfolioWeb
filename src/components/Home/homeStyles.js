import styled from "styled-components";
import * as palette from '../../App.stylesVars';

export const PageContainer = styled.div`
   display: flex;
   padding-top: 70px;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   width: 100%;
   background-color: ${palette.darkTurquoise};
`;