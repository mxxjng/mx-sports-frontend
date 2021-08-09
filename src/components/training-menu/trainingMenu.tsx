import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Input from "../form/input";
import {
    createTrainingSet,
    formatDate,
    calculateWorkloadDifference,
    calculateWorkload,
} from "../../utils/utils";
import {
    deleteWorkout,
    deleteWorkoutSet,
    updateWorkoutSet,
} from "../../utils/requests";
import SetModule from "../set-module/setModule";

const TrainingMenu = ({
    isOpen,
    close,
    trainingData,
    userexerciseId,
    prevTrainingData,
    unit,
}) => {
    const [showLastTraining, setShowLastTraining] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditSet, setOpenEditSet] = useState(false);
    const [currentSetId, setCurrentSetId] = useState("");
    const [currentSetNumber, setCurrentSetNumber] = useState(0);
    const [activeMenu, setActiveMenu] = useState("main");
    const [formData, setFormData] = useState({
        reps: "",
        weight: "",
    });
    const [exerciseSets, setExerciseSets] = useState(
        () => trainingData?.userExerciseDataSets || []
    );
    const workload = calculateWorkload(exerciseSets);
    const workloadDifference = calculateWorkloadDifference(
        workload,
        prevTrainingData?.userExerciseDataSets
    );

    const currentSet = getCurrentSet(currentSetId);

    useEffect(() => {
        setExerciseSets(trainingData?.userExerciseDataSets || []);
    }, [trainingData]);

    function getCurrentSet(id) {
        return exerciseSets.find((s) => s.id === id);
    }

    console.log(exerciseSets);

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addSet = (e) => {
        e.preventDefault();
        let sets = [...exerciseSets];
        let setNumber = Math.max(...sets.map((o, index) => index + 1)) + 1;
        console.log(typeof setNumber);
        if (setNumber === -Infinity) setNumber = 1;
        sets.push({
            setNumber: setNumber,
            weight: formData.weight,
            reps: formData.reps,
        });
        createTrainingSet(
            userexerciseId,
            trainingData?.id,
            parseInt(formData.weight),
            parseInt(formData.reps),
            setNumber
        );
        setExerciseSets(sets);
    };

    const deleteSet = (e, id) => {
        e.preventDefault();
        deleteWorkoutSet(userexerciseId, trainingData?.id, id);
        let sets = [...exerciseSets];
        let index = sets.findIndex((s) => s.id === id);
        sets.splice(index, 1);
        setExerciseSets(sets);
    };

    const updateSet = (e, id, weight, reps) => {
        e.preventDefault();
        updateWorkoutSet(
            userexerciseId,
            trainingData?.id,
            id,
            parseInt(weight),
            parseInt(reps)
        );
        let sets = [...exerciseSets];
        let index = sets.findIndex((s) => s.id === id);
        sets[index].reps = reps;
        sets[index].weight = weight;
        setExerciseSets(sets);
    };

    return (
        <div>
            <SetModule
                isOpen={openEditSet}
                close={() => setOpenEditSet(false)}
                set={currentSet}
                setNumber={currentSetNumber}
                deleteSet={deleteSet}
                updateSet={updateSet}
            />
            <AnimatePresence>
                {openDeleteModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed w-full h-full dark-opacity top-0 left-0 flex justify-center items-center z-very-highest"
                    >
                        <motion.div
                            initial={{ opacity: 0, translateY: 100 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 100 }}
                            transition={{ duration: 0.3 }}
                            className="w-full mx-4 md:mx-0 md:w-3/12 bg-bg rounded-xl px-4 py-6 overflow-x-hidden overflow-y-auto mb-8"
                        >
                            <div className="text-center box-border">
                                <h2 className="text-headline text-xl font-headline mb-2">
                                    Trainingseinheit löschen
                                </h2>
                                <p className="mb-4 text-sm">
                                    Möchtest du diese Trainingseinheit wirklich
                                    löschen?
                                </p>
                                <div className="block box-border">
                                    <button
                                        className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary"
                                        onClick={() =>
                                            deleteWorkout(
                                                userexerciseId,
                                                trainingData?.id
                                            )
                                        }
                                    >
                                        Ja
                                    </button>
                                    <button
                                        className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md border border-primary "
                                        onClick={() =>
                                            setOpenDeleteModal(false)
                                        }
                                    >
                                        Nein
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="wrapper"
                        className="fixed w-full h-full dark-opacity top-0 left-0 flex justify-center items-end md:items-center z-highest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            key="modal"
                            className="w-full md:w-10/12 lg:w-8/12 xl:w-6/12 h-5/6 bg-bg rounded-t-2xl md:rounded-xl p-4 overflow-x-hidden overflow-y-auto"
                            initial={{ opacity: 0, translateY: 200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 200 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="block md:hidden bg-bgHighlight w-20 h-1 rounded-md mx-auto"></div>
                            <div className="flex justify-between items-center py-2">
                                <div
                                    className="w-8 h-8 rounded-full relative cursor-pointer"
                                    onClick={() => setOpenDeleteModal(true)}
                                >
                                    <svg
                                        width="21"
                                        height="6"
                                        viewBox="0 0 21 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute align-avatar"
                                    >
                                        <path
                                            d="M2.80769 5.11538C2.19565 5.11538 1.60868 4.87225 1.17591 4.43948C0.743131 4.0067 0.5 3.41973 0.5 2.80769C0.5 2.19565 0.743131 1.60868 1.17591 1.17591C1.60868 0.743131 2.19565 0.5 2.80769 0.5C3.41973 0.5 4.0067 0.743131 4.43948 1.17591C4.87225 1.60868 5.11538 2.19565 5.11538 2.80769C5.11538 3.41973 4.87225 4.0067 4.43948 4.43948C4.0067 4.87225 3.41973 5.11538 2.80769 5.11538ZM10.5 5.11538C9.88796 5.11538 9.30099 4.87225 8.86821 4.43948C8.43544 4.0067 8.19231 3.41973 8.19231 2.80769C8.19231 2.19565 8.43544 1.60868 8.86821 1.17591C9.30099 0.743131 9.88796 0.5 10.5 0.5C11.112 0.5 11.699 0.743131 12.1318 1.17591C12.5646 1.60868 12.8077 2.19565 12.8077 2.80769C12.8077 3.41973 12.5646 4.0067 12.1318 4.43948C11.699 4.87225 11.112 5.11538 10.5 5.11538ZM18.1923 5.11538C17.5803 5.11538 16.9933 4.87225 16.5605 4.43948C16.1277 4.0067 15.8846 3.41973 15.8846 2.80769C15.8846 2.19565 16.1277 1.60868 16.5605 1.17591C16.9933 0.743131 17.5803 0.5 18.1923 0.5C18.8043 0.5 19.3913 0.743131 19.8241 1.17591C20.2569 1.60868 20.5 2.19565 20.5 2.80769C20.5 3.41973 20.2569 4.0067 19.8241 4.43948C19.3913 4.87225 18.8043 5.11538 18.1923 5.11538Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer"
                                    onClick={() => {
                                        close();
                                        setActiveMenu("main");
                                    }}
                                >
                                    <path
                                        d="M2.34415 0.83042C2.14249 0.63565 1.8724 0.527878 1.59205 0.530314C1.3117 0.53275 1.04352 0.6452 0.845279 0.843445C0.647034 1.04169 0.534584 1.30987 0.532148 1.59022C0.529712 1.87056 0.637484 2.14066 0.832254 2.34231L7.00707 8.51713L0.831185 14.692C0.729062 14.7906 0.647605 14.9086 0.591568 15.039C0.53553 15.1695 0.506035 15.3098 0.504801 15.4518C0.503567 15.5937 0.530621 15.7345 0.584383 15.8659C0.638145 15.9973 0.717538 16.1167 0.817932 16.2171C0.918325 16.3175 1.03771 16.3969 1.16911 16.4507C1.30052 16.5044 1.44131 16.5315 1.58328 16.5302C1.72526 16.529 1.86556 16.4995 1.99601 16.4435C2.12646 16.3874 2.24445 16.306 2.34308 16.2038L8.51897 10.029L14.6938 16.2038C14.8954 16.3986 15.1655 16.5064 15.4459 16.504C15.7262 16.5015 15.9944 16.3891 16.1927 16.1908C16.3909 15.9926 16.5034 15.7244 16.5058 15.4441C16.5082 15.1637 16.4005 14.8936 16.2057 14.692L10.0309 8.51713L16.2057 2.34231C16.4005 2.14066 16.5082 1.87056 16.5058 1.59022C16.5034 1.30987 16.3909 1.04169 16.1927 0.843445C15.9944 0.6452 15.7262 0.53275 15.4459 0.530314C15.1655 0.527878 14.8954 0.63565 14.6938 0.83042L8.51897 7.00524L2.34415 0.829351V0.83042Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-headline font-headline text-xl text-center">
                                Training{" "}
                                {formatDate(trainingData?.date?.split("T")[0])}
                            </h2>
                            <div className="mb-36 md:mb-4">
                                {exerciseSets.length > 0 ? (
                                    <div className="mb-4">
                                        <div className="flex my-2">
                                            <p className="w-1/3 font-semibold text-headline">
                                                Satz
                                            </p>
                                            <p className="w-1/3 font-semibold text-headline">
                                                Gewicht
                                            </p>
                                            <p className="w-1/3 font-semibold text-headline">
                                                WDH
                                            </p>
                                        </div>
                                        {exerciseSets.map((d, index) => {
                                            return (
                                                <div
                                                    className={`${
                                                        index % 2 === 0
                                                            ? `bg-bgHighlight`
                                                            : ``
                                                    } flex p-2 rounded-md cursor-pointer`}
                                                    key={d.id || d.setNumber}
                                                    onClick={() => {
                                                        setCurrentSetId(d.id);
                                                        setOpenEditSet(true);
                                                        setCurrentSetNumber(
                                                            index + 1
                                                        );
                                                    }}
                                                >
                                                    <p className="w-1/3 ">
                                                        {index + 1}
                                                    </p>
                                                    <p className="w-1/3 ">
                                                        {d.weight} {unit}
                                                    </p>
                                                    <p className="w-1/3 ">
                                                        {d.reps}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-center text-sm md:text-base my-2">
                                            Noch keinen Satz für das Training
                                            hinzugefügt.
                                        </p>
                                    </div>
                                )}
                                <div>
                                    {prevTrainingData && (
                                        <div>
                                            <div
                                                className="bg-bgHighlight p-2 rounded md flex justify-between items-center my-2"
                                                onClick={() =>
                                                    setShowLastTraining(
                                                        !showLastTraining
                                                    )
                                                }
                                            >
                                                <h3 className="text-headline font-text font-semibold text-sm">
                                                    Letztes Training anzeigen
                                                </h3>
                                                <p className="font-semibold text-headline">
                                                    {showLastTraining
                                                        ? `-`
                                                        : `+`}
                                                </p>
                                            </div>

                                            <div>
                                                <AnimatePresence>
                                                    {showLastTraining && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                translateY: 0,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                            }}
                                                        >
                                                            <div className="flex my-2">
                                                                <p className="w-1/3 font-semibold text-headline">
                                                                    Satz
                                                                </p>
                                                                <p className="w-1/3 font-semibold text-headline">
                                                                    Gewicht
                                                                </p>
                                                                <p className="w-1/3 font-semibold text-headline">
                                                                    WDH
                                                                </p>
                                                            </div>
                                                            {prevTrainingData?.userExerciseDataSets.map(
                                                                (d, index) => {
                                                                    return (
                                                                        <div
                                                                            className={`${
                                                                                index %
                                                                                    2 ===
                                                                                0
                                                                                    ? `bg-bgHighlight`
                                                                                    : ``
                                                                            } flex p-2 rounded-md`}
                                                                            key={
                                                                                d.id ||
                                                                                d.setNumber
                                                                            }
                                                                        >
                                                                            <p className="w-1/3 ">
                                                                                {
                                                                                    d.setNumber
                                                                                }
                                                                            </p>
                                                                            <p className="w-1/3 ">
                                                                                {
                                                                                    d.weight
                                                                                }
                                                                            </p>
                                                                            <p className="w-1/3 ">
                                                                                {
                                                                                    d.reps
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {exerciseSets.length > 0 && (
                                    <div className="my-2">
                                        <h3 className="text-headline font-text font-semibold">
                                            Trainings Workload:
                                        </h3>
                                        <p className=" text-2xl">
                                            <span className="text-primary font-semibold">
                                                {workload}
                                            </span>{" "}
                                            |{" "}
                                            {workloadDifference >= 0 ? (
                                                <span>
                                                    + {workloadDifference}
                                                </span>
                                            ) : (
                                                <span>
                                                    {" "}
                                                    {workloadDifference}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="fixed md:static bottom-0 left-0 w-full  p-4 md:p-0 bg-bg">
                                <form onSubmit={addSet}>
                                    <div className="flex">
                                        <Input
                                            className="w-1/2 rounded-md bg-bgHighlight text-headline px-2 py-3 mb-3 mr-1"
                                            placeHolder="Gewicht"
                                            type="number"
                                            required
                                            handleChange={handleInput}
                                            name="weight"
                                            value={formData.weight}
                                            min={1}
                                        />
                                        <Input
                                            className="w-1/2 rounded-md bg-bgHighlight text-headline px-2 py-3 mb-3 ml-1"
                                            placeHolder="Wiederholungen"
                                            type="number"
                                            required
                                            handleChange={handleInput}
                                            name="reps"
                                            value={formData.reps}
                                            min={1}
                                        />
                                    </div>
                                    <button
                                        className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary"
                                        type="submit"
                                    >
                                        Satz hinzufügen
                                    </button>
                                </form>
                            </div>
                            <div className="relative">
                                {/* 
                                
                                <TrainingMainMenu
                                    activeMenu={activeMenu}
                                    setActiveMenu={(menu) =>
                                        setActiveMenu(menu)
                                    }
                                />
                                */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default TrainingMenu;
