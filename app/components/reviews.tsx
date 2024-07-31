import { ReviewsData } from '@/data/data';
import React from 'react';
import Image from 'next/image';

const Reviews = () => {
	return (
		<div className="flex gap-2 ">
			{ReviewsData.map((review) => {
				const { content, imageSrc, id, name } = review;
				return (
					<div key={id}>
						<Image
							className="rounded-full p-1 border border-main-purple w-12/12"
							src={imageSrc}
							alt={name}
							width={50}
							height={20}
						/>
						<div className="m-auto flex flex-col w-11/12 items-center justify-center ">
							<p>{name}</p>
							<p >{content}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Reviews;
