export default function HeroSearch() {
	return (
		<div className="absolute -z-10 bottom-[13%] hidden w-full text-base md:block">
			<div className="flex w-11/12 rounded bg-white p-3 text-text-color-1 shadow-xl lg:w-8/12">
				<div className="w-1/3 border-r pl-3">
					<div>Location</div>
					<input className="mt-1 w-full text-text-color-2 focus:outline-none" type="text" placeholder="Where are you going?" />
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
