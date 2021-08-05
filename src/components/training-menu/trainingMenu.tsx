import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Input from "../form/input";
import TrainingMainMenu from "./trainingMainMenu";
import {
    createTrainingSet,
    formatDate,
    calculateWorkloadDifference,
    calculateWorkload,
} from "../../utils/utils";

const TrainingMenu = ({
    isOpen,
    close,
    trainingData,
    userexerciseId,
    prevTrainingData,
}) => {
    const [showLastTraining, setShowLastTraining] = useState(false);
    const [activeMenu, setActiveMenu] = useState("main");
    const [formData, setFormData] = useState({
        reps: "",
        weight: "",
    });
    const [exerciseSets, setExerciseSets] = useState(
        () => trainingData?.userExerciseDataSets || []
    );
    useEffect(() => {
        setExerciseSets(trainingData?.userExerciseDataSets || []);
    }, [trainingData]);

    console.log(exerciseSets);

    const workload = calculateWorkload(exerciseSets);
    const workloadDifference = calculateWorkloadDifference(
        workload,
        prevTrainingData?.userExerciseDataSets
    );

    console.log(workloadDifference);

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

    return (
        <div>
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
                            className="w-full md:w-6/12 h-5/6 bg-bg rounded-t-2xl md:rounded-xl p-4 overflow-x-hidden overflow-y-auto"
                            initial={{ opacity: 0, translateY: 200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 200 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="block md:hidden bg-bgHighlight w-20 h-1 rounded-md mx-auto"></div>
                            <p
                                className="text-right text-headline font-headline cursor-pointer"
                                onClick={() => {
                                    close();
                                    setActiveMenu("main");
                                    setFormData({ weight: "", reps: "" });
                                }}
                            >
                                X
                            </p>
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
                                                    } flex p-2 rounded-md`}
                                                    key={d.id || d.setNumber}
                                                >
                                                    <p className="w-1/3 ">
                                                        {d.setNumber}
                                                    </p>
                                                    <p className="w-1/3 ">
                                                        {d.weight}
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
