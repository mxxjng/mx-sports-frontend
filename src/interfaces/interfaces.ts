export interface User {
    id: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    createdAt?: string;
    height?: number;
    weight?: number;
}

export interface UserExercise {
    id?: string;
    oneRepMax?: OneRepMax[];
    user?: User;
    exercise?: Exercise;
    exerciseData?: ExerciseData[];
}

export interface Exercise {
    id?: string;
    name?: string;
    description?: string;
    unit?: string;
    image?: string;
    exerciseCategory?: ExerciseCategory;
}

export interface ExerciseData {
    id?: string;
    date?: string;
    userExerciseDataSets?: UserExerciseDataSet[];
}

export interface UserExerciseDataSet {
    id?: string;
    reps?: number;
    weight?: number;
    setNumber?: number;
    userExerciseDataId?: string;
}

export interface ExerciseCategory {
    id?: string;
    name?: string;
}

export interface OneRepMax {
    id?: string;
    date?: string;
    weight?: number;
    userExerciseId?: string;
}
