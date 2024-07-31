import Image from 'next/image'
import React from 'react'

interface ButtonProps{
   buttonLabel:string;
   buttonIconSrc:string;
   buttonSrc:string;
}
const ButtonNoBackground = ({buttonLabel, buttonIconSrc, buttonSrc}:ButtonProps) => {
  return (
     <a href={buttonSrc}>
		<div className="text-main flex w-50 max-w-64 border rounded-3xl border-main-purple p-3 justify-evenly gap-2">
            <button type="submit" className="text-main-purple ">
               {buttonLabel}
            </button>
            <Image
                     //className='px-2'
               src={`/icons/${buttonIconSrc}`}
               alt="Register"
               width={20}
               height={20}
            />
		</div>
         </a>
	);
}

export default ButtonNoBackground
