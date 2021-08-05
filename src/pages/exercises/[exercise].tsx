import Head from "next/head";

import Layout from "../../components/layout";
import Timer from "../../components/timer";
import Spinner from "../../components/spinner";
import DeleteExercise from "../../components/delete-exercise/deleteExercise";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import { useFetch } from "../../hooks/fetchData";
import { API_URL } from "../../utils/constants";
import { UserExercise } from "../../interfaces/interfaces";
import { useState } from "react";
import UserExerciseMenu from "../../components/user-exercise-menu/userExerciseMenu";
import TrainingMenu from "../../components/training-menu/trainingMenu";

export default function Exercise() {
    const [optionMenuOpen, setOptionMenuOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [trainingMenuOpen, setTrainingMenuOpen] = useState(false);
    const [currentTraining, setCurrentTraining] = useState("");
    const router = useRouter();
    const { exercise } = router.query;
    const auth = useAuth();
    const { status, data, error } = useFetch<UserExercise>(
        `${API_URL}/api/v1/userexercise/${exercise}`,
        "GET",
        [auth, exercise]
    );

    const setCurrentTrainingData = (id) => {
        return data?.exerciseData.find((f) => f.id === id);
    };
    const currentTrainingData = setCurrentTrainingData(currentTraining);
    console.log(data);
    console.log(currentTrainingData);

    if (auth.error) {
        router.push("/login");
    }

    if (auth.user) {
        return (
            <div>
                <Head>
                    <title>Exercise</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    <div className="max-w-7xl mx-auto px-4">
                        <div>
                            <div className="flex items-center">
                                <Timer />
                                <Timer timerTime={120} />
                                <Timer timerTime={180} />
                            </div>
                            {data ? (
                                <div>
                                    <div
                                        onClick={() => setOptionMenuOpen(true)}
                                        className="fixed w-14 h-14 z-50 rounded-full bottom-16  right-4 md:right-12 bg-primary flex items-center justify-center cursor-pointer"
                                    >
                                        <button className="font-headline text-headline text-xl">
                                            +
                                        </button>
                                    </div>
                                    <DeleteExercise
                                        exerciseId={data.id}
                                        isOpen={deleteModalOpen}
                                        closeModal={() =>
                                            setDeleteModalOpen(false)
                                        }
                                    />
                                    <UserExerciseMenu
                                        isOpen={optionMenuOpen}
                                        close={() => setOptionMenuOpen(false)}
                                        exerciseId={data.id}
                                    />
                                    <TrainingMenu
                                        userexerciseId={data.id}
                                        isOpen={trainingMenuOpen}
                                        close={() => setTrainingMenuOpen(false)}
                                        trainingData={currentTrainingData}
                                    />
                                    <div className="mb-4">
                                        <h1 className="text-2xl text-headline font-headline ">
                                            {data.exercise.name}
                                        </h1>
                                        <div className="mb-2">
                                            <p className="text-primary text-sm">
                                                {
                                                    data.exercise
                                                        .exerciseCategory.name
                                                }
                                            </p>
                                        </div>
                                        <p className="text-textColor text-sm">
                                            {data.exercise.description}
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="text-lg text-headline font-text font-semibold">
                                            Aktueller 1 RM:
                                        </h2>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="text-lg text-headline font-text font-semibold">
                                            1 RM Verlauf:
                                        </h2>
                                        <div className="flex overflow-x-auto">
                                            {data.oneRepMax.map((d) => {
                                                return (
                                                    <div
                                                        key={d.id}
                                                        className="bg-bgHighlight p-2 rounded-md mr-2"
                                                    >
                                                        <p className="text-xs whitespace-nowrap">
                                                            {
                                                                d.date.split(
                                                                    "T"
                                                                )[0]
                                                            }
                                                        </p>
                                                        <p className="text-headline font-semibold font-text whitespace-nowrap">
                                                            {d.weight}{" "}
                                                            {data.exercise.unit}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="text-lg text-headline font-text font-semibold">
                                            Trainingseinheiten:
                                        </h2>
                                        <div className="flex overflow-x-auto">
                                            {data.exerciseData.map((d) => {
                                                return (
                                                    <div
                                                        key={d.id}
                                                        className="bg-bgHighlight px-2 py-3 rounded-md mr-2"
                                                        onClick={() => {
                                                            setCurrentTraining(
                                                                d.id
                                                            );
                                                            setTrainingMenuOpen(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        <p className="text-sm whitespace-nowrap">
                                                            {
                                                                d.date.split(
                                                                    "T"
                                                                )[0]
                                                            }
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <p></p>
                                </div>
                            ) : (
                                <div className="flex justify-center my-4">
                                    <Spinner />
                                </div>
                            )}
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }

    return (
        <div className="flex justify-center my-4">
            <Spinner />
        </div>
    );
}
