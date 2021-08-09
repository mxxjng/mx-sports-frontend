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
    unit,
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
                            <div className="flex justify-end cursor-pointer py-2">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                                    } flex p-2 rounded-md`}
                                                    key={d.id || d.setNumber}
                                                >
                                                    <p className="w-1/3 ">
                                                        {d.setNumber}
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
