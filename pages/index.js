import Head from 'next/head';
import Image from 'next/image';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Poster from '../components/Poster';

export default function Home() {
	return (
		<div>
			<Header />
			<Gallery />
			<Poster />
		</div>
	);
}
