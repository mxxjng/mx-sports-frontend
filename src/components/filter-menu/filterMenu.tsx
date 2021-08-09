import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CategoryMenu from "../create-exercise/categorymenu";
import { API_URL } from "../../utils/constants";
import { useFetch } from "../../hooks/fetchData";
import { ExerciseCategory } from "../../interfaces/interfaces";

const FilterMenu = ({ isOpen, close, setFilter, results, filter }) => {
    const [activeMenu, setActiveMenu] = useState("main");
    const { status, data, error } = useFetch<ExerciseCategory[]>(
        `${API_URL}/api/v1/exercise/category`,
        "GET"
    );

    console.log(data);

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
                            className="w-full md:w-6/12 h-3/6 bg-bg rounded-t-2xl md:rounded-xl p-4 overflow-x-hidden overflow-y-auto"
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
                            <div className="relative">
                                <div>
                                    <p className="font-semibold text-xss">
                                        ÜBUNGEN FILTERN
                                    </p>
                                    <div className="my-2">
                                        <select
                                            name="exerciseCategoryId"
                                            id="exerciseCategoryId"
                                            className="w-full bg-bgHighlight px-2 py-3 rounded-md text-textColor"
                                            placeholder="Kategorie"
                                            onChange={(e) =>
                                                setFilter(e.target.value)
                                            }
                                            value={filter}
                                        >
                                            <option
                                                value=""
                                                defaultValue=""
                                                className="text-textColor"
                                            >
                                                Alle Kategorien
                                            </option>
                                            {data?.map((c) => {
                                                return (
                                                    <option
                                                        key={c.id}
                                                        value={c.name}
                                                        className="text-textColor"
                                                    >
                                                        {c.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                    <div>
                                        <p className="text-center font-semibold text-primary">
                                            {results}{" "}
                                            {results === 1
                                                ? "Ergebnis"
                                                : "Ergebnisse"}
                                        </p>
                                        <p
                                            onClick={() => setFilter("")}
                                            className="my-2 text-center text-sm cursor-pointer"
                                        >
                                            Filter zurücksetzen
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default FilterMenu;
