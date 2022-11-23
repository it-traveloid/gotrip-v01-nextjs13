import Image from 'next/image';

export default function HeroContent() {
	return (
		<div className="mt-36 w-full flex flex-row items-center">
			<div className="mb-40">
				<h1 className="flex flex-col text-white text-5xl lg:text-6xl font-semibold mb-8">
					<span className="mb-6 text-secondary-1">Where Would</span>
					<span>You Like To Go?</span>
				</h1>
				<p className="text-white">Checkout Beautiful Places Arround the World.</p>
			</div>
			<div className="hidden ml-auto sm:flex -z-20">
				<div className="p-4">
					<Image className="rounded shadow" src="/images/hero-1.webp" alt="hero 1" width={400} height={500} />
				</div>
				<div className="hidden xl:block">
					<div className="pl-2 py-4">
						<Image className="rounded shadow" src="/images/hero-2.webp" alt="hero 2" width={400} height={500} />
					</div>
					<div className="pl-2 py-4">
						<Image className="rounded shadow" src="/images/hero-3.webp" alt="hero 3" width={400} height={500} />
					</div>
				</div>
			</div>
		</div>
	);
}
