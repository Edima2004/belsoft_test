import React from 'react';
import Image from 'next/image';
import ButtonNoBackground from '../reusable-ui/button-no-background';

const HomeRegister = () => {
	return (
		<div className="m-auto w-12/12 flex flex-col text-center justify-center items-center my-8 gap-1">
			<h2 className="pt-8 text-2xl font-bold">
				Register And Be Part of Our Community
			</h2>
			<p className="font-extralight text-sm tracking-wide">
				Join our community of over 1000+ founders, developers, and tech junkies
				in general.
			</p>
			<p className="font-extralight text-sm tracking-wide">
				Be inspired by people who live to inspire!
			</p>
			<Image
				className="m-auto px-4 mt-10 mb-10 w-[3/4] lg:w-4/4"
				src="/images/linked-images2.png"
				alt="collaborator-link"
				width={700}
				height={600}
			/>
			<ButtonNoBackground
				buttonLabel="Register Now"
				buttonIconSrc="arrow-right6.png"
				buttonSrc="/register"
			/>
		</div>
	);
};

export default HomeRegister;
