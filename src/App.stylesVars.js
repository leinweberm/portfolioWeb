import styled from "styled-components";
//color scheme
export const almostBlack = '#0B0C10';
export const darkGrey = '#1F2833';
export const lightGrey = '#C5C6C7';
export const darkTurquoise = '#45A29E';
export const lightTurquoise = '#66FCF1';
export const glassColor = 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)';

//Glassmorphism
//background: ${palette.glassColor2};
//	-webkit-backdrop-filter: blur(10px);
//	backdrop-filter: blur(10px);

export const H1 = styled.h1`
    color: white;
    font-size: 35px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;