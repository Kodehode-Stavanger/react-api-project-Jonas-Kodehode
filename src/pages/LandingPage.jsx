import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    const backgroundStyle = {
        backgroundImage: `url("https://github.com/Jonas-Kodehode/Cat-race-search/blob/main/src/assets/catBackground.jpg?raw=true")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        color: "white",
        fontFamily: "Roboto",
    };

    return (
        <div style={backgroundStyle}>
            <h1 style={{ marginLeft: "100px" }}>
                Welcome to my cat breed searching website
            </h1>
        </div>
    );
}
