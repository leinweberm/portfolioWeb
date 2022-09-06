import React, { useState, useReducer, useRef } from 'react';
import { FilterButton, FilterButtons, } from './projectsStyles';
import { PageContainer, H1 } from '../../App.stylesVars';
import ProjectsList from './projectsList';
import { ProjectsDatabase } from './projectsData';

const initialFilter = { filter: 'coding + design' }
function setFilter(filter, action) {
	switch (action.type) {
		case 'coding':
			return { filter: 'coding' };
		case 'codingDesign':
			return { filter: 'coding + design' };
		case 'design':
			return { filter: 'design' };
		default: 
			return { filter: 'coding + design' };
	}
};

export default function Gallery() {
	// eslint-disable-next-line
	const [projects, setProjects] = useState(ProjectsDatabase);
	const [filter, dispatch] = useReducer(setFilter, initialFilter);
	const codeToggle = useRef(false);
	const allToggle = useRef(true);
	const designToggle = useRef(false);

	return (
		<PageContainer name="projects page">
			<H1 name="">PROJEKTY</H1>
			<FilterButtons name="filter buttons">
			<FilterButton
				name="coding"
				toggle={codeToggle.current}
				onClick={function (event) {
					dispatch({ type: 'coding' });
					codeToggle.current = true;
					allToggle.current = false;
					designToggle.current = false;
			}}>
				CODING
			</FilterButton>
			<FilterButton
				name="coding + design"
				toggle={allToggle.current}
				onClick={function (event) {
					dispatch({ type: 'codingDesign' });
					codeToggle.current = false;
					allToggle.current = true;
					designToggle.current = false;
			}}>
				VŠE
			</FilterButton>
			<FilterButton
				name="design"
				toggle={designToggle.current}
				onClick={function (event) {
					dispatch({ type: 'design' });
					codeToggle.current = false;
					allToggle.current = false;
					designToggle.current = true;
			}}>
				DESIGN
			</FilterButton>
			</FilterButtons>
			<ProjectsList name="project list" projects={
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
