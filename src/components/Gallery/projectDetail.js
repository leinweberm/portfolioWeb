import React from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer, H1 } from '../../App.stylesVars';
import { ProjectsDatabase } from './projectsData';
import { ProjectCard, ProjectCardItem, P, ExternalLink, LinkContainer } from './projectDetailStyles';
import Carousel from '../Carousel';
import { useEffect, useState } from 'react';
import { pageAdress } from '../../Texts';
const axios = require('axios').default;

export default function ProjectDetail() {
	const { id } = useParams();
	const project = ProjectsDatabase[id-1];
	const [finalText, setFinalText] = useState('');
	let finalString = '';

	const fetchText = async() => {
		await axios.get(`http://${pageAdress}/textFiles/projectDetail/${project.title}.txt`)
		.then((response) => {
			let tempText = response.data.split(/\r?\n/);
			for (let i = 0; i < tempText.length; i++) {
				finalString += tempText[i] + '\n \n';
			}
			})
			.catch((error) => {
			console.log('ERROR: axios.get failed');
			});
		
		setFinalText(finalString)
		console.log(finalString);
	};

	useEffect(() => {
		fetchText();
	});

	return (
		<PageContainer name="project detail">
			<H1
				name={`project ` + project.title}
				style={{ padding: '0 15px' }}
			>
				{ project.title }
			</H1>
			<ProjectCard name="project card">
			<ProjectCardItem name="card slot1">
				<Carousel
					project={ project }
					name={'project-' + project.title + '-image'}
				/>  
			</ProjectCardItem>
			<ProjectCardItem name="card slot2"> 
				<P name="">{ finalText }</P>
				<LinkContainer
					name={'project-' + project.title + '-links'}
				>
					{ project.gitHub && 
					<ExternalLink
						name={project.title + '-github'}
						onClick={ () => {
							window.open(project.gitHub, "_blank")} }
					>
						GitHub
					</ExternalLink> 
					}
					{ project.demo && 
					<ExternalLink
						name={project.title + '-demo'}
						onClick={ () => {
						window.open(project.demo, "_blank")} }
					>
						Live Demo
					</ExternalLink> 
					}
				</LinkContainer>
			</ProjectCardItem>
			</ProjectCard>
		</PageContainer>
	)
}
