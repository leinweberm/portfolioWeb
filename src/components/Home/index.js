import { useState } from 'react';
import { CvButtonHome, H1home, H2home, PageContainer, Hero } from './homeStyles';
import myCvPdf from '../../assets/files/leinweberCV.pdf'

export default function Home() {
   const [cvDownloaded, setCvDownloaded] = useState(false);


   return (
      <>
      <PageContainer>
         <H1home>Martin Leinweber</H1home>
         <H2home>Designer / Web&nbsp;Dev / Cat&nbsp;Dad</H2home>
         <Hero></Hero>
         <CvButtonHome href={myCvPdf} onClick={() => {
            setCvDownloaded(true);
         }} download='leinweberCV.pdf'>
            {cvDownloaded ? 'CV staženo!' : 'Stáhni CV'}
         </CvButtonHome>
      </PageContainer>
      </>
   );
};
