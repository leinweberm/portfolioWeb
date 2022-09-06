import React from 'react';

import { ButtonsContainer, ContactButton, LogoContainer } from './contactStyles';
import { PageContainer, H1 } from '../../App.stylesVars';
import ContactForm from './contactForm';
import EmailLogo from '../../assets/pictures/contact/emailLogo.svg';
import MessengerLogo from '../../assets/pictures/contact/messengerLogo.svg';
import WhatsAppLogo from '../../assets/pictures/contact/whatsAppLogo.svg';

export default function Contact() {

	return (
		<PageContainer name="contact page">
			<H1 name="">KONTAKT</H1>
			<ButtonsContainer name="contact buttons">
				<ContactButton
					name="email button"
					onClick={(e) => {
						window.open("mailto:leinweber.martin@gmail.com", "_blank")
				}}>
					<LogoContainer name="email logo">
						<img
							src={EmailLogo}
							alt="logo email"
							name="email logo image"
						/>
					</LogoContainer>
					<b
						style={{marginBottom: "10px"}}
						name="email label"
					>
						EMAIL
					</b>
					<p name="email data">
						leinweber.martin@gmail.com
					</p>
				</ContactButton>
				<ContactButton
					name="facebook button"
					onClick={(e) => {
						window.open("https://www.facebook.com/martin.leinweber")
				}}>
					<LogoContainer name="facebook logo">
						<img
							src={MessengerLogo}
							alt="logo messenger"
							name="facebook logo image"
						/>
					</LogoContainer>
						<b
							style={{marginBottom: "10px"}}
							name="facebook label"
						>
							MESSENGER
						</b>
						<p name="facebook data">
							Martin Leinweber
						</p>
				</ContactButton>
				<ContactButton
					name="whatsapp button"
					onClick={(e) => {
						window.open("https://web.whatsapp.com/send?phone=+420-420608874763&text=dobry-den-&app_absent=0", "_blank")
				}}>
					<LogoContainer name="whatsapp logo">
						<img
							src={WhatsAppLogo}
							alt="logo messenger"
							name="whatsapp logo image"
						/>
					</LogoContainer>
					<b
						style={{marginBottom: "10px"}}
						name="whatsapp label"
					>
						WHATSAPP
					</b>
					<p name="whatsapp data">
						+420 608 874 763
					</p>
				</ContactButton>
			</ButtonsContainer>
			<ContactForm />
		</PageContainer>
	)
}
