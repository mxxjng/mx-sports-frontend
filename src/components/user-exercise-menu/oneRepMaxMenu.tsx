import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createOneRepMax } from "../../utils/utils";
import Input from "../form/input";

const OneRepMaxMenu = ({ activeMenu, setActiveMenu, exerciseId }) => {
    const [formData, setFormData] = useState({
        weight: "",
        date: "",
    });

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createOneRepMax(exerciseId, {
            weight: parseInt(formData.weight),
            date: formData.date,
        });
    };

    console.log(formData);

    return (
        <AnimatePresence>
            {activeMenu === "oneRepMax" && (
                <motion.div
                    initial={{ opacity: 0, translateX: 200 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: 200 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full"
                >
                    <div className=" box-border">
                        <div
                            className="flex items-center mb-3 cursor-pointer"
                            onClick={() => setActiveMenu("main")}
                        >
                            <button className="text-headline mr-2 font-headline">
                                ❮
                            </button>
                            <h2 className="text-headline font-headline text-xl">
                                Maximalversuch hinzufügen
                            </h2>
                        </div>
                        <p className="mb-3 text-sm md:text-base">
                            Füge einen neuen Maximalversuch für deine Übung
                            hinzu.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input
                                className="w-full rounded-md bg-bgHighlight text-headline px-2 py-3 mb-3"
                                type="date"
                                id="start"
                                name="date"
                                value={formData.date}
                                onChange={handleInput}
                                min="2010-01-01"
                                max="2030-12-31"
                                required
                            />
                            <Input
                                placeHolder="Gewicht (In KG)"
                                type="number"
                                required
                                handleChange={handleInput}
                                name="weight"
                                value={formData.weight}
                            />
                            <button
                                className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary"
                                type="submit"
                            >
                                Hinzufügen
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default OneRepMaxMenu;
