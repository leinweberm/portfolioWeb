import React from 'react';
import { AboutGrid, AboutContainer, H1 } from './aboutStyles';
import AboutTechStack from './aboutTechStack';

export default function About() {
	return (
		<AboutContainer>
			<H1>MARTIN LEINWEBER</H1>
			<AboutGrid>
				<AboutTechStack />
			</AboutGrid>
		</AboutContainer>
	);
};
