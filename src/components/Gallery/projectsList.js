import React from 'react';
import { GalleryItem, ItemDescription, ItemImage, ItemTitle, ItemType, LinkButton, LinkGrid } from './galleryStyles';

export default function PokusList({ projects, filter }) {

  return (
      <div className='GalleryBody' style={{width: '90%',maxWidth: '1200px' , minHeight: '100px', justifyContent: 'center', alignItems: 'flex-start', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
         {projects.map((project) =>(
            <GalleryItem key={project.id}>
               <ItemType>{ project.type }</ItemType>
               <ItemImage><img src={project.image} alt={project.description}>
                  </img>
               </ItemImage>
               <LinkGrid>
                  { project.gitHub && <LinkButton onClick={() => {window.open(project.gitHub, "_blank")}}>GitHub</LinkButton>}
                  { project.demo && <LinkButton onClick={() => {window.open(project.demo, "_blank")}}>Ukázka</LinkButton>}
               </LinkGrid>
               <ItemTitle>{ project.title }</ItemTitle>
               <ItemDescription>{ project.description }</ItemDescription>
            </GalleryItem>
         ))}
      </div>
  );
};