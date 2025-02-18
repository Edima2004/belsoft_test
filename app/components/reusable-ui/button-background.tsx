import Image from 'next/image';
import React from 'react';
interface ButtonProps {
	buttonLabel: string;
	buttonIconSrc: string;
	buttonSrc: string;
}

const ButtonBackground = ({
	buttonLabel,
	buttonIconSrc,
	buttonSrc,
}: ButtonProps) => {
	return (
		<a href={buttonSrc}>
			<div className="text-main flex p-3 px-8 max-w-72 border rounded-3xl bg-button-bg justify-evenly gap-2 ">
				<button type="submit" className=" text-white rounded-lg">
					{buttonLabel}
				</button>
				<Image
					src={`/icons/${buttonIconSrc}`}
					alt="Register"
					width={20}
					height={20}
				/>
			</div>
		</a>
	);
};

export default ButtonBackground;
