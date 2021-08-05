import { motion, AnimatePresence } from "framer-motion";
import { createTraining } from "../../utils/utils";
import { useState } from "react";
import Input from "../form/input";

const AddTraining = ({ activeMenu, setActiveMenu, exerciseId }) => {
    const [date, setDate] = useState("");

    const handleInput = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTraining(exerciseId, date);
    };

    return (
        <AnimatePresence>
            {activeMenu === "training" && (
                <motion.div
                    initial={{ opacity: 0, translateX: 200 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: 200 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full"
                >
                    <div className="box-border">
                        <div
                            className="flex items-center mb-3 cursor-pointer"
                            onClick={() => setActiveMenu("main")}
                        >
                            <button className="text-headline mr-2 font-headline">
                                ❮
                            </button>
                            <h2 className="text-headline font-headline text-xl">
                                Trainingseinheit hinzufügen
                            </h2>
                        </div>
                        <p className="mb-3 text-sm md:text-base">
                            Füge eine neue Trainingseinheit für deine Übung
                            hinzu.
                        </p>
                        <div className="block box-border">
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="w-full rounded-md bg-bgHighlight text-headline px-2 py-3 mb-3"
                                    type="date"
                                    id="start"
                                    name="date"
                                    value={date}
                                    onChange={handleInput}
                                    min="2010-01-01"
                                    max="2030-12-31"
                                    required
                                />
                                <button
                                    className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary"
                                    type="submit"
                                >
                                    Hinzufügen
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default AddTraining;
