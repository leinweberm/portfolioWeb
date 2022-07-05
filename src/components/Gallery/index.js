import React, { useState, useReducer, useRef } from 'react';
import { FilterButton, FilterButtons, } from './galleryStyles';
import { PageContainer, H1 } from '../../App.stylesVars';
import ProjectsList from './projectsList';
import { ProjectsDatabase } from './galleryData';

const initialFilter = { filter: 'coding + design' }
function setFilter(filter, action) {
   switch (action.type) {
      case 'coding':
         return { filter: 'coding' };
      case 'codingDesign':
         return { filter: 'coding + design' };
      case 'design':
         return { filter: 'design' };
   }
};

export default function Gallery() {
   const [projects, setProjects] = useState(ProjectsDatabase);
   const [filter, dispatch] = useReducer(setFilter, initialFilter);
   const codeToggle = useRef(false);
   const allToggle = useRef(true);
   const designToggle = useRef(false);

   return (
      <PageContainer>
         <H1>PROJEKTY</H1>
         <FilterButtons>
            <FilterButton toggle={codeToggle.current} onClick={function (event) {
               dispatch({ type: 'coding' });
               codeToggle.current = true;
               allToggle.current = false;
               designToggle.current = false;
            }}>
               CODING
            </FilterButton>
            <FilterButton toggle={allToggle.current} onClick={function (event) {
               dispatch({ type: 'codingDesign' });
               codeToggle.current = false;
               allToggle.current = true;
               designToggle.current = false;
            }}>
               VŠE
            </FilterButton>
            <FilterButton toggle={designToggle.current} onClick={function (event) {
               dispatch({ type: 'design' });
               codeToggle.current = false;
               allToggle.current = false;
               designToggle.current = true;
            }}>
               DESIGN
            </FilterButton>
         </FilterButtons>
         <ProjectsList projects={
            projects.filter((project) => {
               if (filter.filter === 'coding') {
                  return (
                     project.type === filter.filter
                     || project.type === 'coding + design')
               }
               else if (filter.filter === 'coding + design') {
                  return (
                     project.type === 'coding'
                     || project.type === 'coding + design'
                     || project.type === 'design')
               }
               else if (filter.filter === 'design') {
                  return (
                     project.type === 'coding + design'
                     || project.type === 'design')
               }
            }
            )}
            filter={filter.filter} />
      </PageContainer>
   );
};
