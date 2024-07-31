import { NavData } from '@/data/data';
import React from 'react'

const NavBlock = () => {
  return (
		<div>
			<div className="flex flex-col gap-2 md:flex-row">
         {NavData.map((nav) => {
            const { id, name, link, textColor } = nav;
            return (
            <nav className="" key={id}>
               <a className="nav-item" href={link}>
                  <span className={textColor}>{name}</span>
               </a>
            </nav>
            );
         })}
			</div>
		</div>
	);
}

export default NavBlock
