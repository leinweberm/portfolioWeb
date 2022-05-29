import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import Avatar from '../../assets/pictures/profilePicture.jpg';

export const PageContainer = styled.div`
   display: flex;
   margin-top: 70px;
   padding: 40px 20px;
   flex-direction: column;
   align-items: center;
   width: 100%;
   background-color: ${palette.darkTurquoise};
   text-align: center;
`;
export const AboutGrid = styled.div`
    top: 0;
    display: grid;
    grid-template-columns: 300px calc(100% - 300px);
    grid-template-rows: 300px calc(100% - 300px);
    grid-template-areas:
        'a b'
        'c b';
    gap: 20px;
    margin: auto;
    margin-bottom: 30px;
    width: 90%;
    max-width: 1200px;
    @media (max-width: 768px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;
        grid-template-areas: 
            'a'
            'c'
            'b'; 
    }
`;
export const AboutItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    &:nth-child(1) {
        grid-area: a;
        aspect-ratio: 1/1;
        border: 8px solid ${palette.almostBlack};
        border-radius: 50px 0 0 0;
        background-image: url(${Avatar});
        background-size: cover;
        justify-content: flex-end;
        padding: 0;
        @media (max-width: 768px) {
            border: 6px solid ${palette.almostBlack};
            border-radius: 50px 50px 0 0;
        }
    }
    &:nth-child(2) {
        grid-area: c;
        background-color: ${palette.almostBlack};
        color: ${palette.lightGrey};
        border-radius: 0 0 0px 50px;
        padding: 25px 0;
        text-align: left;
        @media (max-width: 768px) {
            border-radius: 0 0 0 0;
        }
    }
    &:nth-child(3) {
        grid-area: b;
        background-color: ${palette.darkGrey};
        border-radius: 0 50px 50px 0;
        text-align: left;
        padding: 30px;
        @media (max-width: 768px) {
            border-radius: 0 0 50px 50px;
        }
    }
`;
export const TechStack = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`;
export const TechStackItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
    margin: 20px;
    justify-content: center;
    text-align: center;
`;
export const CvButton = styled.button`

`;

export const H1 = styled.h1`
    color: white;
    font-size: 35px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
