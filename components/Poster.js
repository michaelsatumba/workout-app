import React from "react";
import Image from "next/image";

function Poster() {
    return (
        <div className="flex flex-col items-center">
            <div>
                <p className="font-bold text-3xl py-5">Project Poster</p>
            </div>
            <div className="poster">
                <img src="/workout-app.png" alt="main image" />
            </div>
        </div>
    );
}

export default Poster;
