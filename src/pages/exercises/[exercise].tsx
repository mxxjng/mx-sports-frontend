import Head from "next/head";

import Layout from "../../components/layout";
import Timer from "../../components/timer";
import Spinner from "../../components/spinner";
import Chart from "../../components/chart";
import DeleteExercise from "../../components/delete-exercise/deleteExercise";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import { useFetch } from "../../hooks/fetchData";
import { API_URL } from "../../utils/constants";
import { UserExercise } from "../../interfaces/interfaces";
import { useState } from "react";
import UserExerciseMenu from "../../components/user-exercise-menu/userExerciseMenu";
import TrainingMenu from "../../components/training-menu/trainingMenu";
import { formatDate } from "../../utils/utils";

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

    const currentTrainingData = setCurrentTrainingData(currentTraining);
    const lastTrainingData = setLastTrainingData(currentTraining);

    console.log(lastTrainingData);

    function setLastTrainingData(id) {
        let index = data?.exerciseData.findIndex((i) => i.id === id);
        return data?.exerciseData[index + 1];
    }

    function setCurrentTrainingData(id) {
        return data?.exerciseData.find((f) => f.id === id);
    }
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
                    <div className="max-w-7xl mx-auto px-4 mb-40">
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
                                        prevTrainingData={lastTrainingData}
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
                                        <p className="text-textColor text-sm md:text-base">
                                            {data.exercise.description}
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="text-lg text-headline font-text font-semibold">
                                            Aktuelle Maximalkraft:
                                        </h2>
                                        <div>
                                            {data.oneRepMax.length > 0 ? (
                                                <div>
                                                    <p className="font-semibold">
                                                        {
                                                            data.oneRepMax[
                                                                data.oneRepMax
                                                                    .length - 1
                                                            ].weight
                                                        }{" "}
                                                        {data?.exercise?.unit}
                                                    </p>
                                                </div>
                                            ) : (
                                                <p className="text-sm md:text-base">
                                                    Trage jetzt deinen
                                                    Maximalversuch ein.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="text-lg text-headline font-text font-semibold">
                                            Maximalkraft Verlauf:
                                        </h2>
                                        {data.oneRepMax.length > 0 ? (
                                            <Chart
                                                data={data.oneRepMax.map(
                                                    (d) => {
                                                        return {
                                                            value: d.weight,
                                                            date: d.date.split(
                                                                "T"
                                                            )[0],
                                                            label: formatDate(
                                                                d.date.split(
                                                                    "T"
                                                                )[0]
                                                            ),
                                                        };
                                                    }
                                                )}
                                                label={data.exercise.unit}
                                                minValue={0}
                                                maxValue={100}
                                                height={200}
                                            />
                                        ) : (
                                            <p className="text-sm md:text-base">
                                                Trage jetzt deinen
                                                Maximalversuch ein.
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <h2 className="text-lg text-headline font-text font-semibold mb-1">
                                            Trainingseinheiten:
                                        </h2>
                                        {data.exerciseData.length > 0 ? (
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
                                                            <div className="mb-2">
                                                                <svg
                                                                    width="22"
                                                                    height="11"
                                                                    viewBox="0 0 22 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.81814 1H4.27269C4.12802 1 3.98929 1.05747 3.88699 1.15976C3.7847 1.26205 3.72723 1.40079 3.72723 1.54545V9.54545C3.72723 9.61708 3.74134 9.68801 3.76875 9.75419C3.79617 9.82037 3.83634 9.8805 3.88699 9.93115C3.93764 9.9818 3.99777 10.022 4.06395 10.0494C4.13013 10.0768 4.20106 10.0909 4.27269 10.0909H6.81814C6.88977 10.0909 6.9607 10.0768 7.02688 10.0494C7.09306 10.022 7.15319 9.9818 7.20384 9.93115C7.25449 9.8805 7.29467 9.82037 7.32208 9.75419C7.34949 9.68801 7.3636 9.61708 7.3636 9.54545V1.54545C7.3636 1.40079 7.30613 1.26205 7.20384 1.15976C7.10155 1.05747 6.96281 1 6.81814 1V1Z"
                                                                        stroke="#7668CB"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M17.7273 1H15.1818C15.0371 1 14.8984 1.05747 14.7961 1.15976C14.6938 1.26205 14.6364 1.40079 14.6364 1.54545V9.54545C14.6364 9.61708 14.6505 9.68801 14.6779 9.75419C14.7053 9.82037 14.7455 9.8805 14.7961 9.93115C14.8468 9.9818 14.9069 10.022 14.9731 10.0494C15.0392 10.0768 15.1102 10.0909 15.1818 10.0909H17.7273C17.7989 10.0909 17.8698 10.0768 17.936 10.0494C18.0022 10.022 18.0623 9.9818 18.113 9.93115C18.1636 9.8805 18.2038 9.82037 18.2312 9.75419C18.2586 9.68801 18.2727 9.61708 18.2727 9.54545V1.54545C18.2727 1.40079 18.2152 1.26205 18.113 1.15976C18.0107 1.05747 17.8719 1 17.7273 1V1Z"
                                                                        stroke="#7668CB"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M1 7.72727V3.36363C1 3.21897 1.05747 3.08023 1.15976 2.97794C1.26205 2.87564 1.40079 2.81818 1.54545 2.81818H3.18182C3.32648 2.81818 3.46522 2.87564 3.56751 2.97794C3.66981 3.08023 3.72727 3.21897 3.72727 3.36363V7.72727C3.72727 7.87193 3.66981 8.01067 3.56751 8.11296C3.46522 8.21525 3.32648 8.27272 3.18182 8.27272H1.54545C1.40079 8.27272 1.26205 8.21525 1.15976 8.11296C1.05747 8.01067 1 7.87193 1 7.72727V7.72727Z"
                                                                        stroke="#7668CB"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M21 7.72727V3.36363C21 3.21897 20.9425 3.08023 20.8402 2.97794C20.7379 2.87564 20.5992 2.81818 20.4545 2.81818H18.8182C18.6735 2.81818 18.5348 2.87564 18.4325 2.97794C18.3302 3.08023 18.2727 3.21897 18.2727 3.36363V7.72727C18.2727 7.87193 18.3302 8.01067 18.4325 8.11296C18.5348 8.21525 18.6735 8.27272 18.8182 8.27272H20.4545C20.5992 8.27272 20.7379 8.21525 20.8402 8.11296C20.9425 8.01067 21 7.87193 21 7.72727V7.72727Z"
                                                                        stroke="#7668CB"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M7.36365 5.54541H14.6364"
                                                                        stroke="#7668CB"
                                                                        stroke-width="1.5"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <p className="text-sm whitespace-nowrap">
                                                                {formatDate(
                                                                    d.date.split(
                                                                        "T"
                                                                    )[0]
                                                                )}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <p className="text-sm md:text-base">
                                                Trage jetzt ein Training ein
                                            </p>
                                        )}
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
