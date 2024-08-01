import React from 'react';
import Image from 'next/image';
interface OfferProps {
	offerIconSrc: string;
	offerName: string;
	offerContent:string
}

const HomeOffer = ({
	offerIconSrc,
   offerName,
	offerContent,
}: OfferProps) => {
	return (
		<div className="">
			<div className="">
				<h3>{offerName}</h3>
				<p>{offerContent}</p>
				<Image
					className="rounded-xl flex m-auto w-[4/4] lg:w-4/4 "
					src={`/icons/home-img4.png`}
					alt="collaborator-link"
					width={390}
					height={300}
				/>
				{/*<p>{info}</p>*/}
			</div>
		</div>
	);
};

export default HomeOffer;
