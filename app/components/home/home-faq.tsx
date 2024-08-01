import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const HomeFaq=()=> {
	return (
		<Accordion type="single" collapsible className="w-full">
			<h2 className="text-black font-bold mb-5 text-2xl ">FAQS</h2>
			<AccordionItem value="item-1">
				<AccordionTrigger>
					What is Founder&apos;s Friday all about?
				</AccordionTrigger>
				<AccordionContent>
					Founder&apos;s friday is a program dedicated to the techies...
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>
					Why should I sponsor Founder&apos;s Friday?
				</AccordionTrigger>
				<AccordionContent>
					With the crowd of techies usually present at founder&apos;s day, your brand enjoys...
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>What do I stand to gain from registering?</AccordionTrigger>
				<AccordionContent>
					A whole lot of benefits. From networking, to career advice....
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
export default HomeFaq;
