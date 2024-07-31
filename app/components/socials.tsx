import { SocialData } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const Socials = () => {
	return(
   <div className='flex gap-2'>
      {SocialData.map((social)=>{
         const {iconLink, iconSrc, id, name} = social;
         return(
            <a href={iconLink} key={id}>
               <Image
               src={iconSrc}
               alt={name}
               width={30}
               height={20}
               />
            </a>
         )})}
   </div>
   );
};

export default Socials;
