import { motion, AnimatePresence } from "framer-motion";

const AdminMainMenu = ({ activeMenu, setActiveMenu }) => {
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
                        onClick={() => setActiveMenu("category")}
                    >
                        <button className="text-headline font-text font-semibold">
                            Übungskategorie hinzufügen
                        </button>
                    </div>
                    <div
                        className="flex items-center px-2 py-3 rounded-md mb-2 cursor-pointer"
                        onClick={() => setActiveMenu("exercise")}
                    >
                        <button className="text-headline font-text font-semibold">
                            Übung hinzufügen
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default AdminMainMenu;
