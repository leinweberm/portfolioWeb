import { MobMenuList, MobMenuItem, MobMenuLink, MobNavi, Hamburger, BrandName } from './navbarStyles';

import React, { useState } from 'react'

export default function MobileNav() {
	const [isNavActive, setIsNavActive] = useState(false);
	const [navbarColor, setNavbarColor] = useState(true);

	const changeNavbarColor = () => {
		if (window.scrollY <= 70 && isNavActive === false) {
			setNavbarColor(true);
		} else {
			setNavbarColor(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);

	const activeNavbarColor = (isNavActive) => {
		if (isNavActive === true) {
			let thisNavbarColor = true;
			setNavbarColor(thisNavbarColor);
		}
		else if (isNavActive === false) {
			let thisNavbarColor = false;
			setNavbarColor(thisNavbarColor);
		}
	};
	const handleClick = () => {
		hangleNavbarChange();
		handleScroll();
	};
	const handleScroll = () => {
		window.scrollTo(0, 0);
	};
	const hangleNavbarChange = () => {
		setIsNavActive(!isNavActive);
		activeNavbarColor(isNavActive);
	};

	return (
		<>
			<MobNavi
				name="mobile navbar"
				backgroundStyle={navbarColor}
			>
			<BrandName name="mobile navbar brand">
				<h1>Leinweber</h1>
			</BrandName>
			{isNavActive &&
				<MobMenuList>
					<MobMenuItem>
						<MobMenuLink
							name="mobile nav home"
							to="/"
							onClick={handleClick}
						>
							DOMŮ
						</MobMenuLink>
					</MobMenuItem>
					<MobMenuItem>
						<MobMenuLink
							name="mobile nav info"
							to="/about"
							onClick={handleClick}
						>
							INFO
						</MobMenuLink>
					</MobMenuItem>
					<MobMenuItem>
						<MobMenuLink
							name="mobile nav projects"
							to="/gallery"
							onClick={handleClick}
						>
							PROJEKTY
						</MobMenuLink>
					</MobMenuItem>
					<MobMenuItem>
						<MobMenuLink
							name="mobile nav contact"
							to="/contact"
							onClick={handleClick}
						>
							KONTAKT
						</MobMenuLink>
					</MobMenuItem>
				</MobMenuList >
			}
			<Hamburger onClick={hangleNavbarChange} />
			</MobNavi>
		</>
	);
};
