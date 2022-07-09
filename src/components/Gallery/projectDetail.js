import React from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer, H1 } from '../../App.stylesVars';
import { ProjectsDatabase } from './projectsData';
import { ProjectCard, ProjectCardItem, P, ExternalLink } from './projectDetailStyles';
import Carousel from '../Carousel';

export default function ProjectDetail() {
   const { id } = useParams();
   const project = ProjectsDatabase[id-1];

   return (
      <PageContainer>
         <H1 style={{padding: '0 15px'}}>{project.title}</H1>
         <ProjectCard>
            <ProjectCardItem>
               <Carousel project={project} />  
            </ProjectCardItem>
            <ProjectCardItem>
               <P>{project.text}</P>
               <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  width: '100%', 
                  alignItems: 'center'}}
               >
                  { project.gitHub && 
                     <ExternalLink onClick={() => {
                        window.open(project.gitHub, "_blank")}}
                     >
                        GitHub
                     </ExternalLink> 
                  }
                  { project.demo && 
                     <ExternalLink onClick={() => {
                        window.open(project.demo, "_blank")}}
                     >
                        Live Demo
                     </ExternalLink> 
                  }
               </div>
            </ProjectCardItem>
         </ProjectCard>
      </PageContainer>
   )
}
