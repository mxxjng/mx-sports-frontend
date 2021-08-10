import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Input from "../Form/Input";
import { createExercise } from "../../utils/requests";

const AddExerciseMenu = ({ activeMenu, setActiveMenu, categories }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        unit: "",
        exerciseCategoryId: "",
        image: "...",
    });

    const handleData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitExercise = (e) => {
        e.preventDefault();
        createExercise(formData);
    };

    console.log(formData);

    return (
        <AnimatePresence>
            {activeMenu === "exercise" && (
                <motion.div
                    initial={{ opacity: 0, translateX: 200 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: 200 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full"
                >
                    <div
                        className="flex items-center mb-4 cursor-pointer"
                        onClick={() => setActiveMenu("main")}
                    >
                        <button className="text-headline mr-2 font-headline">
                            ❮
                        </button>
                        <h2 className="text-headline font-headline text-xl">
                            Übung erstellen
                        </h2>
                    </div>
                    <div>
                        <form onSubmit={submitExercise}>
                            <Input
                                placeHolder="Übungsname"
                                type="text"
                                required
                                handleChange={handleData}
                                name="name"
                                value={formData.name}
                            />
                            <textarea
                                className="bg-bg p-2 rounded-lg w-full text-headline bg-bgHighlight border border-bgHighlight text-sm mb-2"
                                onChange={handleData}
                                value={formData.description}
                                placeholder="Schreibe etwas..."
                                maxLength={450}
                                rows={4}
                                name="description"
                                required
                            />
                            <select
                                name="exerciseCategoryId"
                                id="exerciseCategoryId"
                                className="w-full bg-bgHighlight px-2 py-3 rounded-md text-textColor mb-3"
                                placeholder="Kategorie"
                                onChange={handleData}
                                value={formData.exerciseCategoryId}
                                required
                            >
                                <option
                                    value=""
                                    defaultValue=""
                                    className="text-textColor"
                                >
                                    Kategorie auswählen...
                                </option>
                                {categories.map((c) => {
                                    return (
                                        <option
                                            key={c.id}
                                            value={c.id}
                                            className="text-textColor"
                                        >
                                            {c.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <select
                                name="unit"
                                id="unit"
                                className="w-full bg-bgHighlight px-2 py-3 rounded-md text-textColor mb-3"
                                placeholder="Einheit"
                                onChange={handleData}
                                value={formData.unit}
                                required
                            >
                                <option
                                    value=""
                                    defaultValue=""
                                    className="text-textColor"
                                >
                                    Einheit auswählen...
                                </option>

                                <option value="KG" className="text-textColor">
                                    Kilogramm
                                </option>
                                <option
                                    value="Seconds"
                                    className="text-textColor"
                                >
                                    Sekunden
                                </option>
                            </select>
                            <button className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary">
                                Übung erstellen
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default AddExerciseMenu;
