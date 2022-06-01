import { send, sendForm } from 'emailjs-com';
import React from 'react';
import { ButtonsContainer, ContactButton, ContactContainer, H1, LogoContainer } from './contactStyles';
import ContactForm from './contactForm';

export default function Contact() {

    return (
    <ContactContainer>
        <H1>KONTAKT</H1>
        <ButtonsContainer>
            <ContactButton onClick={(e) => {window.open("mailto:leinweber.martin@gmail.com", "_blank")}}>
                <LogoContainer></LogoContainer>
                <b style={{marginBottom: "10px"}}>EMAIL</b>
                <p>leinweber.martin@gmail.com</p>
            </ContactButton>
            <ContactButton onClick={(e) => {console.log('click event Email')}}>
            <LogoContainer></LogoContainer>
                <b style={{marginBottom: "10px"}}>MESSENGER</b>
                <p>Martin Leinweber</p>
            </ContactButton>
            <ContactButton onClick={(e) => {window.open("https://wa.me/<+420-420608874763>", "_blank")}}>
                <LogoContainer></LogoContainer>
                <b style={{marginBottom: "10px"}}>WHATSAPP</b>
                <p>+420 608 874 763</p>
            </ContactButton>
        </ButtonsContainer>
        <ContactForm />
    </ContactContainer>
    )
}
