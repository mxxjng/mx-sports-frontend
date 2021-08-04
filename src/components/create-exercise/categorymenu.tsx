import { useFetch } from "../../hooks/fetchData";
import { API_URL } from "../../utils/constants";
import { ExerciseCategory } from "../../interfaces/interfaces";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "../spinner";

const CategoryMenu = ({ activeMenu, setCategory, setActiveMenu }) => {
    const { status, data, error } = useFetch<ExerciseCategory[]>(
        `${API_URL}/api/v1/exercise/category`,
        "GET"
    );

    return (
        <AnimatePresence>
            {activeMenu === "main" && (
                <motion.div
                    initial={{ opacity: 0, translateX: -200 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: -200 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full"
                >
                    <h2 className="text-headline font-headline text-xl mb-4">
                        Kategorie auswählen
                    </h2>
                    {data ? (
                        <div>
                            {data.map((d) => {
                                return (
                                    <div
                                        key={d.id}
                                        className="flex justify-between items-center px-2 py-3 bg-bgHighlight rounded-md mb-2 cursor-pointer"
                                        onClick={() => {
                                            setActiveMenu("exercises");
                                            setCategory(d.name);
                                        }}
                                    >
                                        <p className="text-headline font-text font-semibold">
                                            {d.name}
                                        </p>
                                        <p className="text-headline font-text font-semibold">
                                            ❯
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
export default CategoryMenu;
