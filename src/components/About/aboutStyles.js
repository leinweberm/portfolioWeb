import styled from "styled-components";
import * as palette from '../../App.stylesVars';
import Avatar from '../../assets/pictures/profilePicture.jpg';

export const AboutGrid = styled.div`
	display: grid;
	gap: 20px;
	grid-template-columns: 300px calc(auto - 300px);
	grid-template-rows: 300px calc(100% - 300px);
	grid-template-areas:
		'a b'
		'c b';
	width: 80%;
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
	text-align: left;
	padding: 20px;
	&:nth-child(1) {
		grid-area: a;
		aspect-ratio: 1/1;
		justify-content: flex-end;
		padding: 0;
		background-image: url(${Avatar});
		background-size: cover;
		border: 8px solid ${palette.almostBlack};
		@media (max-width: 768px) {
			border: 6px solid ${palette.almostBlack};
		}
	}
	&:nth-child(2) {
		grid-area: c;
		padding: 25px 0;
		color: ${palette.lightGrey};
		background-color: ${palette.almostBlackOp};
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(8px);
		border-radius: 0 0 0px 20px;
		@media (max-width: 768px) {
			border-radius: 0 0 0 0;
		}
	}
	&:nth-child(3) {
		grid-area: b;
		padding: 30px;
		background-color: ${palette.whiteOp01};
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(8px);
		border-radius: 0 0 20px 0;
		@media (max-width: 768px) {
			border-radius: 0 0 20px 20px;
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
	border-top: 1px solid ${palette.whiteOp03};
	border-bottom: 1px solid ${palette.whiteOp03};
`;
export const TechStackItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	width: 50px;
	margin: 20px;
`;
export const CvButton = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 150px;
	font-size: 15px;
	margin: 20px;
	text-decoration: none;
	color: ${palette.whiteFull};
	background-color: rgba(255,255,255,0.1);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(8px);
	border: 1px solid rgba(255,255,255,0.5);
	cursor: pointer;
		&:hover {
			color: white;
			background-color: rgba(255,255,255,0.5);
		}
`;