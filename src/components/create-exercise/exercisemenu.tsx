import { useFetch } from "../../hooks/fetchData";
import { API_URL } from "../../utils/constants";
import { Exercise } from "../../interfaces/interfaces";
import { createUserExercise } from "../../utils/utils";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "../spinner";

const ExerciseMenu = ({ activeMenu, selectedCategory, setActiveMenu }) => {
    const { status, data, error } = useFetch<Exercise[]>(
        `${API_URL}/api/v1/exercise`,
        "GET"
    );

    return (
        <AnimatePresence>
            {activeMenu === "exercises" && (
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
                            Übung auswählen -{" "}
                            <span className="text-primary">
                                {selectedCategory}
                            </span>
                        </h2>
                    </div>
                    {data ? (
                        <div>
                            {data
                                .filter(
                                    (f) =>
                                        f.exerciseCategory.name ===
                                        selectedCategory
                                )
                                .map((d) => {
                                    return (
                                        <div
                                            className="text-headline px-2 py-3 bg-bgHighlight rounded-md mb-2 cursor-pointer"
                                            key={d.id}
                                            onClick={() =>
                                                createUserExercise(d.id)
                                            }
                                        >
                                            <p className="text-headline font-text font-semibold">
                                                {d.name}
                                            </p>
                                        </div>
                                    );
                                })}
                        </div>
                    ) : (
                        <div className="flex justify-center my-4">
                            <Spinner />
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default ExerciseMenu;
