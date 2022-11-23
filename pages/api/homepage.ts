import type { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../utils/db';

const reqObj = {
	GET: getHomepageData,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = await reqObj[req.method as keyof typeof reqObj]();
	res.status(200).json(data);
}

export async function getHomepageData() {
	try {
		const data = await executeQuery({ query: 'SELECT * FROM homepage' });
		return data;
	} catch (error) {
		console.log(error);
	}
}
