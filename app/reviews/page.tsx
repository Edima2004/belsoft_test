import { ReviewsData } from '@/data/data';
import * as React from 'react';
import Image from 'next/image';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
//import Autoplay from 'embla-carousel-autoplay';

const Reviews = () => {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className="m-auto flex w-8/12 justify-center items-center "
		>
			<CarouselContent>
				{ReviewsData.map((review, index) => {
					const { content, imageSrc, id, name } = review;
					return (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
							<div className="p-1">
								<div className="flex flex-col items-center w-11/12 justify-center p-6 ">
									<Image
										className="rounded-full p-2 border-2 border-main-purple"
										src={imageSrc}
										alt={name}
										width={100}
										height={20}
									/>
									<div className="m-auto flex flex-col w-11/12 items-center justify-center text-center">
										<p className='font-semibold'>{name}</p>
										<p className='text-xs'>{content}</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default Reviews;
