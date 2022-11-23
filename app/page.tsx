import HeroBg from './_components/homepage/hero-bg';
import HeroCategories from './_components/homepage/hero-categories';
import HeroHeader from './_components/homepage/hero-header';

export default async function Home() {
	return (
		<div className="relative w-screen h-screen bg-transparent">
			<div className="px-4 lg:px-8 xl:container mx-auto">
				<HeroHeader />
				<HeroCategories />
			</div>
			<HeroBg />
		</div>
	);
}
