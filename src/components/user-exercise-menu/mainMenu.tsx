import { motion, AnimatePresence } from "framer-motion";

const MainMenu = ({ activeMenu, setActiveMenu }) => {
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
                    <div
                        className="flex items-center px-2 py-3 rounded-md mb-2 cursor-pointer"
                        onClick={() => setActiveMenu("oneRepMax")}
                    >
                        <button className="text-headline font-text font-semibold">
                            1 RM hinzufügen
                        </button>
                    </div>
                    <div className="flex items-center px-2 py-3 rounded-md mb-2 cursor-pointer">
                        <button className="text-headline font-text font-semibold">
                            Training hinzufügen
                        </button>
                    </div>
                    <div className="flex items-center px-2 py-3 rounded-md mb-2 cursor-pointer">
                        <button className="text-headline font-text font-semibold">
                            Anmerkung hinzufügen
                        </button>
                    </div>
                    <div className="flex items-center px-2 py-3 rounded-md mb-2 cursor-pointer">
                        <svg
                            width="15"
                            height="16"
                            viewBox="0 0 15 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-4"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.39738 16.0002C6.31337 16.0002 5.25655 15.9882 4.21094 15.9666C2.87332 15.9402 1.9477 15.073 1.7965 13.7034C1.5445 11.4314 1.11329 6.07608 1.10929 6.02248C1.08209 5.69208 1.32849 5.40247 1.6589 5.37607C1.9845 5.36727 2.27891 5.59607 2.30531 5.92568C2.30931 5.98008 2.73972 11.317 2.98932 13.5714C3.07492 14.3498 3.49493 14.7514 4.23574 14.7666C6.23577 14.809 8.2766 14.8114 10.4766 14.7714C11.2638 14.7562 11.6894 14.3626 11.7775 13.5658C12.0255 11.3306 12.4575 5.98008 12.4623 5.92568C12.4887 5.59607 12.7807 5.36567 13.1079 5.37607C13.4383 5.40327 13.6847 5.69208 13.6583 6.02248C13.6535 6.07688 13.2199 11.4458 12.9703 13.6978C12.8151 15.0954 11.8919 15.9458 10.4982 15.9714C9.43182 15.9898 8.403 16.0002 7.39738 16.0002"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.1666 3.99152H0.600009C0.268804 3.99152 0 3.72272 0 3.39151C0 3.06031 0.268804 2.7915 0.600009 2.7915H14.1666C14.4978 2.7915 14.7666 3.06031 14.7666 3.39151C14.7666 3.72272 14.4978 3.99152 14.1666 3.99152"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.5525 3.9915C10.6421 3.9915 9.85166 3.34269 9.67246 2.44988L9.47805 1.47707C9.43725 1.32906 9.26845 1.20026 9.07645 1.20026H5.69C5.498 1.20026 5.32919 1.32906 5.28039 1.51387L5.09399 2.44988C4.91559 3.34269 4.12438 3.9915 3.21396 3.9915C2.88276 3.9915 2.61395 3.7227 2.61395 3.39149C2.61395 3.06029 2.88276 2.79149 3.21396 2.79149C3.55477 2.79149 3.85077 2.54828 3.91797 2.21388L4.11238 1.24106C4.30998 0.495452 4.95559 0.000244141 5.69 0.000244141H9.07645C9.81086 0.000244141 10.4565 0.495452 10.6461 1.20506L10.8493 2.21388C10.9157 2.54828 11.2117 2.79149 11.5525 2.79149C11.8837 2.79149 12.1525 3.06029 12.1525 3.39149C12.1525 3.7227 11.8837 3.9915 11.5525 3.9915"
                                fill="white"
                            />
                        </svg>
                        <button
                            className="text-headline font-text font-semibold"
                            onClick={() => setActiveMenu("delete")}
                        >
                            Übung löschen
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default MainMenu;