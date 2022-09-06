import React from 'react';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

const Navbar = () => {
	return (
		<>
			<DesktopNav />
			<MobileNav />
		</>
	);
};

export default Navbar;