import './index.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout() {
	return (
		<div
			className='App'
			name="navbar container"
		>
			<Navbar />
			<div
				className='page'
				name="outlet container"
			>
				<Outlet />
				<Footer />
			</div>
		</div>
	)
}
