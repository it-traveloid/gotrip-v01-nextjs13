import Link from 'next/link';

export default function About() {
	return (
		<div className="h-screen w-screen bg-blue-900 flex items-center justify-center">
			<div className="text-4xl">About</div>
			<Link href="/">Home</Link>
		</div>
	);
}
