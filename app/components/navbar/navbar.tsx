'use client';

import React, { useState } from 'react';
import { NavData } from '@/data/data';
import Image from 'next/image';
import '@/app/styles/components/navbar.css';
import NavDropdown from './nav-dropdown';
import FormButton from '../reusable-ui/form-button';

const Navbar = () => {
	const [openDropDown, setOpenDropDown] = useState(false);

	const changeBars = () => {
		setOpenDropDown(!openDropDown);
	};
	return (
		<div className="m-auto w-full bg-nav-bg">
			<div className="m-auto w-11/12 flex justify-between  items-center p-4">
				<div className="flex flex-row justify-evenly md:flex-grow">
					<div className="flex flex-row">
						<Image
							width={40}
							height={40}
							className="flex "
							src={'/images/main-logo.png'}
							alt="logo"
						/>
						<span className="text-logo hidden md:block">
							Founder&apos;s Friday
						</span>
					</div>

					<div className="flex flex-row gap-5 mx-8">
						{NavData.map((nav) => {
							const { id, name, link, textColor } = nav;
							return (
								<nav className="hidden md:block" key={id}>
									<a className="nav-item" href={link}>
										<span className={textColor}>{name}</span>
									</a>
								</nav>
							);
						})}
					</div>
					<div className="hidden md:flex flex-row ">
						<FormButton
							buttonLabel="Register"
							buttonIconSrc="arrow-right1.png"
							buttonSrc="/register"
							borderBgTxtBd={`border-main-purple bg-white text-main-purple rounded-xl`}
						/>
					</div>
				</div>
				<div>
					<button className="fabars" onClick={changeBars}>
						<button
							id="menu-btn"
							className={`hamburger ${openDropDown && 'open'}`}
						>
							<span className="hamburger-top"></span>
							<span className="hamburger-middle"></span>
							<span className="hamburger-bottom"></span>
						</button>
					</button>
				</div>
			</div>
			<hr />
			{openDropDown && <NavDropdown />}
		</div>
	);
};

export default Navbar;
