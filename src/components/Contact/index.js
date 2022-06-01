import React from 'react';
import { ButtonsContainer, ContactButton, ContactContainer, H1, LogoContainer } from './contactStyles';
import ContactForm from './contactForm';
import EmailLogo from '../../assets/pictures/contact/emailLogo.svg';
import MessengerLogo from '../../assets/pictures/contact/messengerLogo.svg';
import WhatsAppLogo from '../../assets/pictures/contact/whatsAppLogo.svg';

export default function Contact() {

    return (
    <ContactContainer>
        <H1>KONTAKT</H1>
        <ButtonsContainer>
            <ContactButton onClick={(e) => {window.open("mailto:leinweber.martin@gmail.com", "_blank")}}>
                <LogoContainer>
                    <img src={EmailLogo} alt="logo email"/>
                </LogoContainer>
                <b style={{marginBottom: "10px"}}>EMAIL</b>
                <p>leinweber.martin@gmail.com</p>
            </ContactButton>
            <ContactButton onClick={(e) => {console.log('click event Email')}}>
            <LogoContainer>
                <img src={MessengerLogo} alt="logo messenger" />
            </LogoContainer>
                <b style={{marginBottom: "10px"}}>MESSENGER</b>
                <p>Martin Leinweber</p>
            </ContactButton>
            <ContactButton onClick={(e) => {window.open("https://wa.me/<+420-420608874763>", "_blank")}}>
                <LogoContainer>
                    <img src={WhatsAppLogo} alt="logo messenger" />
                </LogoContainer>
                <b style={{marginBottom: "10px"}}>WHATSAPP</b>
                <p>+420 608 874 763</p>
            </ContactButton>
        </ButtonsContainer>
        <ContactForm />
    </ContactContainer>
    )
}
