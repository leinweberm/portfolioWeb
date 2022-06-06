import React from 'react';
import { AboutGrid } from './aboutStyles';
import { PageContainer, H1 } from '../../App.stylesVars';
import AboutTechStack from './aboutTechStack';

export default function About() {
	return (
		<PageContainer>
			<H1>MARTIN LEINWEBER</H1>
			<AboutGrid>
				<AboutTechStack />
			</AboutGrid>
		</PageContainer>
	);
};
