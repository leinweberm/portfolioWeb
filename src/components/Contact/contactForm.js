import React, { useState } from 'react'
import { FormContainer, H2, InputLine, SendButton, InputArea } from './contactStyles';
import { send} from 'emailjs-com';

export default function ContactForm() {
    const [toSend, setToSend] = useState({
        to_name: 'Martin Leinweber',
        from_name: '',
        emailFrom: '',
        message: '',
      });

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

      const onSubmit = (e) => {
        e.preventDefault();
        send(
            //service ID
            'service_tw1qnxw',
            //template ID
            'template_u8bv70o',
            toSend,
            //user ID
            'QQNt5L2bF3-h_QisH'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      }

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
                onClick={onSubmit} >
                    ODESLAT
            </SendButton>
        </FormContainer>
    )
}
