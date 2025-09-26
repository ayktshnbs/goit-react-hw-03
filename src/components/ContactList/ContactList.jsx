import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {  
    if (!contacts  || contacts.length === 0) {
        return <p className={styles.message}>No contacts available.</p>;
    }

    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <li key ={contact.id} className={styles.item}>
                    <ContactItem contact={contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}