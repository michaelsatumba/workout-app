import React from 'react';
import Image from 'next/image';

function Poster() {
	return (
		<div className="flex flex-col items-center">
			<div>
				<p className="font-bold text-3xl py-5">Project Poster</p>
			</div>
			<div className="h-96 w-64 relative">
				<Image
					src="/workout-app.png"
					alt="main image"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	);
}

export default Poster;
