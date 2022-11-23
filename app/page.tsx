import HeroBg from './_components/homepage/hero-bg';
import HeroCategories from './_components/homepage/hero-categories';
import HeroContent from './_components/homepage/hero-content';
import HeroHeader from './_components/homepage/hero-header';
import HeroSearch from './_components/homepage/hero-search';

export default async function Home() {
	return (
		<div className="relative w-screen h-screen bg-transparent">
			<div className="px-4 lg:px-8 xl:container mx-auto">
				<HeroHeader />
				<HeroCategories />
				<HeroContent />
				<HeroSearch />
			</div>
			<HeroBg />
		</div>
	);
}
