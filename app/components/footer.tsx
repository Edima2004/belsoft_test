import ButtonNoBackground from './reusable-ui/button-no-background';
import Image from 'next/image';
import Socials from './socials';
import NavBlock from './navbar/nav-block';

const Footer = () => {
	return (
		<div className="m-auto w-12/12">
			<hr />
			<div className="flex m-auto w-11/12 mt-4">
				<Image
					src="/images/footer-logo.png"
					alt="footer-logo"
					width={60}
					height={20}
				/>
			</div>
			<div className=" m-auto w-11/12 flex flex-col justify-center md:items-center my-8 max-w-3xl">
				<h2 className="font-bold text-3xl py-1 md:text-center">
					Want To Be A Part Of Abuja&apos;s Biggest Tech Community?{' '}
				</h2>
				<br />
				<ButtonNoBackground
					buttonLabel="Register For Our Next Event"
					buttonIconSrc="right-arrow.png"
					buttonSrc="/register"
				/>
			</div>
			<div className=" m-auto w-11/12">
				<hr />
				<div className="my-4 flex flex-col md:flex-row justify-between gap-2">
					<div>
						<Socials />
					</div>
					<div>
						<NavBlock />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
