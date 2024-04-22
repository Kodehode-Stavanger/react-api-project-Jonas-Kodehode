import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="landingPage">
                <Link to="/">Hjem</Link>
            </div>
            <div className="catSearch">
                <Link to="/catsearch">Søk etter katt</Link>
            </div>
            <div className="about">
                <Link to="/about">Om siden</Link>
            </div>
        </div>
    );
}
