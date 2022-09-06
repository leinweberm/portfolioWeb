import { useState } from 'react';
import { CvButtonHome, H1home, H2home, PageContainer, Hero } from './homeStyles';
import myCvPdf from '../../assets/files/leinweberCV.pdf'

export default function Home() {
	const [cvDownloaded, setCvDownloaded] = useState(false);


	return (
		<>
			<PageContainer name="home page">
				<H1home name="name">Martin Leinweber</H1home>
				<H2home name="ocupation">Designer / Web&nbsp;Dev / Cat&nbsp;Dad</H2home>
				<Hero name="banner"></Hero>
				<CvButtonHome
					name="download button"
					href={myCvPdf}
					onClick={() => {setCvDownloaded(true);}}
					download='leinweberCV.pdf'
				>
					{cvDownloaded ? 'CV staženo!' : 'Stáhni CV'}
				</CvButtonHome>
			</PageContainer>
		</>
	);
};
