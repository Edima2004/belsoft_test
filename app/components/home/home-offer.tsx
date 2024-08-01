import React from 'react';
import Image from 'next/image';
import { OfferData } from '@/data/data';

const HomeOffer = () => {
	return (
		<div className=" m-auto w-12/12">
			<h2 className="text-black font-bold my-16 text-2xl ">What We Offer</h2>
			{OfferData.map((data) => {
				const { content, iconSrc, id, name } = data;
				return (
					<span key={id}>
						<div
							className="m-auto w-12/12 flex  flex-start items-center gap-8 mt-8 "
						>
                     <div className="w-2 rounded-full bg-button-bg p-2"></div>
                     <h3 className='font-semibold max-w-40'>{name}</h3>
							<p className="text-sm max-w-3xl ">{content}</p>
                           <Image
                              className=" m-auto w-[4/4] lg:w-4/4"
                              src={iconSrc}
                              alt="collaborator-link"
                              width={12}
                              height={12}
                           />
                     </div>
						<br />
						<hr />
					</span>
				);
			})}
		</div>
	);
};

export default HomeOffer;
