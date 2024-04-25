export default function ErrorPage() {
    const backgroundStyle = {
        backgroundImage: `url("src/images/cat404.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div style={backgroundStyle}></div>;
}
