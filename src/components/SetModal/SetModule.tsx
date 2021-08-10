import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Input from "../Form/Input";

const SetModule = ({ isOpen, close, set, setNumber, deleteSet, updateSet }) => {
    const [reps, setReps] = useState(() => set?.reps);
    const [weight, setweight] = useState(() => set?.weight);

    useEffect(() => {
        setReps(set?.reps);
        setweight(set?.weight);
    }, [set]);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
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
                            <div className="flex justify-end ">
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer"
                                    onClick={() => {
                                        close();
                                    }}
                                >
                                    <path
                                        d="M2.34415 0.83042C2.14249 0.63565 1.8724 0.527878 1.59205 0.530314C1.3117 0.53275 1.04352 0.6452 0.845279 0.843445C0.647034 1.04169 0.534584 1.30987 0.532148 1.59022C0.529712 1.87056 0.637484 2.14066 0.832254 2.34231L7.00707 8.51713L0.831185 14.692C0.729062 14.7906 0.647605 14.9086 0.591568 15.039C0.53553 15.1695 0.506035 15.3098 0.504801 15.4518C0.503567 15.5937 0.530621 15.7345 0.584383 15.8659C0.638145 15.9973 0.717538 16.1167 0.817932 16.2171C0.918325 16.3175 1.03771 16.3969 1.16911 16.4507C1.30052 16.5044 1.44131 16.5315 1.58328 16.5302C1.72526 16.529 1.86556 16.4995 1.99601 16.4435C2.12646 16.3874 2.24445 16.306 2.34308 16.2038L8.51897 10.029L14.6938 16.2038C14.8954 16.3986 15.1655 16.5064 15.4459 16.504C15.7262 16.5015 15.9944 16.3891 16.1927 16.1908C16.3909 15.9926 16.5034 15.7244 16.5058 15.4441C16.5082 15.1637 16.4005 14.8936 16.2057 14.692L10.0309 8.51713L16.2057 2.34231C16.4005 2.14066 16.5082 1.87056 16.5058 1.59022C16.5034 1.30987 16.3909 1.04169 16.1927 0.843445C15.9944 0.6452 15.7262 0.53275 15.4459 0.530314C15.1655 0.527878 14.8954 0.63565 14.6938 0.83042L8.51897 7.00524L2.34415 0.829351V0.83042Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="text-center box-border">
                                <h2 className="text-headline text-xl font-headline mb-2">
                                    Satz bearbeiten
                                </h2>
                            </div>
                            <div className="block box-border">
                                <div className="flex mt-2">
                                    <p className="w-2/12 ">Satz</p>
                                    <p className="w-5/12 px-1">Gewicht</p>
                                    <p className="w-5/12 px-1">WDH</p>
                                </div>
                                <form>
                                    <div className={`flex py-2 rounded-md`}>
                                        <div className="w-2/12 flex items-center">
                                            <p className="text-primary font-headline text-2xl">
                                                {setNumber}
                                            </p>
                                        </div>
                                        <div className="w-5/12 px-1">
                                            <Input
                                                placeHolder="Gewicht"
                                                type="number"
                                                required
                                                handleChange={(e) =>
                                                    setweight(e.target.value)
                                                }
                                                name="weight"
                                                value={weight}
                                                min={1}
                                                className="w-full rounded-md bg-bgHighlight text-headline px-2 py-3"
                                            />
                                        </div>
                                        <div className="w-5/12 px-1">
                                            <Input
                                                placeHolder="Wiederholungen"
                                                type="number"
                                                required
                                                handleChange={(e) =>
                                                    setReps(e.target.value)
                                                }
                                                name="reps"
                                                value={reps}
                                                min={1}
                                                className="w-full rounded-md bg-bgHighlight text-headline px-2 py-3"
                                            />
                                        </div>
                                    </div>
                                    <div className="block box-border my-2">
                                        <button
                                            className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md border border-danger "
                                            onClick={(e) => {
                                                deleteSet(e, set?.id);
                                                close();
                                            }}
                                        >
                                            Satz löschen
                                        </button>
                                        <button
                                            className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary"
                                            onClick={(e) => {
                                                updateSet(
                                                    e,
                                                    set?.id,
                                                    weight,
                                                    reps
                                                );
                                                close();
                                            }}
                                        >
                                            Speichern
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
export default SetModule;
