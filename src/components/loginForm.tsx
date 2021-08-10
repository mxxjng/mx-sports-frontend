import React, { useState } from "react";
import Input from "./Form/Input";

const LoginForm = ({ loginUser }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(formData);
    };

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                <button
                    type="submit"
                    className="px-2 py-3 bg-primary rounded-md w-full text-headline font-headline"
                >
                    Jetzt einloggen
                </button>
            </form>
        </>
    );
};

export default LoginForm;
