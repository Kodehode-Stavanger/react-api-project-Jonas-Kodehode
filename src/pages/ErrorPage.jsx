export default function ErrorPage() {
    const backgroundStyle = {
        backgroundImage: `url("https://github.com/Jonas-Kodehode/Cat-race-search/blob/main/src/images/cat404.jpg?raw=true")`,
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
