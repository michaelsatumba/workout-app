import Image from "next/image";
import React from "react";

function Gallery() {
    return (
        <div className="">
            <div className="flex justify-center space-x-2 my-10">
                <div className="flex flex-col items-center w-48	">
                    <p>Michael Satumba</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <p>Damon Chen</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <p>Anmol Burmy</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <p>Jaime Walker</p>
                </div>
                <div className="flex flex-col items-center w-48	">
                    <p>Siu Lam Ng</p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
