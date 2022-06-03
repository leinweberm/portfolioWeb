import React, { useState, useRef } from 'react'
import { FormContainer, H2, InputLine, SendButton, InputArea, AlertWindow } from './contactStyles';
import { send} from 'emailjs-com';

export default function ContactForm() {
   const [toSend, setToSend] = useState({
      to_name: 'Martin Leinweber',
      from_name: '',
      emailFrom: '',
      message: '',
   });
   const [sendStatus, setSendStatus] = useState(false);
   const statusTitle = useRef('Email odeslán!');
   const statusName = useRef('');
   const statusEmail = useRef('');
   const statusMessage = useRef('');
   const statusButton = useRef('OK');

   const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
   };

   const ValidateEmail = (email) => {
      let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailCheck.test(email);
   };

   const onSubmit = (e) => {
      const isEmail = ValidateEmail(toSend.emailFrom);
      if(isEmail){
         const isNotEmpty = () => {
            if(toSend.from_name && toSend.message){
               send(
                  'service_tw1qnxw',
                  'template_u8bv70o',
                  toSend,
                  'QQNt5L2bF3-h_QisH'
               )
               .then((response) => {
                  console.log('SUCCESS!', response.status, response.text);
               })
               .catch((err) => {
                  console.log('FAILED...', err);
               });
            } else {
               if(toSend.from_name === ''){
                  statusName.current = 'prosím vyplňte jméno';
               }
               if(toSend.message === ''){
                  statusMessage.current = 'prosím vyplňte zprávu'
               }
               statusTitle.current = 'Odeslání selhalo!';
               statusButton.current = 'OPRAVIT';
            }
         }
         isNotEmpty();
      } else {
         statusEmail.current = 'neplatný formát emailu';
         statusTitle.current = 'Odeslání selhalo!';
         statusButton.current = 'OPRAVIT';
      }
      setSendStatus(!sendStatus);
   };  

   return (
      <FormContainer>
         <H2 style={{gridArea: 'title'}}>FORMULÁŘ</H2>
         <InputLine 
            style={{gridArea: 'name'}} 
            type='text' 
            name='from_name' 
            placeholder='Jméno' 
            value={toSend.from_name}
            onChange={handleChange}>
			</InputLine>
			<InputLine 
				style={{gridArea: 'emailFrom'}} 
				type='text' 
				name='emailFrom' 
				placeholder='Váš email' 
				value={toSend.emailFrom}
				onChange={handleChange}>
			</InputLine>
			<InputArea 
				style={{gridArea: 'textArea'}} 
				type='textarea' 
				name='message' 
				placeholder='Dejte mi vědět, co byste rádi' 
				value={toSend.message}
				onChange={handleChange} 
				rows="5" >
			</InputArea>
			<SendButton
				style={{gridArea: 'sendButton'}} 
				onClick={() => {
					onSubmit();
					console.log(sendStatus);}} >
						ODESLAT
			</SendButton>
				<AlertWindow status={sendStatus}>
					<b style={{fontSize: "16px"}}>{statusTitle.current}</b>
					<div style={{textAlign: "center"}}>
						{statusName.current && <p>{statusName.current}</p>}
						{statusEmail.current && <p>{statusEmail.current}</p>}
						{statusMessage.current && <p>{statusMessage.current}</p>}
					</div>
					<SendButton
						style={{border: "1px solid white", marginTop: '20px', marginBottom: '0px'}} 
						onClick={() => {
								setSendStatus(!sendStatus);
								statusTitle.current = 'Email odeslán!';
								statusName.current = '';
								statusEmail.current = '';
								statusMessage.current = '';
								statusButton.current = 'OK';
						}}>
								{statusButton.current}
					</SendButton>
				</AlertWindow>
		</FormContainer>
	)
}
