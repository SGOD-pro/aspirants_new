import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={`antialiased font-kodchasan`}>
			<Navbar />
			{children}
			<Footer/>
		</div>
	);
}
