import React from 'react';
import ButtonNoBackground from './reusable-ui/button-no-background';
import { Collaborators } from '@/data/data';
import Image from 'next/image';
import ButtonBackground from './reusable-ui/button-background';
import HomeAccordion from './home-accordion';
import Reviews from './reviews';

const HomeContent = () => {
	return (
		<div className="m-auto w-12/12">
			{/* First Layer */}
			<div className="flex flex-col md:flex-row justify-between gap-5 flex-grow m-auto w-11/12">
				<div>
					<p className="home-small-p pt-8 text-xs">
						Join our premier monthly meetup for startup founders and tech
						visionaries
					</p>
					<h2 className="text-main-purple font-bold text-3xl py-1">
						Connect, Collaborate, Innovate!
					</h2>
					<p className="home-p pt-5 max-w-screen-md pb-5  leading-8 tracking-wide">
						Every last Friday of the month, we bring together the brightest
						minds in our local tech ecosystem. Whether you&apos;re a seasoned
						entrepreneur or just starting your journey, Founder&apos;s Friday is
						your launchpad for new ideas, valuable connections, and
						game-changing opportunities.
					</p>
					<ButtonNoBackground
						buttonLabel="Register For Our Next Event"
						buttonIconSrc="right-arrow.png"
						buttonSrc="/register"
					/>
					<p className="text-dark-purple text-xs pt-3 m-auto ">
						Join Us for our next meetup on the 26th of July 2024
					</p>
					<div className="flex flex-row m-auto gap-4 pt-10 pb-5">
						{Collaborators.map((collaborator) => {
							const { id, name, imageLink } = collaborator;
							return (
								<div key={id}>
									<Image
										className="rounded-full"
										src={imageLink}
										alt="collaborator"
										width={50}
										height={40}
									/>
								</div>
							);
						})}
					</div>
					<span className="flex flex-row text-xs gap-1">
						<a href="/collaborator">Become a collaborator Today</a>
						<Image
							src="/icons/collaborator-link.png"
							alt="collaborator-link"
							width={15}
							height={10}
						/>
					</span>
				</div>
				<div>
					<Image
						className="rounded-xl flex m-auto justify-center align-middle mt-10 w-[4/4] lg:w-4/4"
						src="/images/test-image.jpg"
						alt="collaborator-link"
						width={390}
						height={300}
					/>
				</div>
			</div>

			{/* Second Layer */}
			<div className="flex flex-col md:flex-row justify-between align-baseline gap-8 flex-grow m-auto w-11/12 pt-20">
				<div>
					<h2 className="text-black font-bold mb-5 text-3xl md:hidden">
						Who are we?
					</h2>
					<Image
						className="rounded-xl flex m-auto justify-center align-middle w-[4/4] lg:w-4/4 "
						src="/images/home-img4.png"
						alt="collaborator-link"
						width={390}
						height={300}
					/>
				</div>
				<div className="md:border-l md:pl-4 border-x-main-purple-bold  rounded-lg ">
					<h2 className="hidden text-black font-bold text-3xl pb-8 md:block">
						Who are we?
					</h2>
					<p className="home-p max-w-3xl pb-3 leading-8 tracking-wide">
						Born from the vibrant startup ecosystem of Abuja, we recognized the
						need for a consistent, high-quality networking platform where
						founders, innovators, and tech enthusiasts could connect, share
						ideas, and foster collaboration.
					</p>
					<p className="md:hidden">
						Join us at the next Founder&apos;s Friday and be part of
						Abuja&apos;s most dynamic startup community. Together, we&apos;re
						not just sharing ideas—we&apos;re shaping the future of tech in our
						city.
					</p>
					<div className="flex pt-5 justify-start gap-10">
						<ButtonBackground
							buttonLabel="Register"
							buttonIconSrc="arrow-right.png"
							buttonSrc="/register"
						/>
						<ButtonNoBackground
							buttonLabel="Donate"
							buttonIconSrc="money-icon.png"
							buttonSrc="/donate"
						/>
					</div>
					<p className="text-sm font-bold mt-12">
						Founder&apos;s Friday is more than just a meetup — it&apos;s a
						movement.
					</p>
				</div>
			</div>
			{/*<HomeAccordion />*/}
			<div className='m-auto w-11/12'>
			<Reviews/>
			</div>
		</div>
	);
};

export default HomeContent;
