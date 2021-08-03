import axios from "axios";

export const makeRequest = async (url, method, payLoad?) => {
    try {
        let res;
        payLoad
            ? (res = await axios.request({ url, method, data: payLoad }))
            : (res = await axios.request({ url, method }));
        return res;
    } catch (error) {
        return error;
    }
};

export const setAuthToken = (token: any) => {
    if (token) {
        axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const logout = () => {
    localStorage.removeItem("mx-token");
    delete axios.defaults.headers.common["Authorization"];
};
