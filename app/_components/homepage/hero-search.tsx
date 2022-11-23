'use client';
import React, { useEffect, useState } from 'react';
import { locations } from '../../../utils/locations';

export default function HeroSearch() {
	const [open, setOpen] = useState('');
	const [selectedLocation, setSelectedLocation] = useState({ id: 0, region: '', state: '' });

	useEffect(() => {
		if (open) document.addEventListener('click', (e: any) => e.target.name !== open && setOpen(''));
	}, [open]);

	const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (open === e.currentTarget.name) setOpen('');
		else setOpen(e.currentTarget.name);
	};

	const handleSelectedLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
		const findLocation = locations.find((l) => l.id.toString() === e.currentTarget.id);
		if (!!findLocation) setSelectedLocation(findLocation);
	};

	return (
		<div className="absolute bottom-[13%] hidden w-full text-base md:block">
			<div className="flex w-11/12 rounded bg-white p-3 text-text-color-1 shadow-xl lg:w-8/12">
				<div className="relative w-1/3 border-r pl-3">
					<div>Location</div>
					<button name="location" onClick={handleOpen} className="text-left cursor-pointer mt-1 w-full text-text-color-2 focus:outline-none">
						{selectedLocation.id ? selectedLocation.region + ' - ' + selectedLocation.state : 'Where are you going?'}
					</button>
					{open === 'location' && (
						<div className="absolute bottom-20 -left-3 bg-white p-3 w-full rounded text-sm shadow-xl h-[300px] overflow-y-scroll scrollbar-hide">
							{locations.map((l) => {
								return (
									<button
										id={l.id.toString()}
										className={`text-left w-full cursor-pointer rounded hover:bg-primary-1 hover:bg-opacity-10 hover:text-primary-1 relative flex flex-row items-center gap-3 p-2 ${
											selectedLocation.id === l.id ? 'bg-primary-1 bg-opacity-10 text-primary-1' : ''
										}`}
										onClick={handleSelectedLocation}
										key={l.id}
									>
										<div className="text-text-color-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
											</svg>
										</div>
										<div>
											<div className="font-medium">{l.region}</div>
											<div className="text-text-color-2">{l.state}</div>
										</div>
									</button>
								);
							})}
						</div>
					)}
				</div>
				<div className="w-1/3 border-r pl-6">
					<div>Check in - Check out</div>
					<input className="mt-1 w-full text-text-color-2 focus:outline-none" type="text" placeholder="Wed 2 Mar - Fri 11 Apr" />
				</div>
				<div className="w-1/3 pl-6">
					<div>Guest</div>
					<input className="mt-1 w-full text-text-color-2 focus:outline-none" type="text" placeholder="2 adults - 1 children - 1 room" />
				</div>
				<div className="relative flex w-1/4 items-center">
					<button className="absolute right-0 flex items-center gap-2 rounded bg-secondary-1 py-4 px-8">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
						</svg>
						<span>Search</span>
					</button>
				</div>
			</div>
		</div>
	);
}
