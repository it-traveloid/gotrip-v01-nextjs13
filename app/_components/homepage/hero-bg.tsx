import Image from 'next/image';

export default function HeroBg() {
	return (
		<div className="absolute top-0 left-0 -z-10 w-screen h-full md:h-5/6">
			<Image className="object-cover object-center" src="/images/bg.webp" alt="bg" fill unoptimized />
		</div>
	);
}
