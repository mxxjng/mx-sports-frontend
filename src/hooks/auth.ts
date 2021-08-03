import { useState, useEffect } from "react";
import axios from "axios";
import { setAuthToken } from "../utils/utils";
import { API_URL } from "../utils/constants";

export const useLoadUser = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

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
    return { user, error };
};
