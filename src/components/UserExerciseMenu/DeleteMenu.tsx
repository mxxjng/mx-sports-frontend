import { motion, AnimatePresence } from "framer-motion";
import { deleteUserExercise } from "../../utils/utils";

const DeleteMenu = ({ activeMenu, setActiveMenu, exerciseId }) => {
    return (
        <AnimatePresence>
            {activeMenu === "delete" && (
                <motion.div
                    initial={{ opacity: 0, translateX: 200 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: 200 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full"
                >
                    <div className="text-center box-border">
                        <h2 className="text-headline text-2xl font-headline mb-4">
                            Übung wirklich löschen?
                        </h2>
                        <div className="block box-border">
                            <button
                                className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary"
                                onClick={() => deleteUserExercise(exerciseId)}
                            >
                                Ja
                            </button>
                            <button
                                className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md border border-primary "
                                onClick={() => setActiveMenu("main")}
                            >
                                Nein
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default DeleteMenu;
