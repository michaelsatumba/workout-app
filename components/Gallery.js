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
					<p>Person 1</p>
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
					<p>Person 2</p>
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
					<p>Person 3</p>
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
					<p>Person 4</p>
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
					<p>Person 5</p>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
