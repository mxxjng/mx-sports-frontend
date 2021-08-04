import axios from "axios";
import { API_URL } from "./constants";

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

export const createUserExercise = async (id) => {
    try {
        const res = await axios.post(`${API_URL}/api/v1/userexercise/${id}`);
        if (res.data) {
            alert("Übung erstellt " + id);
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteUserExercise = async (id) => {
    try {
        const res = await axios.delete(`${API_URL}/api/v1/userexercise/${id}`);
        if (res.data) {
            alert("Übung gelöscht " + id);
            window.location.pathname = "/exercises";
        }
    } catch (error) {
        console.log(error);
    }
};

export const createOneRepMax = async (id, payLoad) => {
    console.log(payLoad);
    try {
        const res = await axios.post(
            `${API_URL}/api/v1/userexercise/onerepmax/${id}`,
            {
                date: payLoad.date,
                weight: payLoad.weight,
            }
        );
        if (res.data) {
            alert("1 RM Erstellt");
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
};
