import Image from 'next/image';
import React from 'react';
import NavBar from './NavBar';

function Gallery() {
	return (
		<div className="">
			<NavBar />

			<div className="flex space-x-2 my-2">
				<div>
					<div className="h-20 w-20 relative">
						<Image
							src="/image1.webp"
							alt="main image"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<p>Michael Satumba</p>
				</div>
				<div>
					<div className="h-20 w-20 relative">
						<Image
							src="/image1.webp"
							alt="main image"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<p>Damon Chen</p>
				</div>
				<div>
					<div className="h-20 w-20 relative">
						<Image
							src="/image1.webp"
							alt="main image"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<p>Anmol Burmy</p>
				</div>
				<div>
					<div className="h-20 w-20 relative">
						<Image
							src="/image1.webp"
							alt="main image"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<p>Jaime Walker</p>
				</div>
				<div>
					<div className="h-20 w-20 relative">
						<Image
							src="/image1.webp"
							alt="main image"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<p>Siu Lam Ng</p>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
