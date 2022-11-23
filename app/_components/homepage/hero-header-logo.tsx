import Image from 'next/image';
import Link from 'next/link';

export default function HeroHeaderLogo() {
	return (
		<Link href="/">
			<Image src="/images/logo.svg" alt="logo" width={143} height={50} />
		</Link>
	);
}
