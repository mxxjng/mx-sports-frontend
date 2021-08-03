import React, { createContext, useState, useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { setAuthToken } from "../utils/utils";
import { API_URL } from "../utils/constants";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const loadUser = async () => {
            try {
                let token = localStorage.getItem("mx-token");
                setAuthToken(token);

                let res = await axios.get(`${API_URL}/api/v1/user/auth/user`);

                if (res.data) {
                    setUser(res.data);
                }
            } catch (error) {
                setError(error);
            }
        };
        loadUser();
    }, []);

    const logout = () => {
        localStorage.removeItem("mx-token");
        setUser(null);
        delete axios.defaults.headers.common["Authorization"];
        window.location.pathname = "/login";
    };

    return (
        <AuthContext.Provider value={{ user, error, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
