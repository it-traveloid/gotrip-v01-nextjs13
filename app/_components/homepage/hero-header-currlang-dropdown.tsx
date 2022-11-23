import Image from 'next/image';

interface ICurrLangDropdown {
	data: {
		id: number;
		name?: string;
		country?: string;
		code?: string;
		symbol?: string;
		flag?: string;
		rate?: number;
	}[];
	state: string;
	value: string;
	handleSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function HeroHeaderCurrLangDropdown({ data, state, value, handleSelect }: ICurrLangDropdown) {
	return (
		<div className="z-20 rounded mt-2 absolute top-full left-0 bg-bg-color-2 w-full h-[240px] overflow-y-scroll shadow-lg flex flex-col">
			{data.map((d) => {
				return (
					<div key={d.id} id={`${state}_${d.code}`} onClick={handleSelect}>
						<div
							className={`p-4 border-b border-primary-1 border-opacity-20 hover:bg-primary-1 hover:bg-opacity-10 flex items-center ${
								value === d.code ? 'bg-primary-1 bg-opacity-10' : ''
							}`}
						>
							{state === 'language' && (
								<div className="mr-3">
									<Image className="rounded" src={d.flag as string} alt="icon flag" width={28} height={28} />
								</div>
							)}
							<div>
								{state === 'currency' ? d.code : d.country} - {d.symbol}
							</div>
							{value === d.code && (
								<div className="ml-auto">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
									</svg>
								</div>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
