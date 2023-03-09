import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Components
import { Button, Container } from "../";

export interface HeroSectionProps {
	heroImage: StaticImageData;
}

export const HeroSection = ({ heroImage }: HeroSectionProps) => {
	return (
		<div className="relative flex h-[620px] items-center justify-center">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="relative h-full w-[150%]">
					<Image
						src={heroImage}
						placeholder="blur"
						sizes="150vw"
						priority
						className="h-full w-full object-cover"
						alt="Foto del piano vasca della piscina"
					/>
				</div>
				<span className="absolute top-0 left-0 bottom-0 right-1/2 block transform-gpu bg-white/90 supports-bfilter:bg-white/50 supports-bfilter:backdrop-blur-xl"></span>
			</div>
			<Container className="relative h-max">
				<h1>Nuota con noi</h1>
				<p className="my-4 max-w-[42ch] text-base">
					L&apos;acqua ci è amica, non devi combatterla, condividi il suo
					spirito e lei ti aiuterà nel movimento. - A. Popov
				</p>
				<Button href="/piscina" as={Link} passHref>
					Scopri le attività
				</Button>
			</Container>
		</div>
	);
};
