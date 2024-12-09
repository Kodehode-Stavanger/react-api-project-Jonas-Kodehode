export default function About() {
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
    };
    return (
        <div style={backgroundStyle}>
            <div
                style={{
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: "1.5rem",
                    width: "30ch",
                    marginLeft: "150px",
                }}
            >
                <h1>Welcome to CatBreedFinder!</h1>
                <p>
                    CatBreedFinder is the go-to place to explore and learn about
                    different cat breeds. Our website lets you find out if a
                    specific cat breed is right for you, making it easier to
                    choose the perfect companion. Made as a project for
                    Jobloop's Kodehode course.
                </p>
            </div>
        </div>
    );
}
