import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import './App.css'

const INITIAL_CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
const [contacts, setContacts] = useState(() => {
  try {
    const fromStorage = localStorage.getItem("contacts");
    if (fromStorage) {
      return JSON.parse(fromStorage);
    }
    localStorage.setItem("contacts", JSON.stringify(INITIAL_CONTACTS));
    return INITIAL_CONTACTS;
  } catch (error) {
    console.error("Error parsing contacts from localStorage:", error);
    return INITIAL_CONTACTS;
  }
});

useEffect(() => {
  try {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } catch {
     // 
      // console.log(err);
  }
}, [contacts]);

const addContact = (newContact) => {
  const exists = contacts.some (
    c => c.name.toLowerCase() === newContact.name.toLowerCase()
  );
  if (exists) {
    alert(`${newContact.name} is already in contacts.`);
    return false;
  }
  
  setContacts(prev => [newContact, ...prev]);
  return true;
};

const deleteContact = (id) => {
  setContacts(prev => prev.filter(c => c.id !== id));
};

const handleFilterChange = value => {
  setFilter(value);
};
const getFiltered = () => {
  const normalized = filter.trim().toLocaleLowerCase();
  if (!normalized) return contacts;
  return contacts.filter(c => c.name.toLowerCase().includes(normalized));
};

return (
  <div className="container" role="application">
    <h1>Phonebook</h1>
    <ContactForm onAddContact={addContact} />
    <SearchBox value={filter} onChange={handleFilterChange} />
    <ContactList contacts={getFiltered()} onDelete={deleteContact} />
  </div>
);
}
  
