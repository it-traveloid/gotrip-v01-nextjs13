import Image from 'next/image';

export default function HeroHeaderMenu() {
	return (
		<div className="cursor-pointer mr-4">
			<Image src="/images/icon-nav.svg" alt="icon nav" width={25} height={12} />
		</div>
	);
}
