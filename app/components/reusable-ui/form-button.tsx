import Image from 'next/image';
import React from 'react';
interface ButtonProps {
	buttonLabel: string;
	buttonIconSrc: string;
	buttonSrc: string;
   borderBgTxtBd:string;
}

const FormButton = ({
	buttonLabel,
	buttonIconSrc,
	buttonSrc,
	borderBgTxtBd,
}: ButtonProps) => {
	return (
		<a href={buttonSrc}>
			<div
				className={`flex p-3 px-8 max-w-72 border rounded-lg bg-button-bg justify-evenly gap-2 ${borderBgTxtBd} `}
			>
				<button type="submit" className="rounded-lg">
					{buttonLabel}
				</button>
				<Image
					src={`/icons/${buttonIconSrc}`}
					alt="Sponsor"
					width={20}
					height={20}
				/>
			</div>
		</a>
	);
};

export default FormButton;
