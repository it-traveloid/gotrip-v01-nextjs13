'use client';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { categories } from '../../../utils/categories';

export default function HeroCategories() {
	const [data, setData] = useState([{ id: 0, name: '', image: '', slug: '' }]);
	const [selectedCategory, setSelectedCategory] = useState({ id: 0, name: '', image: '', slug: '' });

	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		setData(categories);
		const paramsCategory = searchParams.get('category');

		if (!paramsCategory) {
			setSelectedCategory(data[0]);
			router.push(`/?category=${data[0].slug}`);
		} else {
			const findCategory = data.find((c) => c.slug === paramsCategory);
			if (!!findCategory) setSelectedCategory(findCategory);
		}
	}, [data, router, searchParams]);

	useEffect(() => {
		const getActiveElement = document.querySelector('#hero-categories .selected');
		getActiveElement?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	}, [selectedCategory]);

	const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button: HTMLButtonElement = e.currentTarget;
		const findCategory = data.find((c) => c.id === +button.id);
		if (!findCategory) return;

		setSelectedCategory(findCategory);
		router.push(`/?category=${findCategory.slug}`);
	};

	return (
		<div id="hero-categories" className="mt-2 flex gap-3 md:gap-8 text-sm overflow-x-scroll scrollbar-hide">
			{data.map((c) => {
				return (
					<button
						id={c.id.toString()}
						key={c.id}
						className={`transition-all cursor-pointer flex gap-4 items-center text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded ${
							c.id === selectedCategory?.id ? 'bg-white bg-opacity-10 selected' : ''
						}`}
						onClick={handleSelect}
					>
						<div className="w-6 h-6 relative">{c.image && <Image className="w-full" src={c.image} alt={c.name} fill />}</div>
						<div>{c.name}</div>
					</button>
				);
			})}
		</div>
	);
}
