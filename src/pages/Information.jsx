import { useContext } from "react";
import { ResultContext } from "../main";
import { useParams } from "react-router-dom";

export default function Information() {
    const { result } = useContext(ResultContext);

    return (
        <div
            style={{
                fontFamily: "Roboto",
                backgroundColor: "black",
            }}
        >
            {result && result.length > 0 ? (
                <ul>
                    {result.map((item) => (
                        <div
                            key={item.name}
                            style={{
                                width: "100vw",
                                fontSize: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                            }}
                        >
                            <h1>All values have a max of 5</h1>
                            <li>
                                <strong>{item.name}</strong>
                            </li>
                            <li>
                                <p>Origin: {item.origin}</p>
                            </li>
                            <li>
                                <p>Length: {item.length}</p>
                            </li>
                            <li>
                                <p>
                                    Weight from {item.min_weight} lbs to{" "}
                                    {item.max_weight} lbs
                                </p>
                            </li>
                            <li>
                                <p>
                                    Life expectancy from{" "}
                                    {item.min_life_expectancy} years to{" "}
                                    {item.max_life_expectancy} years
                                </p>
                            </li>
                            <li>
                                <p>Shedding: {item.shedding}</p>
                            </li>
                            <li>
                                <p>Grooming: {item.grooming}</p>
                            </li>
                            <li>
                                <p>Playfulness: {item.playfulness}</p>
                            </li>
                            <li>
                                <p>
                                    Family-friendliness: {item.family_friendly}
                                </p>
                            </li>
                            <li>
                                <p>
                                    Children friendly: {item.children_friendly}
                                </p>
                            </li>
                            <li>
                                <p>Intelligence: {item.intelligence}</p>
                            </li>
                            {item.image_link ? (
                                <img
                                    style={{
                                        height: 300,
                                        width: 300,
                                        backgroundSize: "cover",
                                        border: "5px white solid",
                                    }}
                                    src={item.image_link}
                                />
                            ) : null}
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}
