import React from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange, }) {
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder="Find contacts by name"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                aria-label="Search contacts"    
            />
        </div>
    );
}  