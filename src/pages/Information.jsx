import { useContext } from "react";
import { ResultContext } from "../main";

export default function Information() {
    const { result } = useContext(ResultContext);

    return (
        <div
            style={{
                fontFamily: "Roboto",
                backgroundColor: "black",
                minHeight: "100vh",
            }}
        >
            <ul>
                {result && result.length > 0 ? (
                    result.map((item) => (
                        <div
                            key={item.name}
                            style={{
                                minWidth: "100vw",
                                fontSize: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                backgroundColor: "FFFFFF",
                            }}
                        >
                            <h1>All values have a max of 5</h1>
                            <li>
                                <strong>{item.name}</strong>
                            </li>
                            <li>Origin: {item.origin}</li>
                            <li>Length: {item.length}</li>
                            <li>
                                Weight: {item.min_weight} - {item.max_weight}{" "}
                                lbs
                            </li>
                            <li>
                                Life expectancy: {item.min_life_expectancy} -{" "}
                                {item.max_life_expectancy} years
                            </li>
                            <li>Shedding: {item.shedding}</li>
                            <li>Grooming: {item.grooming}</li>
                            <li>Playfulness: {item.playfulness}</li>
                            <li>Family-friendliness: {item.family_friendly}</li>
                            <li>Children friendly: {item.children_friendly}</li>
                            <li>Intelligence: {item.intelligence}</li>
                            {item.image_link && (
                                <img
                                    style={{
                                        height: 300,
                                        width: 300,
                                        backgroundSize: "cover",
                                        border: "5px white solid",
                                    }}
                                    src={item.image_link}
                                />
                            )}
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </ul>
        </div>
    );
}
