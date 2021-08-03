import React, { useState } from "react";
import Input from "./form/input";

const RegisterForm = ({ registerUser }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        height: "",
        weight: "",
        gender: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(formData);
    };

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    console.log(formData);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    placeHolder="E-Mail"
                    type="text"
                    required
                    handleChange={handleInput}
                    name="email"
                    value={formData.email}
                />
                <Input
                    placeHolder="Passwort"
                    type="password"
                    required
                    handleChange={handleInput}
                    name="password"
                    value={formData.password}
                />
                <Input
                    placeHolder="Vorname"
                    type="text"
                    required
                    handleChange={handleInput}
                    name="firstName"
                    value={formData.firstName}
                />
                <Input
                    placeHolder="Nachname"
                    type="text"
                    required
                    handleChange={handleInput}
                    name="lastName"
                    value={formData.lastName}
                />
                <Input
                    placeHolder="Größe"
                    type="number"
                    required
                    handleChange={handleInput}
                    name="height"
                    value={formData.height}
                    min={1}
                />
                <Input
                    placeHolder="Gewicht"
                    type="number"
                    required
                    handleChange={handleInput}
                    name="weight"
                    value={formData.weight}
                    min={1}
                />
                <select
                    name="gender"
                    id="gender"
                    className="w-full bg-bgHighlight px-2 py-3 rounded-md text-textColor mb-2"
                    placeholder="Geschlecht"
                    onChange={handleInput}
                    value={formData.gender}
                >
                    <option value="" defaultValue="" className="text-textColor">
                        Geschlecht auswählen...
                    </option>
                    <option value="MALE" className="text-textColor">
                        Männlich
                    </option>
                    <option value="FEMALE" className="text-textColor">
                        Weiblich
                    </option>
                </select>
                <button
                    type="submit"
                    className="px-2 py-3 border border-primary rounded-md w-full text-headline font-bold"
                >
                    Jetzt registrieren
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
