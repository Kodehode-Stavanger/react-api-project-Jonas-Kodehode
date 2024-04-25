import { useContext } from "react";
import { ResultContext } from "../main";

export default function Information() {
    const { result } = useContext(ResultContext);

    return (
        <div>
            {result && result.length > 0 ? (
                <ul>
                    {result.map((item, index) => (
                        <div key={index}>
                            <li>
                                <strong>{item.name}</strong>
                            </li>
                            <li>
                                <p>Max lengde: {item.length}</p>
                            </li>
                            <li>
                                <p>Den kommer fra: {item.origin}</p>
                            </li>
                            {item.image_link ? (
                                <img
                                    style={{
                                        height: 300,
                                        width: 300,
                                        objectFit: "cover",
                                    }}
                                    src={item.image_link}
                                />
                            ) : null}
                            <li>
                                <p>Familievennlighet: {item.family_friendly}</p>
                            </li>
                            <li>
                                <p>Intelligens: {item.intelligence}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}
