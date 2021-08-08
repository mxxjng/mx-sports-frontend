import axios from "axios";
import { API_URL } from "./constants";
import { UserExerciseDataSet } from "../interfaces/interfaces";

export const createExerciseCategory = async (name: string) => {
    try {
        const res = await axios.post(`${API_URL}/api/v1/exercise/category`, {
            name,
        });
        if (res.data) {
            alert("Kategorie erstellt");
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
            alert("Übung erstellt");
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
};
