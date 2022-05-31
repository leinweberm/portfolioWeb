import React from 'react';
import { FooterBody, FooterContainer, FooterItem, H1, P, B, NewTabLink } from './footerStyles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterBody>
        <FooterItem>
          <H1>Martin Leinweber</H1>
          <P>Gustava Klimenta 706/8</P>
          <P>Havířov - Město</P>
          <P>736 01</P>
        </FooterItem>
        <FooterItem>
          <H1>Kontakty</H1>
          <B>email:</B>
          <P>leinweber.martin@gmail.com</P>
          <B>telefon:</B>
          <P>+420 608 874 763</P>
        </FooterItem>
        <FooterItem>
          <H1>Socials</H1>
          <NewTabLink href='https://github.com/leinweberm' target="_blank">GitHub</NewTabLink>
          <NewTabLink href='https://www.linkedin.com/in/martin-leinweber-5a07a2a6'target="_blank">LinkedIn</NewTabLink>
          <NewTabLink href='https://www.artstation.com/leinweberart' target='_blank'>ArtStation</NewTabLink>
          <NewTabLink href='https://www.instagram.com/leinweberart/' target="_blank">Instagram</NewTabLink>
        </FooterItem>
      </FooterBody>
    </FooterContainer>
  );
};
