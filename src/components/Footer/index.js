import React from 'react';
import { FooterBody, FooterContainer, FooterItem, H1, P, B, NewTabLink } from './footerStyles';

export default function Footer() {
	return (
		<FooterContainer name="footer container">
			<FooterBody name="footer body">
				<FooterItem name="footer adress">
					<H1 name="name">Martin Leinweber</H1>
					<P name="adress street">Gustava Klimenta 706/8</P>
					<P name="adress city">Havířov - Město</P>
					<P name="adress psc">736 01</P>
				</FooterItem>
				<FooterItem name="footer contact">
					<H1 name="contact">Kontakty</H1>
					<B name="contact email label">email:</B>
					<P name="contact email">leinweber.martin@gmail.com</P>
					<B name="contact telefon">telefon:</B>
					<P name="contact number">+420 608 874 763</P>
				</FooterItem>
				<FooterItem name="footer socials">
					<H1 name="socials">Socials</H1>
					<NewTabLink
						href='https://github.com/leinweberm'
						target="_blank"
						name="github"
					>
						GitHub
					</NewTabLink>
					<NewTabLink
						href='https://www.linkedin.com/in/martin-leinweber-5a07a2a6'
						target="_blank"
						name="linkedin"
					>
						LinkedIn
					</NewTabLink>
					<NewTabLink
						href='https://www.artstation.com/leinweberart'
						target='_blank'
						name="artstation"
					>
						ArtStation
					</NewTabLink>
					<NewTabLink
						href='https://www.instagram.com/leinweberart/'
						target="_blank"
						name="instagram"
					>
						Instagram
					</NewTabLink>
				</FooterItem>
			</FooterBody>
		</FooterContainer>
	);
};
