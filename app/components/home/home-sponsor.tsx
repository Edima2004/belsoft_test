import React from 'react';
import Image from 'next/image';
import FormButton from '../reusable-ui/form-button';

const HomeSponsor = () => {
	return (
		<div className="w-12/12 pt-16">
			<p className="text-secondary-purple font-bold">Sponsor The Next Friday</p>
			<h2 className="text-black font-bold mb-8 text-3xl max-w-64">
				Why Sponsor Founders Friday?
			</h2>
			<div className="m-auto flex flex-col lg:flex-row justify-between lg:items-start gap-8  w-11/12 ">
				<div>
					<Image
						className="rounded-xl flex m-auto justify-center items-center w-[3/4] lg:w-4/4 "
						src="/images/sponsor-img.png"
						alt="collaborator-link"
						width={380}
						height={300}
					/>
				</div>
				<div className=" md:pl-4 items-center rounded-lg">
					<h2 className="font-bold pb-2">How To Sponsor</h2>
					<p className="font-extralight italic">Ready to Make an Impact?</p>
					<p className="home-p max-w-3xl pb-3 leading-6 text-sm">
						Fill out the form below or contact us at [contact email/phone
						number] to learn more about how you can sponsor the next Founders
						Friday
					</p>
					<div className="">
						<form action="">
							<div className="flex flex-wrap gap-y-3 gap-x-16">
								{/* name */}
								<div>
									<label htmlFor="" className="font-semibold">
										Name
									</label>
									<br />
									<input
										type="text"
										className="border border-input-border pl-3 rounded-sm w-52 h-9 mb-2"
										placeholder="Full name"
									/>
								</div>
								{/* Company */}

								<div>
									<label htmlFor="" className="font-semibold">
										Company
									</label>
									<span className="font-extralight text-sm"> (optional)</span>
									<br />
									<input
										type="text"
										className="border border-input-border pl-3 rounded-sm w-52 h-9"
										placeholder="Company name"
									/>
								</div>
								{/* email */}
								<div>
									<label htmlFor="" className="font-semibold">
										Email
									</label>
									<br />
									<input
										type="email"
										className="border border-input-border pl-3 rounded-sm w-52 h-9"
										placeholder="Email address"
									/>
								</div>
								{/* Phone number */}
								<div>
									<label htmlFor="" className="font-semibold">
										Phone
									</label>
									<br />
									<input
										type="text"
										className="border border-input-border pl-3 rounded-sm w-52 h-9"
										placeholder="Phone Number"
									/>
								</div>
							</div>
							<div className="flex pt-5 justify-start gap-10">
								<FormButton
									buttonLabel="Sponsor"
									buttonIconSrc="arrow-right.png"
									buttonSrc="/sponsor"
									borderBgTxtBd={`text-white`}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSponsor;
