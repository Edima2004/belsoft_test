import { NavData } from '@/data/data';

const NavBlock = () => {
	
	return (
		<div>
			<div className="flex flex-col gap-3 lg:flex-row">
				{NavData.map((nav) => {
					const { id, name, link, textColor } = nav;
					return (
						<div  key={id}>
							<a className="nav-item" href={link}>
								<span className={textColor}>{name}</span>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NavBlock;
