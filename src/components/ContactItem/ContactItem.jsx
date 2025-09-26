import React from "react";
import styles from "./ContactItem.module.css";

export default function ContactItem({ contact, onDelete }) {
    const { id, name, number } = contact;
    return (
        <div className={styles.card}>
            <div>
            <div className ={styles.name}  >{name}:</div>
            <div className ={styles.number} >{number}</div>
            </div>
            <div className = {styles.actions}>
            <button className={styles.delete} onClick={() => onDelete(id)} aria-label={`Delete ${name}`}>
                Delete
                </button>
            </div>        
        </div>    
    );
}
            