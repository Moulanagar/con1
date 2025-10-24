import React, { createContext, useContext, useState, useEffect } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fake API fetch
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map(u => ({
          id: u.id,
          name: u.name,
          phones: [u.phone]
        }));
        setContacts(formatted);
        setLoading(false);
      })
      .catch(() => {
        setContacts([
          { id: 1, name: 'Arham Khan', phones: ['9876543210'] },
          { id: 2, name: 'Sarah Ali', phones: ['9123456789'] },
        ]);
        setLoading(false);
      });
  }, []);

  // Add contact
    const addContact = (name, phone) => {
    name = name.trim();
    phone = phone.trim();

    if (!name || !phone) return alert('Please fill all fields');

    // Allow only digits for phone numbers (optional: limit length to 10-15)
    const phoneRegex = /^[0-9]{5,15}$/;
    if (!phoneRegex.test(phone)) {
        return alert('Phone number must contain only digits (5-15 characters)');
    }

    // Check if the person already exists
    const personIndex = contacts.findIndex(
        (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (personIndex !== -1) {
        // Person exists, check if phone already exists
        if (contacts[personIndex].phones.includes(phone)) {
        return alert('This phone number already exists for this person!');
        } else {
        const updatedContacts = [...contacts];
        updatedContacts[personIndex].phones.push(phone);
        setContacts(updatedContacts);
        return;
        }
    } else {
        // Name does not exist, check if phone exists anywhere else
        const phoneExists = contacts.some((c) => c.phones.includes(phone));
        if (phoneExists) return alert('Phone number already exists for another contact!');

        const newContact = { id: Date.now(), name, phones: [phone] };
        setContacts((prev) => [...prev, newContact]);
    }
    };


  // Delete a contact
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  // Filtered and sorted contacts
  const filteredContacts = contacts
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ContactContext.Provider
      value={{
        contacts,
        filteredContacts,
        search,
        setSearch,
        addContact,
        deleteContact,
        loading,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactContext);
}
