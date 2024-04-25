import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    const backgroundStyle = {
        backgroundImage: `url("src/images/catBackground.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
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
                Welcome to my cat race searching website
            </h1>
        </div>
    );
}
