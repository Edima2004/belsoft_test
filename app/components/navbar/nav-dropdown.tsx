import React from 'react';
import NavBlock from './nav-block';
import {AnimatePresence, motion} from 'framer-motion'
const NavDropdown = () => {
	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				delay:1,
				duration: 2,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	return (
		<AnimatePresence>
			<motion.div
				variants={menuVars}
				initial="initial"
				animate="animate"
				exit="exit"
				className="fixed left-0 top-16 w-full z-10 origin-top h-screen"
			>
				<div className="m-auto flex justify-center items-center h-screen bg-dropdown-bg lg:hidden text-2xl">
					<NavBlock />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default NavDropdown;
