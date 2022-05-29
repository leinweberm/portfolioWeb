import React from 'react';
import { AboutGrid, AboutItem, PageContainer, H1, TechStack, TechStackItem } from './aboutStyles';
import { Email, Phone, } from './aboutText';

export default function About() {
  return (
    <>
      <PageContainer>
        <H1>MARTIN LEINWEBER .aboutMe</H1>
        <AboutGrid>
          <AboutItem />
          <AboutItem>
            <p style={{fontSize: "15px"}}>
              <b>Kontakt:</b><br></br>
              {Email}<br></br>
              {Phone}<br></br>
              <b>Adresa:</b><br></br>
              Gustava Klimenta 706/8<br></br>
              Havířov-Město<br></br>
              736 01
            </p>
            
          </AboutItem>
          <AboutItem>
            <p style={{fontSize: "18px", marginTop: "5px", alignSelf: "center"}}>Tech Stack</p>
            <TechStack>
              <TechStackItem>
                <img src={require('../../assets/pictures/javaScriptLogo.jpg')} alt="logo JavaScript" />
                <p style={{marginTop: "5px"}}>JavaScript</p>
              </TechStackItem>
              <TechStackItem>
              <img src={require('../../assets/pictures/javaScriptLogo.jpg')} alt="logo JavaScript" />
                <p style={{marginTop: "5px"}}>ProstGre SQL</p>
              </TechStackItem>
              <TechStackItem>
              <img src={require('../../assets/pictures/javaScriptLogo.jpg')} alt="logo JavaScript" />
                <p style={{marginTop: "5px"}}>ProstGre SQL</p>
              </TechStackItem>
              <TechStackItem>
              <img src={require('../../assets/pictures/javaScriptLogo.jpg')} alt="logo JavaScript" />
                <p style={{marginTop: "5px"}}>ProstGre SQL</p>
              </TechStackItem>
              <TechStackItem>
              <img src={require('../../assets/pictures/javaScriptLogo.jpg')} alt="logo JavaScript" />
                <p style={{marginTop: "5px"}}>ProstGre SQL</p>
              </TechStackItem>
              <TechStackItem>
              <img src={require('../../assets/pictures/javaScriptLogo.jpg')} alt="logo JavaScript" />
                <p style={{marginTop: "5px"}}>ProstGre SQL</p>
              </TechStackItem>
            </TechStack>
            <p style={{fontSize: "15px"}}>
              <h3 style={{fontSize: "18px", fontWeight: "500", marginTop: "50px"}}>Jmenuji&nbsp;se Martin,<br>
              </br>jsem graphic designer a&nbsp;front-end developer z&nbsp;Havířova.</h3><br>
              </br>Vystudoval jsem Střední Uměleckou Školu v&nbsp;Ostravě, obor grafický design a&nbsp;ilustrace. Po&nbsp;pár letech hledání jsem se&nbsp;rozhodl věnovat se&nbsp;tvorbě webových aplikací, protože jako grafik jsem měl možnost vykoušet si&nbsp;navrhování jejich designu a&nbsp;okamžitě mě tento obor nadchnul. Proto jsem se&nbsp;rozhodl udělat si&nbsp;rekvalifikační kurz, který nabízí centrum celoživotního vzdělávání Vysoké Školy Báňská v&nbsp;Ostravě. Kurz byl rozdělen na&nbsp;dvě části: OOP a&nbsp;tvorba webových aplikací. Kurz trvá 6 měsíců +&nbsp;příprava formou samostudia, ze&nbsp;kterého musí uchazeč úspěšně složit zkoušky, bez toho není na&nbsp;kurz přijat.<br>
              </br>A&nbsp;tak moje cesta započala...
            </p>
          </AboutItem>
        </AboutGrid>
      </PageContainer>
    </>
  );
};
