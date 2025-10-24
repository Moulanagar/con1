import React, { useState } from 'react';
import { useContacts } from './ContactContext';
import './App.css';

function App() {
  const { filteredContacts, search, setSearch, addContact, deleteContact, loading } = useContacts();
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newName.trim(), newPhone.trim());
    setNewName('');
    setNewPhone('');
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Fetching contacts… 🌟</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>📇 My Happy Contacts 😊</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search for a friend..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredContacts.length > 0 ? (
        <div className="row g-3">
          {filteredContacts.map((contact) => (
            <div key={contact.id} className="col-md-6">
              <div className="card contact-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title">{contact.name}</h5>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete "${contact.name}"?`)) {
                          deleteContact(contact.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mt-2">
                    {contact.phones.map((p, i) => (
                      <span key={i} className="phone-pill">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted py-3">
          ⚠️ No contact found 😢
        </div>
      )}

      <form className="mt-5" onSubmit={handleSubmit}>
        <h5>Add New Contact 🌈</h5>
        <div className="row g-2">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-success">
              Add 😊
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
