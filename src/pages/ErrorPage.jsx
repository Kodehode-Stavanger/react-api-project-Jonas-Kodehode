export default function ErrorPage() {
    const backgroundStyle = {
        backgroundImage: `url("src/images/cat404.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div style={backgroundStyle}></div>;
}
