import axios from "axios";
import { API_URL } from "./constants";
import { UserExerciseDataSet } from "../interfaces/interfaces";

export const createExerciseCategory = async (name: string) => {
    try {
        const res = await axios.post(`${API_URL}/api/v1/exercise/category`, {
            name,
        });
        if (res.data) {
            console.log("Kategorie erstellt");
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
};

export const createExercise = async (formData) => {
    const { name, description, unit, exerciseCategoryId, image } = formData;

    try {
        const res = await axios.post(`${API_URL}/api/v1/exercise`, {
            name,
            description,
            unit,
            exerciseCategoryId,
            image,
        });
        if (res.data) {
            console.log("Übung erstellt");
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteWorkout = async (
    userExerciseId: string,
    exerciseDataId: string
) => {
    try {
        const res = await axios.delete(
            `${API_URL}/api/v1/exercisedata/${userExerciseId}/${exerciseDataId}`
        );

        if (res.data) {
            console.log("Training gelöscht");
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteWorkoutSet = async (
    userExerciseId: string,
    exerciseDataId: string,
    exerciseDataSetId: string
) => {
    try {
        const res = await axios.delete(
            `${API_URL}/api/v1/exercisedata/set/${userExerciseId}/${exerciseDataId}/${exerciseDataSetId}`
        );

        if (res.data) {
            console.log("Satz gelöscht");
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateWorkoutSet = async (
    userExerciseId: string,
    exerciseDataId: string,
    exerciseDataSetId: string,
    weight,
    reps
) => {
    try {
        const res = await axios.patch(
            `${API_URL}/api/v1/exercisedata/set/${userExerciseId}/${exerciseDataId}/${exerciseDataSetId}`,
            {
                weight,
                reps,
            }
        );

        if (res.data) {
            console.log("Satz geändert");
        }
    } catch (error) {
        console.log(error);
    }
};
