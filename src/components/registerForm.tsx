import React, { useState } from 'react';

const RegisterForm = ({ registerUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    height: 0,
    weight: 0,
    gender: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
          placeholder="E-Mail"
          type="text"
          required
          onChange={handleInput}
          name="email"
        />
        <input
          className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
          placeholder="Passwort"
          type="password"
          required
          onChange={handleInput}
          name="password"
        />
        <input
          className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
          placeholder="Vorname"
          type="text"
          required
          onChange={handleInput}
          name="firstName"
        />
        <input
          className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
          placeholder="Nachname"
          type="text"
          required
          onChange={handleInput}
          name="lastName"
        />
        <input
          className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
          placeholder="Größe"
          type="number"
          min={1}
          required
          onChange={handleInput}
          name="height"
        />
        <input
          className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
          placeholder="Gewicht"
          type="number"
          min={1}
          required
          onChange={handleInput}
          name="weight"
        />
        <select name="gender" id="" onChange={handleInput}>
          <option value="MALE"></option>
          <option value="FEMALE"></option>
        </select>
        <button
          type="submit"
          className="p-2 border border-primary rounded-md w-full text-headline"
        >
          Jetzt registrieren
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
