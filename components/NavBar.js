import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NavBar() {
	return (
		<div className="py-5">
			<div className="h-32 w-32 ml-5 relative">
				<Image
					src="/image1.webp"
					alt="main image"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<Link href="/">
				<p>Project Team and Poster</p>
			</Link>

			<Link href="/Research">
				<p>Design Research</p>
			</Link>

			<Link href="/Prototype">
				<p>Design Prototyping</p>
			</Link>
		</div>
	);
}

export default NavBar;
