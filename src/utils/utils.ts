import axios from "axios";
import { API_URL } from "./constants";
import { UserExerciseDataSet } from "../interfaces/interfaces";

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

export const createTraining = async (id, date) => {
    try {
        const res = await axios.post(`${API_URL}/api/v1/exerciseData/${id}`, {
            date,
        });
        if (res.data) {
            alert("Training erstellt");
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
};

export const createTrainingSet = async (
    userExerciseId,
    trainingId,
    weight,
    reps,
    setNumber
) => {
    try {
        const res = await axios.post(
            `${API_URL}/api/v1/exercisedata/set/${userExerciseId}/${trainingId}`,
            {
                weight,
                reps,
                setNumber,
            }
        );
        if (res.data) {
            alert("Training erstellt");
        }
    } catch (error) {
        console.log(error);
    }
};

/**
 * formats a date string from 2020-04-28 -> 28.04.2020
 * @param {string} dateString
 * @returns {string}
 */
export const formatDate = (dateString: string): string => {
    let split = dateString.split("-");
    return `${split[2]}.${split[1]}.${split[0]}`;
};

/**
 * Calculates the difference between the current workout workload and the past workout workload
 * @param {number} currentWorkload
 * @param {array} prevTrainingData
 * @returns {number}
 */
export const calculateWorkloadDifference = (
    currentWorkload: number,
    prevTrainingData: UserExerciseDataSet[] | null
): number => {
    if (!prevTrainingData) return 0;
    return currentWorkload - calculateWorkload(prevTrainingData);
};

/**
 * Calculates the workload of an exercise by multiplying reps * weight + sets
 * @param {array} data
 * @returns {number}
 */
export const calculateWorkload = (data: UserExerciseDataSet[]): number => {
    return data.reduce((acc, currentVal) => {
        return (acc += currentVal.reps * currentVal.weight);
    }, 0);
};
