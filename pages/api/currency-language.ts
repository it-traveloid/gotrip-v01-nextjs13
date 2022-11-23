import type { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../utils/db';

const reqObj = {
	GET: getCurrencyLanguage,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = await reqObj[req.method as keyof typeof reqObj]();
	res.status(200).json(data);
}

export async function getCurrencyLanguage() {
	const data = {
		currencies: [],
		languages: [],
	};
	try {
		const result = Promise.all([await executeQuery({ query: 'SELECT * FROM currency' }), await executeQuery({ query: 'SELECT * FROM language' })]);
	} catch (error) {
		console.log(error);
	}
}
