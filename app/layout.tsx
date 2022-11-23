import './styles/output.css';
import './styles/font.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body className="font-jost">{children}</body>
		</html>
	);
}
