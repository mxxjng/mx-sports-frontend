import { ChangeEvent } from "react";
import { ExerciseCategory } from "../../interfaces/interfaces";

interface SelectCategoryProps {
    categories: ExerciseCategory[];
    changeFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
    filterValue: string;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({
    categories,
    changeFilter,
    filterValue,
}) => {
    return (
        <div className="my-2">
            <select
                name="exerciseCategoryId"
                id="exerciseCategoryId"
                className="w-full bg-bgHighlight px-2 py-3 rounded-md text-textColor"
                placeholder="Kategorie"
                onChange={changeFilter}
                value={filterValue}
            >
                <option value="" defaultValue="" className="text-textColor">
                    Alle Kategorien
                </option>
                {categories?.map((c) => {
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
    );
};
export default SelectCategory;
