import Image from 'next/image';
import Link from 'next/link';
import HeroHeaderCurrLang from './hero-header-currlang';
import HeroHeaderLogo from './hero-header-logo';
import HeroHeaderMenu from './hero-header-menu';
import HeroHeaderQSearch from './hero-header-qsearch';
import HeroHeaderSignIn from './hero-header-signin';

export default function HeroHeader() {
	return (
		<div className="text-white text-sm flex items-center gap-4 py-4">
			{/* <HeroHeaderMenu /> */}
			<HeroHeaderLogo />
			<HeroHeaderQSearch />
			<HeroHeaderCurrLang />
			<HeroHeaderSignIn />
		</div>
	);
}
