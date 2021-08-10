import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Input from "../Form/Input";
import { createExerciseCategory } from "../../utils/requests";

const AddCategoryMenu = ({ activeMenu, setActiveMenu }) => {
    const [name, setName] = useState<string>("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const submitCategory = (e) => {
        e.preventDefault();

        if (name === "") {
            return;
        }

        createExerciseCategory(name);
    };

    return (
        <AnimatePresence>
            {activeMenu === "category" && (
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
                            Kategorie erstellen
                        </h2>
                    </div>
                    <div>
                        <form onSubmit={submitCategory}>
                            <Input
                                placeHolder="Kategorie Name"
                                type="text"
                                required
                                handleChange={handleName}
                                name="name"
                                value={name}
                            />
                            <button className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary">
                                Kategorie erstellen
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default AddCategoryMenu;
