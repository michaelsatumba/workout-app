import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
    return (
        <div className="navbar">
            <div className="brand">
                <Link href="/" className="logo">
                    Workout App
                </Link>
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
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
