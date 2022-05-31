import React from 'react';
import { AboutGrid, PageContainer, H1 } from './aboutStyles';
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
