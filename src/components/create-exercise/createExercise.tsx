import { useState } from "react";
import CategoryMenu from "./categorymenu";
import ExerciseMenu from "./exercisemenu";

const CreateExercise = ({ close }) => {
    const [activeMenu, setActiveMenu] = useState("main");
    const [selectedCategory, setSelectedCategory] = useState("");

    console.log(activeMenu);
    console.log(selectedCategory);

    return (
        <div className="fixed w-full h-full dark-opacity top-0 left-0 flex justify-center items-center z-highest">
            <div className="w-11/12 md:w-6/12 h-5/6 bg-bg rounded-md p-4">
                <p
                    className="text-right text-headline font-bold"
                    onClick={close}
                >
                    X
                </p>
                <CategoryMenu
                    activeMenu={activeMenu}
                    setCategory={(category) => setSelectedCategory(category)}
                    setActiveMenu={(menu) => setActiveMenu(menu)}
                />
                <ExerciseMenu
                    activeMenu={activeMenu}
                    setActiveMenu={(menu) => setActiveMenu(menu)}
                    selectedCategory={selectedCategory}
                />
            </div>
        </div>
    );
};
export default CreateExercise;
