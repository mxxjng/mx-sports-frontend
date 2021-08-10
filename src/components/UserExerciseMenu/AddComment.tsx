import { motion, AnimatePresence } from "framer-motion";
import { deleteUserExercise } from "../../utils/utils";
import { useState } from "react";
import Input from "../Form/Input";

const AddComment = ({ activeMenu, setActiveMenu, exerciseId }) => {
    const [message, setMessage] = useState("");

    const handleInput = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("training erstellt");
    };

    return (
        <AnimatePresence>
            {activeMenu === "comment" && (
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
                                Übungsanmerkung hinzufügen
                            </h2>
                        </div>
                        <p className="mb-3 text-sm md:text-base">
                            Füge eine Anmerkung zu deiner Übung hinzu.
                        </p>
                        <div
                            className="block box-border"
                            onSubmit={handleSubmit}
                        >
                            <form onSubmit={handleSubmit}>
                                <textarea
                                    className="bg-bg p-2 rounded-lg w-full text-headline border border-bgHighlight text-sm mb-2"
                                    onChange={(e) => handleInput(e)}
                                    value={message}
                                    placeholder="Schreibe etwas..."
                                    maxLength={450}
                                    rows={4}
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
export default AddComment;
