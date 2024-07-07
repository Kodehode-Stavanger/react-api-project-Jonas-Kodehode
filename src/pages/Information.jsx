import { useContext } from "react";
import { ResultContext } from "../main";
import styles from "./Information.module.css";

export default function Information() {
    const { result } = useContext(ResultContext);

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {result && result.length > 0 ? (
                    result.map((item) => (
                        <div key={item.name} className={styles.itemWrapper}>
                            <div className={styles.itemContainer}>
                                <h1 className={styles.header}>
                                    All values have a max of 5
                                </h1>
                                <li className={styles.listItem}>
                                    <strong>{item.name}</strong>
                                </li>
                                <li className={styles.listItem}>
                                    Origin: {item.origin}
                                </li>
                                <li className={styles.listItem}>
                                    Length: {item.length}
                                </li>
                                <li className={styles.listItem}>
                                    Weight: {item.min_weight} -{" "}
                                    {item.max_weight} lbs
                                </li>
                                <li className={styles.listItem}>
                                    Life expectancy: {item.min_life_expectancy}{" "}
                                    - {item.max_life_expectancy} years
                                </li>
                                <li className={styles.listItem}>
                                    Shedding: {item.shedding}
                                </li>
                                <li className={styles.listItem}>
                                    Grooming: {item.grooming}
                                </li>
                                <li className={styles.listItem}>
                                    Playfulness: {item.playfulness}
                                </li>
                                <li className={styles.listItem}>
                                    Family-friendliness: {item.family_friendly}
                                </li>
                                <li className={styles.listItem}>
                                    Children friendly: {item.children_friendly}
                                </li>
                                <li className={styles.listItem}>
                                    Intelligence: {item.intelligence}
                                </li>
                            </div>
                            {item.image_link && (
                                <div className={styles.imageContainer}>
                                    <img
                                        className={styles.image}
                                        src={item.image_link}
                                        alt={`${item.name}`}
                                    />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className={styles.noResults}>No results found.</p>
                )}
            </ul>
        </div>
    );
}
