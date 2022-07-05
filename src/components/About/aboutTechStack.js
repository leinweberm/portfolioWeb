import React, { useState, useRef } from 'react'
import { AboutDatabase } from './aboutData';
import { AboutItem, CvButton, TechStack, TechStackItem } from './aboutStyles';
import { Email, LongInfo, Phone, ShortInfo } from './aboutText';
import myCvPdf from '../../assets/files/leinweberCV.pdf'


export default function AboutTechStack() {
   // eslint-disable-next-line
   const [skills, setSkills] = useState(AboutDatabase);
   // eslint-disable-next-line
   const [cvDownloaded, setCvDownloaded] = useState(false);
   const cvButtonText = useRef('stáhni CV!');

   return (
      <>
         <AboutItem />
         <AboutItem>
            <b style={{color:'white', fontSize:'15px'}}>Kontakt:</b>
            <p style={{color:'white', fontSize:'15px'}}>
               {Email}<br></br>
               {Phone}<br></br>
            </p>
            <b style={{color:'white', fontSize:'15px', marginTop: '20px'}}>Adresa:</b>
            <p style={{color:'white', fontSize:'15px', marginBottom: '20px'}}>
               Gustava Klimenta 706/8<br></br>
               Havířov-Město<br></br>
               736 01
            </p>
            <CvButton href={myCvPdf} onClick={(event) => {
               cvButtonText.current = 'CV staženo!';
               setCvDownloaded(true);
            }} download='leinweberCV.pdf'>
               {cvButtonText.current}
            </CvButton>
         </AboutItem>
         <AboutItem>
            <p style={{fontSize:'18px', fontWeight:'600', marginTop:'5px', marginBottom: '15px', alignSelf:'center'}}>
               Tech Stack
            </p>
            <TechStack>
               {skills.map((skill) => (
                  <TechStackItem key={skill.id}>
                     <img src={skill.image} alt={skill.name} />
                     <p style={{marginTop:'10px', alignSelf:'center'}}>{skill.name}</p>
                  </TechStackItem>
               ))}
            </TechStack>
            <h3 style={{fontSize:'18px', fontWeight:'600', marginTop:'20px', alignSelf:'center', justifySelf:'center', textAlign: 'center'}}>
               {ShortInfo}
            </h3>
            <p style={{fontSize:'15px', fontWeight:'300', marginTop:'20px'}}>
               {LongInfo}
            </p>
         </AboutItem>
      </>
   )
}
