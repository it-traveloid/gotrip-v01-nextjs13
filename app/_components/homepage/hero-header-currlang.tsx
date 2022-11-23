'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import { currencies, languages } from '../../../utils/currlangs';
import HeroHeaderCurrLangDropdown from './hero-header-currlang-dropdown';

export default function HeroHeaderdata() {
	const [data, setData] = useState({ currency: 'MYR', language: 'my_en' });
	const [selectedLanguage, setSelectedLanguage] = useState({ id: 0, code: '', country: '', symbol: '', flag: '' });
	const [selectedCurrency, setSelectedCurrency] = useState({ id: 0, code: '', symbol: '', rate: 0 });
	const [show, setShow] = useState<boolean>(false);
	const [dropdown, setDropdown] = useState<string>('');

	useEffect(() => {
		const getCurrencyCookie = getCookie('currency');
		const getLanguageCookie = getCookie('language');

		if (!!getCurrencyCookie) {
			const findCurrency = currencies.find((lang) => lang.code === getCurrencyCookie);
			if (!!findCurrency) setSelectedCurrency(findCurrency);

			setData((i) => {
				return { ...i, currency: getCurrencyCookie as string };
			});
		} else {
			const findCurrency = currencies.find((lang) => lang.code === 'MYR');
			if (!!findCurrency) setSelectedCurrency(findCurrency);
		}

		if (!!getLanguageCookie) {
			const findLanguage = languages.find((lang) => lang.code === getLanguageCookie);
			if (!!findLanguage) setSelectedLanguage(findLanguage);

			setData((i) => {
				return { ...i, language: getLanguageCookie as string };
			});
		} else {
			const findLanguage = languages.find((lang) => lang.code === 'my_en');
			if (!!findLanguage) setSelectedLanguage(findLanguage);
		}
	}, []);

	const handleShow = () => setShow(!show);
	const handleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const button: HTMLButtonElement = e.currentTarget;
		if (button !== e.target) return;
		if (dropdown === button.name) setDropdown('');
		else setDropdown(button.name);
	};

	const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
		const button: HTMLDivElement = e.currentTarget;
		const getState = button.id.split('_')[0];
		const getCode = button.id.split('_')[1];

		if (getState === 'language') {
			const find = languages.find((i) => i.code === getCode);
			if (!!find) setSelectedLanguage(find);
		} else if (getState === 'currency') {
			const find = currencies.find((i) => i.code === getCode);
			if (!!find) setSelectedCurrency(find);
		}
		setCookie(getState, getCode);
		setData({ ...data, [getState]: getCode });
		setDropdown('');
	};

	const handleSubmit = () => {
		setShow(false);
	};

	if (!selectedCurrency.code || !selectedLanguage.code) return <div className="ml-auto">Loading...</div>;

	return (
		<>
			<div className="ml-auto rounded flex gap-4 hover:bg-primary-4 hover:bg-opacity-25 py-4 px-4 cursor-pointer transition-all" onClick={handleShow}>
				<div>
					<span>{selectedCurrency.code}</span>
					<span className="hidden lg:inline"> - {selectedCurrency.symbol}</span>
				</div>
				<div>|</div>
				<div className="flex items-center gap-3">
					<div>
						<Image className="rounded" src={selectedLanguage.flag} alt="icon flag" width={28} height={28} />
					</div>
					<div>
						<span>{selectedLanguage.symbol}</span>
						<span className="hidden lg:inline"> - {selectedLanguage.country}</span>
					</div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
				</div>
			</div>

			{show && (
				<>
					<div className="absolute -z-0 top-0 left-0 w-screen h-screen bg-black bg-opacity-40" onClick={handleShow}></div>
					<div className="absolute text-sm text-text-color-1 -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 sm:w-[380px] w-full px-4">
						<div className="bg-white p-6 rounded">
							<div className="flex justify-between items-center mb-4">
								<p className="text-lg">Choose your currency & language</p>
								<div className="cursor-pointer" onClick={handleShow}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</div>
							</div>

							<div className="flex flex-col gap-4 mb-8">
								<button name="currency" className="flex flex-row items-center relative px-4 py-2 w-full bg-bg-color-2 rounded transition-all" onClick={handleDropdown}>
									<div className="flex flex-col gap-1 items-start">
										<div className="text-xs">Currency</div>
										<div className="text-base">
											{selectedCurrency.code} - {selectedCurrency.symbol}
										</div>
									</div>
									<div className="ml-auto">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
										</svg>
									</div>

									{dropdown === 'currency' && <HeroHeaderCurrLangDropdown data={currencies} state="currency" value={data.currency} handleSelect={handleSelect} />}
								</button>

								<button name="language" className="flex flex-row items-center relative px-4 py-2 w-full bg-bg-color-2 rounded transition-all" onClick={handleDropdown}>
									<div className="flex flex-col gap-1 items-start">
										<div className="text-xs">Language</div>
										<div className="text-base flex gap-3 items-center">
											<div>
												<Image className="rounded" src={selectedLanguage.flag} alt="icon flag" width={28} height={28} />
											</div>
											{selectedLanguage.country} - {selectedLanguage.symbol}
										</div>
									</div>
									<div className="ml-auto">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
										</svg>
									</div>

									{dropdown === 'language' && <HeroHeaderCurrLangDropdown data={languages} state="language" value={data.language} handleSelect={handleSelect} />}
								</button>
							</div>

							<button onClick={handleSubmit} className="p-4 text-sm w-full bg-primary-1 rounded text-white">
								CONTINUE
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
}
