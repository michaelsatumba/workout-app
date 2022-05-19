import Image from "next/image";
import React from "react";

function Gallery() {
    return (
        <div className="">
            <div className="flex justify-center space-x-2 my-10">
                <div className="flex flex-col items-center w-48	">
                    <div className="h-20 w-20 relative">
                        <Image src="/image1.webp" alt="main image" layout="fill" objectFit="cover" />
                    </div>
                    <p>Michael Satumba</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <div className="h-20 w-20 relative">
                        <Image src="/image1.webp" alt="main image" layout="fill" objectFit="cover" />
                    </div>
                    <p>Damon Chen</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <div className="h-20 w-20 relative">
                        <Image src="/image1.webp" alt="main image" layout="fill" objectFit="cover" />
                    </div>
                    <p>Anmol Burmy</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <div className="h-20 w-20 relative">
                        <Image src="/image1.webp" alt="main image" layout="fill" objectFit="cover" />
                    </div>
                    <p>Jaime Walker</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <div className="h-20 w-20 relative">
                        <Image src="/image1.webp" alt="main image" layout="fill" objectFit="cover" />
                    </div>
                    <p>Siu Lam Ng</p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
