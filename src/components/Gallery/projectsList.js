import React from 'react';
import { GalleryItem, ItemDescription, ItemImage, ItemTitle, ItemType, LinkButton, LinkGrid } from './projectsListStyles';

export default function PokusList({ projects }) {

	return (
		<div
			name={'projects list body'}
			className='GalleryBody'
			style={{
				width: '90%',
				maxWidth: '1200px' ,
				minHeight: '100px',
				justifyContent: 'center',
				alignItems: 'flex-start',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap'
			}}>
			{projects.map((project) =>(
			<GalleryItem
				key={project.id}
				name={'project-' + project.id}
			>
				<ItemType name={'project-' + project.id + '-type'}>
					{ project.type }
				</ItemType>
				<ItemImage name={'project-' + project.id + '-image-body'}>
					<img
						name={'project-' + project.id + '-image'}
						src={project.preview}
						alt={project.description}
					>
					</img>
				</ItemImage>
				<LinkGrid name={'project-' + project.id + 'link'}>
					<LinkButton
						name={'project-' + project.id + 'link-detail'}
						to={`/gallery/project/${project.id}`}
					>
						Zobrazit detail
					</LinkButton>
				</LinkGrid>
				<ItemTitle
					name={'project-' + project.id + '-title'}
				>
					{ project.title }
				</ItemTitle>
				<ItemDescription
					name={'project-' + project.id + '-description'}
				>
					{ project.description }
				</ItemDescription>
			</GalleryItem>
			))}
		</div>
	);
};