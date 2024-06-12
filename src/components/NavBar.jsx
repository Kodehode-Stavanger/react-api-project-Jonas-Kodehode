import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <div
            className="navBar"
            style={{
                display: "flex",
                justifyContent: "space-around",
                fontFamily: "Roboto",
                backgroundColor: "black",
                padding: "10px",
            }}
        >
            <div className="landingPage">
                <Link to="/" className={styles.links}>
                    Home
                </Link>
            </div>
            <div className="catSearch">
                <Link to="/catsearch" className={styles.links}>
                    Search
                </Link>
            </div>
            <div className="about">
                <Link to="/about" className={styles.links}>
                    About
                </Link>
            </div>
        </div>
    );
}
