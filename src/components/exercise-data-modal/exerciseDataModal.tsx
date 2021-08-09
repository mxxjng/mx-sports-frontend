import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { formatDate } from "../../utils/utils";

const ExerciseDataModal = ({
    isOpen,
    close,
    exercises,
    setCurrentTraining,
    setTrainingMenuOpen,
}) => {
    const [activeMenu, setActiveMenu] = useState("main");
    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="wrapper"
                        className="fixed w-full h-full dark-opacity top-0 left-0 flex justify-center items-end md:items-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            key="modal"
                            className="w-full md:w-6/12 h-full md:h-5/6 bg-bg md:rounded-xl p-4 overflow-x-hidden overflow-y-auto"
                            initial={{ opacity: 0, translateX: -200 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            exit={{ opacity: 0, translateX: -200 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div>
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
                                <p className="font-semibold text-xss mb-2">
                                    ALLE TRAININGSEINHEITEN
                                </p>
                                <div className="relative">
                                    {exercises.map((d) => {
                                        return (
                                            <div
                                                key={d.id}
                                                className="bg-bgHighlight px-2 py-3 rounded-md mb-2 flex items-center justify-between"
                                                onClick={() => {
                                                    setCurrentTraining(d.id);
                                                    setTrainingMenuOpen();
                                                }}
                                            >
                                                <p className="text-sm whitespace-nowrap">
                                                    {formatDate(
                                                        d.date.split("T")[0]
                                                    )}
                                                </p>
                                                <div className="">
                                                    <svg
                                                        width="22"
                                                        height="11"
                                                        viewBox="0 0 22 11"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.81814 1H4.27269C4.12802 1 3.98929 1.05747 3.88699 1.15976C3.7847 1.26205 3.72723 1.40079 3.72723 1.54545V9.54545C3.72723 9.61708 3.74134 9.68801 3.76875 9.75419C3.79617 9.82037 3.83634 9.8805 3.88699 9.93115C3.93764 9.9818 3.99777 10.022 4.06395 10.0494C4.13013 10.0768 4.20106 10.0909 4.27269 10.0909H6.81814C6.88977 10.0909 6.9607 10.0768 7.02688 10.0494C7.09306 10.022 7.15319 9.9818 7.20384 9.93115C7.25449 9.8805 7.29467 9.82037 7.32208 9.75419C7.34949 9.68801 7.3636 9.61708 7.3636 9.54545V1.54545C7.3636 1.40079 7.30613 1.26205 7.20384 1.15976C7.10155 1.05747 6.96281 1 6.81814 1V1Z"
                                                            stroke="#7668CB"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M17.7273 1H15.1818C15.0371 1 14.8984 1.05747 14.7961 1.15976C14.6938 1.26205 14.6364 1.40079 14.6364 1.54545V9.54545C14.6364 9.61708 14.6505 9.68801 14.6779 9.75419C14.7053 9.82037 14.7455 9.8805 14.7961 9.93115C14.8468 9.9818 14.9069 10.022 14.9731 10.0494C15.0392 10.0768 15.1102 10.0909 15.1818 10.0909H17.7273C17.7989 10.0909 17.8698 10.0768 17.936 10.0494C18.0022 10.022 18.0623 9.9818 18.113 9.93115C18.1636 9.8805 18.2038 9.82037 18.2312 9.75419C18.2586 9.68801 18.2727 9.61708 18.2727 9.54545V1.54545C18.2727 1.40079 18.2152 1.26205 18.113 1.15976C18.0107 1.05747 17.8719 1 17.7273 1V1Z"
                                                            stroke="#7668CB"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M1 7.72727V3.36363C1 3.21897 1.05747 3.08023 1.15976 2.97794C1.26205 2.87564 1.40079 2.81818 1.54545 2.81818H3.18182C3.32648 2.81818 3.46522 2.87564 3.56751 2.97794C3.66981 3.08023 3.72727 3.21897 3.72727 3.36363V7.72727C3.72727 7.87193 3.66981 8.01067 3.56751 8.11296C3.46522 8.21525 3.32648 8.27272 3.18182 8.27272H1.54545C1.40079 8.27272 1.26205 8.21525 1.15976 8.11296C1.05747 8.01067 1 7.87193 1 7.72727V7.72727Z"
                                                            stroke="#7668CB"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M21 7.72727V3.36363C21 3.21897 20.9425 3.08023 20.8402 2.97794C20.7379 2.87564 20.5992 2.81818 20.4545 2.81818H18.8182C18.6735 2.81818 18.5348 2.87564 18.4325 2.97794C18.3302 3.08023 18.2727 3.21897 18.2727 3.36363V7.72727C18.2727 7.87193 18.3302 8.01067 18.4325 8.11296C18.5348 8.21525 18.6735 8.27272 18.8182 8.27272H20.4545C20.5992 8.27272 20.7379 8.21525 20.8402 8.11296C20.9425 8.01067 21 7.87193 21 7.72727V7.72727Z"
                                                            stroke="#7668CB"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            d="M7.36365 5.54541H14.6364"
                                                            stroke="#7668CB"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default ExerciseDataModal;
