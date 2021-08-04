import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DeleteMenu from "./deleteMenu";
import MainMenu from "./mainMenu";
import OneRepMaxMenu from "./oneRepMaxMenu";

const UserExerciseMenu = ({ isOpen, close, exerciseId }) => {
    const [activeMenu, setActiveMenu] = useState("main");
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
                            className="w-full md:w-6/12 h-4/6 bg-bg rounded-t-2xl md:rounded-xl p-4 overflow-x-hidden overflow-y-auto"
                            initial={{ opacity: 0, translateY: 200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 200 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="block md:hidden bg-bgHighlight w-20 h-1 rounded-md mx-auto"></div>
                            <p
                                className="text-right text-headline font-headline cursor-pointer"
                                onClick={() => {
                                    close();
                                    setActiveMenu("main");
                                }}
                            >
                                X
                            </p>
                            <div className="relative">
                                <MainMenu
                                    activeMenu={activeMenu}
                                    setActiveMenu={(menu) =>
                                        setActiveMenu(menu)
                                    }
                                />
                                <DeleteMenu
                                    activeMenu={activeMenu}
                                    exerciseId={exerciseId}
                                    setActiveMenu={(menu) =>
                                        setActiveMenu(menu)
                                    }
                                />
                                <OneRepMaxMenu
                                    activeMenu={activeMenu}
                                    exerciseId={exerciseId}
                                    setActiveMenu={(menu) =>
                                        setActiveMenu(menu)
                                    }
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default UserExerciseMenu;
