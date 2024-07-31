import Image from 'next/image';
import React from 'react';
interface ButtonProps {
	buttonLabel: string;
	buttonIconSrc: string;
	buttonSrc: string;
}

const ButtonBackground = ({buttonLabel, buttonIconSrc, buttonSrc}:ButtonProps) => {
	return (
		<a href={buttonSrc}>
         <div className="text-main flex p-3 w-40 max-w-64 border rounded-3xl bg-button-bg justify-evenly gap-2 ">
            <button type="submit" className="bg-button-bg text-white rounded-lg">
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
