import { motion, AnimatePresence } from "framer-motion";

import { deleteUserExercise } from "../../utils/utils";

const DeleteExercise = ({ exerciseId, isOpen, closeModal }): JSX.Element => {
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
                            className="w-full md:w-6/12 lg:w-4/12 bg-bg rounded-t-2xl md:rounded-xl p-4 md:p-12 overflow-x-hidden overflow-y-auto box-border mb-0 md:mb-20"
                            initial={{ opacity: 0, translateY: 200 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 200 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="block md:hidden bg-bgHighlight w-20 h-1 rounded-md mx-auto mb-3"></div>
                            <div className="text-center box-border">
                                <h2 className="text-headline text-2xl font-headline mb-4">
                                    Übung wirklich löschen?
                                </h2>
                                <div className="block box-border">
                                    <button
                                        className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary"
                                        onClick={() =>
                                            deleteUserExercise(exerciseId)
                                        }
                                    >
                                        Ja
                                    </button>
                                    <button
                                        className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md border border-primary "
                                        onClick={closeModal}
                                    >
                                        Nein
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default DeleteExercise;
