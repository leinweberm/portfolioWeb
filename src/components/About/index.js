import React from 'react';
import { AboutGrid } from './aboutStyles';
import { PageContainer, H1 } from '../../App.stylesVars';
import AboutTechStack from './aboutTechStack';

export default function About() {
	return (
		<PageContainer name="about page">
			<H1 name="about page title">
				MARTIN LEINWEBER
			</H1>
			<AboutGrid
				name="about grid"
				content="skill and tech stack"
			>
				<AboutTechStack name="tech stack" />
			</AboutGrid>
		</PageContainer>
	);
};
