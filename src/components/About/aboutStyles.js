import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import Avatar from '../../assets/pictures/profilePicture.jpg';

export const PageContainer = styled.div`
   display: flex;
   margin-top: 70px;
   padding: 40px 20px;
   flex-direction: column;
   align-items: center;
   height: auto;
   width: 100%;
   background-color: ${palette.darkTurquoise};
   text-align: center;
`;
export const AboutGrid = styled.div`
    top: 0;
    display: grid;
    grid-template-columns: auto 60%;
    grid-template-rows: auto auto;
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
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 50px;
    border: 1px solid ${palette.darkTurquoise};
    border-radius: 0 0 30px 0;
    @media (max-width: 768px) {
            border-radius: 0 0 30px 30px;
        }
`;
export const TechStackItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 100px;
    margin: 10px;
    justify-content: space-between;
    background-color: red;
`;

export const H1 = styled.h1`
    color: white;
    font-size: 35px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
