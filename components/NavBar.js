import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
    return (
        <div className="navbar">
            <div className="brand">
                <div className="h-20 w-20 relative">
                    <Image src="/logo.png" alt="main image" layout="fill" objectFit="cover" className="logo" />
                </div>
                <Link href="/">FitLink</Link>
            </div>
            <nav className="navbar-items">
                <ul className="main-nav">
                    <li>
                        <Link href="/">
                            <p>Project Team and Poster</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Research">
                            <p>Design Research</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Demo">
                            <p>Demo</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
