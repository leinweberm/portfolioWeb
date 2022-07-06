import React from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer, H1 } from '../../App.stylesVars';
import { ProjectsDatabase } from './projectsData';
import { ProjectCard, ProjectCardItem, P } from './projectStyles';
import Carousel from '../Carousel';

export default function ProjectDetail() {
   const { id } = useParams();
   const project = ProjectsDatabase[id-1];

   return (
      <PageContainer>
         <H1>{project.title}</H1>
         <ProjectCard>
            <ProjectCardItem>
               <Carousel project={project} />  
            </ProjectCardItem>
            <ProjectCardItem>
               <P>{project.text}</P>
            </ProjectCardItem>
         </ProjectCard>
      </PageContainer>
   )
}
