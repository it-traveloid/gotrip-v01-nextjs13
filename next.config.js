/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		MYSQL_HOST: '127.0.0.1',
		MYSQL_PORT: 3306,
		MYSQL_DATABASE: 'test',
		MYSQL_USER: 'root',
		MYSQL_PASSWORD: 'tg035b035',
		HOST_API: 'http://localhost:3000/api',
		HOST: 'http://localhost:3000',
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
