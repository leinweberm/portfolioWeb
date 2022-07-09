import React from 'react';
import { GalleryItem, ItemDescription, ItemImage, ItemTitle, ItemType, LinkButton, LinkGrid } from './projectsListStyles';

export default function PokusList({ projects }) {

  return (
      <div className='GalleryBody' style={{width: '90%',maxWidth: '1200px' , minHeight: '100px', justifyContent: 'center', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
         {projects.map((project) =>(
            <GalleryItem key={project.id}>
               <ItemType>{ project.type }</ItemType>
               <ItemImage><img src={project.preview} alt={project.description}>
                  </img>
               </ItemImage>
               <LinkGrid>
                  <LinkButton to={`/gallery/project/${project.id}`}>Zobrazit detail</LinkButton>
               </LinkGrid>
               <ItemTitle>{ project.title }</ItemTitle>
               <ItemDescription>{ project.description }</ItemDescription>
            </GalleryItem>
         ))}
      </div>
  );
};