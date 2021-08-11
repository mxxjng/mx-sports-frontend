import { motion } from "framer-motion";

import { API_URL } from "../../utils/constants";
import { useFetch } from "../../hooks/useFetch";
import { ExerciseCategory } from "../../interfaces/interfaces";

import SelectCategory from "./SelectCategory";
import MotionDiv from "../MotionDiv/MotionDiv";
import CloseIcon from "../Icons/CloseIcon";
import MobileBorderTop from "../MobileBorderTop";
import FilterResult from "./FilterResult";

interface FilterMenuProps {
    isOpen: boolean;
    close: () => void;
    setFilter: (category: string) => void;
    results: number;
    filter: string;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
    isOpen,
    close,
    setFilter,
    results,
    filter,
}) => {
    const { status, data, error } = useFetch<ExerciseCategory[]>(
        `${API_URL}/api/v1/exercise/category`,
        "GET"
    );

    console.log(data);

    return (
        <>
            <MotionDiv
                key="wrapper"
                isOpen={isOpen}
                className="fixed w-full h-full dark-opacity top-0 left-0 flex justify-center items-end md:items-center z-highest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    key="modal"
                    className="w-full md:w-6/12 lg:w-5/12 xl:w-3/12 h-3/6 bg-bg rounded-t-2xl md:rounded-xl p-4 overflow-x-hidden overflow-y-auto"
                    initial={{ opacity: 0, translateY: 200 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 200 }}
                    transition={{ duration: 0.3 }}
                >
                    <MobileBorderTop />
                    <div className="flex justify-end cursor-pointer py-2">
                        <CloseIcon
                            handleClick={() => {
                                close();
                            }}
                        />
                    </div>

                    <div>
                        <p className="font-semibold text-xss">
                            ÜBUNGEN FILTERN
                        </p>
                        <SelectCategory
                            categories={data}
                            filterValue={filter}
                            changeFilter={(e) => setFilter(e.target.value)}
                        />
                        <FilterResult
                            resetFilter={() => setFilter("")}
                            results={results}
                        />
                    </div>
                </motion.div>
            </MotionDiv>
        </>
    );
};
export default FilterMenu;
